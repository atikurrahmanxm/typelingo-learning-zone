import React from 'react'
import { X, Heart, Code2, Sparkles, CheckCircle2, Flame, Award, Globe, BookOpen } from 'lucide-react'

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function AboutCreatorModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-pop-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200/90 flex flex-col relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Creator Header */}
        <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 mb-3 border-2 border-white ring-4 ring-indigo-50">
            <span className="text-3xl font-black">AR</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Atikur Rahman
          </h3>
          <p className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80 mt-1.5">
            Lead Developer & Creator of TypeLingo Zone
          </p>
          <p className="text-xs text-slate-500 mt-2 max-w-sm">
            ইংরেজি শোনা, শুদ্ধ উচ্চারণ ও সুপারফাস্ট টাইপিং প্র্যাকটিসকে আনন্দদায়ক ও ফলপ্রসূ করতে এই প্ল্যাটফর্মটি ডেভেলপ করা হয়েছে।
          </p>

          <div className="flex items-center gap-2 mt-3.5">
            <a
              href="https://github.com/atikurrahmanxm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:scale-102"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@atikurrahmanxm on GitHub</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights of the Platform */}
        <div className="py-4 space-y-3">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
            প্ল্যাটফর্মের মূল সুবিধাসমূহ (Key Features)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-slate-900">৩,০০০+ বাস্তবসম্মত বাক্য</strong>
                <span>১৭টি ক্যাটাগরির সমৃদ্ধ কনটেন্ট লাইব্রেরি।</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-slate-900">নন-রিপিটিং কিউ ইঞ্জিন</strong>
                <span>পরের দিন আসলে একই প্রশ্ন বারবার আসবে না।</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
              <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-slate-900">ডেইলি চ্যালেঞ্জ ও স্ট্রিক</strong>
                <span>প্রতিদিনের ইউনিক ১০টি বাক্য ও ধারাবাহিকতা ট্র্যাকিং।</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
              <Award className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-slate-900">রিয়েল-টাইম WPM ও স্পিড</strong>
                <span>লাইভ স্পিড ও নির্ভুলতা বিশ্লেষণ (Monkeytype Style)।</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by Atikur Rahman</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  )
}
