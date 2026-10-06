import React, { useState } from 'react'
import { X, BookOpen, ChevronRight, Sparkles } from 'lucide-react'
import { COURSES } from '../data/lessons'

export function LessonSelectorModal({
  isOpen,
  onClose,
  currentLessonId,
  onSelectLesson,
}) {
  const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id)

  if (!isOpen) return null

  const activeCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0]

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 select-none animate-pop-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">কোর্স ও লেসন নির্বাচন করুন</h3>
              <p className="text-xs text-slate-400">Present, Past, Future, Modal Verbs ও প্রয়োজনীয় বাক্য</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Tabs (Horizontal scroll or wrap) */}
        <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar border-b border-slate-100">
          {COURSES.map((course) => {
            const isSelected = course.id === selectedCourseId
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {course.title.split('(')[0].trim()}
              </button>
            )
          })}
        </div>

        {/* Selected Course's Lessons List */}
        <div className="overflow-y-auto py-3 space-y-2.5 flex-1">
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
                      ? 'border-purple-500 bg-purple-50/60 shadow-xs'
                      : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                        isSelected
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-purple-100/70 text-purple-700 group-hover:bg-purple-200'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-purple-900 transition-colors">
                        {lesson.title}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {lesson.exercises.length} টি বাক্য • {lesson.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-purple-600' : 'text-slate-300'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            প্রতিটি বাক্যে স্টুডিও নিউরাল ভয়েস এবং বাংলা অর্থ যুক্ত আছে
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  )
}
