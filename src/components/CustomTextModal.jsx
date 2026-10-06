import React, { useState } from 'react'
import { X, Sparkles, Plus } from 'lucide-react'
import { parseSentenceIntoWords } from '../data/lessons'

export function CustomTextModal({ isOpen, onClose, onStartCustomLesson }) {
  const [inputText, setInputText] = useState('')

  if (!isOpen) return null

  const handleCreate = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    // Split input into sentences by periods, question marks, exclamation marks, or newlines
    const rawSentences = inputText
      .split(/(?<=[.?!])\s+|\n+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 2)

    if (rawSentences.length === 0) return

    const customExercises = rawSentences.map((sentence, idx) => ({
      id: `custom-${idx}-${Date.now()}`,
      sentence: sentence.replace(/[^\w\s',.?!-]/g, ''),
      words: parseSentenceIntoWords(sentence),
    }))

    const customLesson = {
      id: `custom-lesson-${Date.now()}`,
      title: 'Custom Practice Session',
      description: 'Your personalized text practice',
      difficulty: 'Custom',
      exercises: customExercises,
    }

    onStartCustomLesson(customLesson)
    setInputText('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200/80 animate-pop-in">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Custom Text Practice</h3>
              <p className="text-xs text-slate-400">Paste your own sentences to listen and type</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleCreate} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Enter or Paste English Sentences
            </label>
            <textarea
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="e.g. Learning to type with audio helps both English listening and typing speed. Practice every day!"
              className="w-full p-3.5 rounded-2xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none text-sm text-slate-800 placeholder-slate-400 transition-all font-sans"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Sentences will automatically be tagged and converted into listening exercises.
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white shadow-md shadow-purple-500/20 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Start Practice</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
