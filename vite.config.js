import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'edge-tts-server',
      configureServer(server) {
        server.middlewares.use('/api/tts', async (req, res) => {
          try {
            const url = new URL(req.url, 'http://localhost')
            const text = url.searchParams.get('text')
            const rate = url.searchParams.get('rate') || 'normal'

            if (!text) {
              res.statusCode = 400
              res.end('Missing text parameter')
              return
            }

            const cacheDir = path.resolve('public/audio/cache')
            if (!fs.existsSync(cacheDir)) {
              fs.mkdirSync(cacheDir, { recursive: true })
            }

            const hash = crypto.createHash('md5').update(`v3_soft_ava_${text}_${rate}`).digest('hex')
            const targetFile = path.join(cacheDir, `${hash}.mp3`)

            if (fs.existsSync(targetFile)) {
              const fileStream = fs.createReadStream(targetFile)
              res.setHeader('Content-Type', 'audio/mpeg')
              fileStream.pipe(res)
              return
            }

            // Generate on the fly using python -m edge_tts with soft, soothing, articulate voice
            const rateFlag = rate === 'slow' ? '-22%' : '-4%'
            const child = spawn('python', [
              '-m', 'edge_tts',
              '-v', 'en-US-AvaNeural',
              '-t', text,
              `--rate=${rateFlag}`,
              `--pitch=-2Hz`,
              `--volume=-5%`,
              `--write-media=${targetFile}`
            ])

            child.on('close', (code) => {
              if (code === 0 && fs.existsSync(targetFile)) {
                res.setHeader('Content-Type', 'audio/mpeg')
                const fileStream = fs.createReadStream(targetFile)
                fileStream.pipe(res)
              } else {
                res.statusCode = 500
                res.end('Failed to generate audio')
              }
            })
          } catch (err) {
            res.statusCode = 500
            res.end(err.message)
          }
        })
      }
    }
  ],
  server: {
    port: 3000,
    open: false
  }
})
