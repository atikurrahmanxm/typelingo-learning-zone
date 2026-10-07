import React, { useState } from 'react'
import { X, BookOpen, ChevronRight, Sparkles, Search, Layers, Flame } from 'lucide-react'
import { COURSES, CATEGORIES_SUMMARY, ALL_EXERCISES } from '../data/lessons'

export function LessonSelectorModal({
  isOpen,
  onClose,
  currentLessonId,
  selectedCategory = 'all',
  onSelectLesson,
  onSelectCategory,
}) {
  const [activeTab, setActiveTab] = useState('categories') // 'categories' | 'courses'
  const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  if (!isOpen) return null

  const activeCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0]

  // Filter categories by search
  const filteredCategories = CATEGORIES_SUMMARY.filter((cat) => {
    const q = searchQuery.toLowerCase()
    return (
      cat.name.toLowerCase().includes(q) ||
      cat.bn.toLowerCase().includes(q)
    )
  })

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 select-none animate-pop-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                টপিক ও ক্যাটাগরি ব্রাউজ করুন (৩,০০০+ বাক্য)
              </h3>
              <p className="text-xs text-slate-400">
                ১৭টি ক্যাটাগরি, দৈনন্দিন কথাবার্তা, জব, টেক ও গ্রামার
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-b border-slate-100">
          <div className="flex items-center p-1 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setActiveTab('categories')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'categories'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ১৭টি ক্যাটাগরি (3,000)
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'courses'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              স্ট্রাকচার্ড কোর্সসমূহ
            </button>
          </div>

          <div className="relative flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ক্যাটাগরি বা টপিক খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Tab 1: Categories List (3000 sentences organized) */}
        {activeTab === 'categories' && (
          <div className="overflow-y-auto py-3 space-y-2 flex-1 pr-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id
                const isDaily = cat.id === 'daily-challenge'

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id)
                      onClose()
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/70 shadow-xs'
                        : isDaily
                        ? 'border-amber-300 bg-amber-50/60 hover:bg-amber-100/70'
                        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : isDaily
                            ? 'bg-amber-500 text-white'
                            : 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-100'
                        }`}
                      >
                        {isDaily ? <Flame className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-900 transition-colors line-clamp-1">
                          {cat.name}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {cat.bn} • <strong className="text-indigo-600 font-semibold">{cat.count}</strong> বাক্য
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'text-indigo-600' : 'text-slate-300'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Structured Courses */}
        {activeTab === 'courses' && (
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Course Tabs */}
            <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar border-b border-slate-100 shrink-0">
              {COURSES.map((course) => {
                const isSelected = course.id === selectedCourseId
                return (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {course.title.split('(')[0].trim()}
                  </button>
                )
              })}
            </div>

            {/* Selected Course's Lessons List */}
            <div className="overflow-y-auto py-3 space-y-2 flex-1">
              <div className="mb-2">
                <h4 className="text-sm font-bold text-slate-800">{activeCourse.title}</h4>
                <p className="text-xs text-slate-400">{activeCourse.subtitle}</p>
              </div>

              <div className="space-y-2">
                {activeCourse.lessons.map((lesson, idx) => {
                  const isSelected = lesson.id === currentLessonId
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        onSelectLesson(activeCourse, lesson)
                        onClose()
                      }}
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50/60 shadow-xs'
                          : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-indigo-100/70 text-indigo-700 group-hover:bg-indigo-200'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 transition-colors">
                            {lesson.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {lesson.exercises.length} টি বাক্য • {lesson.subtitle}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                          isSelected ? 'text-indigo-600' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            সকল বাক্যে ন্যাচারাল ভয়েস ও বাংলা অনুবাদ সংযুক্ত
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  )
}
