import asyncio
import os
import edge_tts

sentences = {
    'ex-1': 'I am a student.',
    'ex-2': 'I live in this city.',
    'ex-3': 'I am learning English again.',
    'ex-2-1': 'My family lives in a quiet town.',
    'ex-2-2': 'I drink fresh coffee every morning.',
    'ex-2-3': 'We love spending time together.',
    'ex-3-1': 'He works at an international office.',
    'ex-3-2': 'They speak English very fluently.',
    'ex-3-3': 'Practice makes everything easier.',
    # Bonus common sentences
    'say-name': 'Say your name and role.',
    'hello-student': 'Hello, I am a student.',
}

os.makedirs('public/audio', exist_ok=True)

async def main():
    print("Starting neural audio generation with Microsoft Jenny Neural...")
    for ex_id, text in sentences.items():
        out_file = os.path.join('public', 'audio', f'{ex_id}.mp3')
        communicate = edge_tts.Communicate(text, 'en-US-JennyNeural')
        await communicate.save(out_file)
        print(f"[OK] Saved {out_file} ({text})")
    print("Completed all neural audio generations!")

if __name__ == '__main__':
    asyncio.run(main())
