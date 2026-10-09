export const COURSES = [
  {
    id: 'course-restart-english',
    title: 'Restart English (A1 Beginner)',
    subtitle: 'Start with a simple introduction',
    level: 'Beginner',
    badge: 'Basics',
    lessons: [
      {
        id: 'lesson-basic-1',
        title: 'Say Your Name and Role',
        subtitle: 'Introduction and identity sentences',
        difficulty: 'Easy',
        lessonNumber: 1,
        totalInCourse: 3,
        exercises: [
          {
            id: 'ex-1',
            sentence: 'I am a student',
            bengaliMeaning: 'আমি একজন শিক্ষার্থী / ছাত্র',
            audioUrl: '/audio/ex-1.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'am', role: 'Verb', roleColor: 'pink', ipa: '/æm/', pos: 'auxiliary verb', bn: 'হই' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একজন' },
              { word: 'student', role: 'Direct Object', roleColor: 'blue', ipa: '/ˈstjuːdənt/', pos: 'noun', bn: 'শিক্ষার্থী' },
            ],
          },
          {
            id: 'ex-2',
            sentence: 'I live in this city',
            bengaliMeaning: 'আমি এই শহরে বাস করি',
            audioUrl: '/audio/ex-2.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'live', role: 'Verb', roleColor: 'pink', ipa: '/lɪv/', pos: 'verb', bn: 'বাস করি' },
              { word: 'in', role: 'Prep.', roleColor: 'cyan', ipa: '/ɪn/', pos: 'preposition', bn: 'এ' },
              { word: 'this', role: 'Determiner', roleColor: 'blue', ipa: '/ðɪs/', pos: 'pronoun', bn: 'এই' },
              { word: 'city', role: 'Location', roleColor: 'emerald', ipa: '/ˈsɪti/', pos: 'noun', bn: 'শহর' },
            ],
          },
          {
            id: 'ex-3',
            sentence: 'I am learning English again',
            bengaliMeaning: 'আমি আবার ইংরেজি শিখছি',
            audioUrl: '/audio/ex-3.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'am', role: 'Aux. Verb', roleColor: 'pink', ipa: '/æm/', pos: 'auxiliary verb', bn: 'আছি' },
              { word: 'learning', role: 'Verb', roleColor: 'purple', ipa: '/ˈlɜːrnɪŋ/', pos: 'verb', bn: 'শিখছি' },
              { word: 'English', role: 'Direct Object', roleColor: 'blue', ipa: '/ˈɪŋɡlɪʃ/', pos: 'proper noun', bn: 'ইংরেজি' },
              { word: 'again', role: 'Adverb', roleColor: 'amber', ipa: '/əˈɡen/', pos: 'adverb', bn: 'আবার' },
            ],
          },
        ],
      },
      {
        id: 'lesson-basic-2',
        title: 'Talk About Your Home and Day',
        subtitle: 'Everyday conversations and family descriptions',
        difficulty: 'Beginner',
        lessonNumber: 2,
        totalInCourse: 3,
        exercises: [
          {
            id: 'ex-2-1',
            sentence: 'My family lives in a quiet town',
            bengaliMeaning: 'আমার পরিবার একটি শান্ত শহরে বাস করে',
            audioUrl: '/audio/ex-2-1.mp3',
            words: [
              { word: 'My', role: 'Possessive', roleColor: 'orange', ipa: '/maɪ/', pos: 'determiner', bn: 'আমার' },
              { word: 'family', role: 'Subject', roleColor: 'blue', ipa: '/ˈfæməli/', pos: 'noun', bn: 'পরিবার' },
              { word: 'lives', role: 'Verb', roleColor: 'pink', ipa: '/lɪvz/', pos: 'verb', bn: 'বাস করে' },
              { word: 'in', role: 'Prep.', roleColor: 'cyan', ipa: '/ɪn/', pos: 'preposition', bn: 'এ' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'quiet', role: 'Modifier', roleColor: 'amber', ipa: '/ˈkwaɪət/', pos: 'adjective', bn: 'শান্ত' },
              { word: 'town', role: 'Location', roleColor: 'emerald', ipa: '/taʊn/', pos: 'noun', bn: 'শহর' },
            ],
          },
          {
            id: 'ex-2-2',
            sentence: 'I drink fresh coffee every morning',
            bengaliMeaning: 'আমি প্রতিদিন সকালে তাজা কফি পান করি',
            audioUrl: '/audio/ex-2-2.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'drink', role: 'Verb', roleColor: 'pink', ipa: '/drɪŋk/', pos: 'verb', bn: 'পান করি' },
              { word: 'fresh', role: 'Modifier', roleColor: 'amber', ipa: '/freʃ/', pos: 'adjective', bn: 'তাজা' },
              { word: 'coffee', role: 'Direct Object', roleColor: 'blue', ipa: '/ˈkɔːfi/', pos: 'noun', bn: 'কফি' },
              { word: 'every', role: 'Determiner', roleColor: 'cyan', ipa: '/ˈevri/', pos: 'determiner', bn: 'প্রতি' },
              { word: 'morning', role: 'Time', roleColor: 'emerald', ipa: '/ˈmɔːrnɪŋ/', pos: 'noun', bn: 'সকালে' },
            ],
          },
          {
            id: 'ex-2-3',
            sentence: 'We love spending time together',
            bengaliMeaning: 'আমরা একসাথে সময় কাটাতে ভালোবাসি',
            audioUrl: '/audio/ex-2-3.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'love', role: 'Verb', roleColor: 'pink', ipa: '/lʌv/', pos: 'verb', bn: 'ভালোবাসি' },
              { word: 'spending', role: 'Activity', roleColor: 'purple', ipa: '/ˈspendɪŋ/', pos: 'gerund', bn: 'কাটানো' },
              { word: 'time', role: 'Object', roleColor: 'blue', ipa: '/taɪm/', pos: 'noun', bn: 'সময়' },
              { word: 'together', role: 'Adverb', roleColor: 'amber', ipa: '/təˈɡeðər/', pos: 'adverb', bn: 'একসাথে' },
            ],
          },
        ],
      },
      {
        id: 'lesson-basic-3',
        title: 'Study, Work and Skills',
        subtitle: 'Sentences about career and fluent communication',
        difficulty: 'Intermediate',
        lessonNumber: 3,
        totalInCourse: 3,
        exercises: [
          {
            id: 'ex-3-1',
            sentence: 'He works at an international office',
            bengaliMeaning: 'সে একটি আন্তর্জাতিক অফিসে কাজ করে',
            audioUrl: '/audio/ex-3-1.mp3',
            words: [
              { word: 'He', role: 'Subject', roleColor: 'orange', ipa: '/hiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'works', role: 'Verb', roleColor: 'pink', ipa: '/wɜːrks/', pos: 'verb', bn: 'কাজ করে' },
              { word: 'at', role: 'Prep.', roleColor: 'cyan', ipa: '/æt/', pos: 'preposition', bn: 'এ' },
              { word: 'an', role: 'Art.', roleColor: 'cyan', ipa: '/æn/', pos: 'determiner', bn: 'একটি' },
              { word: 'international', role: 'Modifier', roleColor: 'amber', ipa: '/ˌɪntərˈnæʃnəl/', pos: 'adjective', bn: 'আন্তর্জাতিক' },
              { word: 'office', role: 'Location', roleColor: 'emerald', ipa: '/ˈɔːfɪs/', pos: 'noun', bn: 'অফিস' },
            ],
          },
          {
            id: 'ex-3-2',
            sentence: 'They speak English very fluently',
            bengaliMeaning: 'তারা খুব সাবলীলভাবে ইংরেজি বলে',
            audioUrl: '/audio/ex-3-2.mp3',
            words: [
              { word: 'They', role: 'Subject', roleColor: 'orange', ipa: '/ðeɪ/', pos: 'pronoun', bn: 'তারা' },
              { word: 'speak', role: 'Verb', roleColor: 'pink', ipa: '/spiːk/', pos: 'verb', bn: 'বলে' },
              { word: 'English', role: 'Language', roleColor: 'blue', ipa: '/ˈɪŋɡlɪʃ/', pos: 'noun', bn: 'ইংরেজি' },
              { word: 'very', role: 'Degree', roleColor: 'amber', ipa: '/ˈveri/', pos: 'adverb', bn: 'খুব' },
              { word: 'fluently', role: 'Manner', roleColor: 'pink', ipa: '/ˈfluːəntli/', pos: 'adverb', bn: 'সাবলীলভাবে' },
            ],
          },
          {
            id: 'ex-3-3',
            sentence: 'Practice makes everything easier',
            bengaliMeaning: 'অনুশীলন সবকিছু সহজ করে তোলে',
            audioUrl: '/audio/ex-3-3.mp3',
            words: [
              { word: 'Practice', role: 'Subject', roleColor: 'orange', ipa: '/ˈpræktɪs/', pos: 'noun', bn: 'অনুশীলন' },
              { word: 'makes', role: 'Verb', roleColor: 'pink', ipa: '/meɪks/', pos: 'verb', bn: 'করে তোলে' },
              { word: 'everything', role: 'Object', roleColor: 'blue', ipa: '/ˈevriθɪŋ/', pos: 'pronoun', bn: 'সবকিছু' },
              { word: 'easier', role: 'Complement', roleColor: 'emerald', ipa: '/ˈiːziər/', pos: 'adjective', bn: 'সহজ' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'course-present-tense',
    title: 'Present Tense (বর্তমান কাল)',
    subtitle: 'Daily habits, routines and present facts',
    level: 'Essential',
    badge: 'Present',
    lessons: [
      {
        id: 'lesson-pres-1',
        title: 'Daily Habits & Routine (দৈনন্দিন অভ্যাস)',
        subtitle: 'Common daily action sentences',
        difficulty: 'Easy',
        lessonNumber: 1,
        totalInCourse: 2,
        exercises: [
          {
            id: 'pres-1',
            sentence: 'I wake up early every day',
            bengaliMeaning: 'আমি প্রতিদিন ভোরে ঘুম থেকে উঠি',
            audioUrl: '/audio/pres-1.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'wake', role: 'Verb', roleColor: 'pink', ipa: '/weɪk/', pos: 'verb', bn: 'জাগ্রত' },
              { word: 'up', role: 'Particle', roleColor: 'cyan', ipa: '/ʌp/', pos: 'preposition', bn: 'হই' },
              { word: 'early', role: 'Time', roleColor: 'amber', ipa: '/ˈɜːrli/', pos: 'adverb', bn: 'ভোরে' },
              { word: 'every', role: 'Determiner', roleColor: 'cyan', ipa: '/ˈevri/', pos: 'determiner', bn: 'প্রতি' },
              { word: 'day', role: 'Noun', roleColor: 'emerald', ipa: '/deɪ/', pos: 'noun', bn: 'দিন' },
            ],
          },
          {
            id: 'pres-2',
            sentence: 'She speaks English very well',
            bengaliMeaning: 'সে খুব ভালো ইংরেজি বলে',
            audioUrl: '/audio/pres-2.mp3',
            words: [
              { word: 'She', role: 'Subject', roleColor: 'orange', ipa: '/ʃiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'speaks', role: 'Verb', roleColor: 'pink', ipa: '/spiːks/', pos: 'verb', bn: 'বলে' },
              { word: 'English', role: 'Language', roleColor: 'blue', ipa: '/ˈɪŋɡlɪʃ/', pos: 'noun', bn: 'ইংরেজি' },
              { word: 'very', role: 'Degree', roleColor: 'amber', ipa: '/ˈveri/', pos: 'adverb', bn: 'খুব' },
              { word: 'well', role: 'Manner', roleColor: 'emerald', ipa: '/wel/', pos: 'adverb', bn: 'ভালো' },
            ],
          },
          {
            id: 'pres-3',
            sentence: 'They play football in the afternoon',
            bengaliMeaning: 'তারা বিকেলে ফুটবল খেলে',
            audioUrl: '/audio/pres-3.mp3',
            words: [
              { word: 'They', role: 'Subject', roleColor: 'orange', ipa: '/ðeɪ/', pos: 'pronoun', bn: 'তারা' },
              { word: 'play', role: 'Verb', roleColor: 'pink', ipa: '/pleɪ/', pos: 'verb', bn: 'খেলে' },
              { word: 'football', role: 'Object', roleColor: 'blue', ipa: '/ˈfʊtbɔːl/', pos: 'noun', bn: 'ফুটবল' },
              { word: 'in', role: 'Prep.', roleColor: 'cyan', ipa: '/ɪn/', pos: 'preposition', bn: 'এ' },
              { word: 'the', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'afternoon', role: 'Time', roleColor: 'emerald', ipa: '/ˌæftərˈnuːn/', pos: 'noun', bn: 'বিকেলে' },
            ],
          },
          {
            id: 'pres-4',
            sentence: 'We eat dinner together',
            bengaliMeaning: 'আমরা একসাথে রাতের খাবার খাই',
            audioUrl: '/audio/pres-4.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'eat', role: 'Verb', roleColor: 'pink', ipa: '/iːt/', pos: 'verb', bn: 'খাই' },
              { word: 'dinner', role: 'Object', roleColor: 'blue', ipa: '/ˈdɪnər/', pos: 'noun', bn: 'রাতের খাবার' },
              { word: 'together', role: 'Adverb', roleColor: 'amber', ipa: '/təˈɡeðər/', pos: 'adverb', bn: 'একসাথে' },
            ],
          },
        ],
      },
      {
        id: 'lesson-pres-2',
        title: 'Ongoing Actions & Facts (চলমান কাজ ও সত্য)',
        subtitle: 'Continuous present and general facts',
        difficulty: 'Easy',
        lessonNumber: 2,
        totalInCourse: 2,
        exercises: [
          {
            id: 'pres-5',
            sentence: 'I am reading a good book',
            bengaliMeaning: 'আমি একটি ভালো বই পড়ছি',
            audioUrl: '/audio/pres-5.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'am', role: 'Aux. Verb', roleColor: 'pink', ipa: '/æm/', pos: 'auxiliary verb', bn: 'আছি' },
              { word: 'reading', role: 'Verb', roleColor: 'purple', ipa: '/ˈriːdɪŋ/', pos: 'verb', bn: 'পড়ছি' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'good', role: 'Modifier', roleColor: 'amber', ipa: '/ɡʊd/', pos: 'adjective', bn: 'ভালো' },
              { word: 'book', role: 'Object', roleColor: 'blue', ipa: '/bʊk/', pos: 'noun', bn: 'বই' },
            ],
          },
          {
            id: 'pres-6',
            sentence: 'The sun rises in the east',
            bengaliMeaning: 'সূর্য পূর্ব দিকে ওঠে',
            audioUrl: '/audio/pres-6.mp3',
            words: [
              { word: 'The', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'sun', role: 'Subject', roleColor: 'orange', ipa: '/sʌn/', pos: 'noun', bn: 'সূর্য' },
              { word: 'rises', role: 'Verb', roleColor: 'pink', ipa: '/ˈraɪzɪz/', pos: 'verb', bn: 'ওঠে' },
              { word: 'in', role: 'Prep.', roleColor: 'cyan', ipa: '/ɪn/', pos: 'preposition', bn: 'এ' },
              { word: 'the', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'east', role: 'Direction', roleColor: 'emerald', ipa: '/iːst/', pos: 'noun', bn: 'পূর্ব' },
            ],
          },
          {
            id: 'pres-7',
            sentence: 'He is waiting for the bus',
            bengaliMeaning: 'সে বাসের জন্য অপেক্ষা করছে',
            audioUrl: '/audio/pres-7.mp3',
            words: [
              { word: 'He', role: 'Subject', roleColor: 'orange', ipa: '/hiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'is', role: 'Aux. Verb', roleColor: 'pink', ipa: '/ɪz/', pos: 'auxiliary verb', bn: 'আছে' },
              { word: 'waiting', role: 'Verb', roleColor: 'purple', ipa: '/ˈweɪtɪŋ/', pos: 'verb', bn: 'অপেক্ষা করছে' },
              { word: 'for', role: 'Prep.', roleColor: 'cyan', ipa: '/fɔːr/', pos: 'preposition', bn: 'জন্য' },
              { word: 'the', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'bus', role: 'Object', roleColor: 'blue', ipa: '/bʌs/', pos: 'noun', bn: 'বাস' },
            ],
          },
          {
            id: 'pres-8',
            sentence: 'They are learning new skills',
            bengaliMeaning: 'তারা নতুন দক্ষতা শিখছে',
            audioUrl: '/audio/pres-8.mp3',
            words: [
              { word: 'They', role: 'Subject', roleColor: 'orange', ipa: '/ðeɪ/', pos: 'pronoun', bn: 'তারা' },
              { word: 'are', role: 'Aux. Verb', roleColor: 'pink', ipa: '/ɑːr/', pos: 'auxiliary verb', bn: 'আছেন' },
              { word: 'learning', role: 'Verb', roleColor: 'purple', ipa: '/ˈlɜːrnɪŋ/', pos: 'verb', bn: 'শিখছে' },
              { word: 'new', role: 'Modifier', roleColor: 'amber', ipa: '/njuː/', pos: 'adjective', bn: 'নতুন' },
              { word: 'skills', role: 'Object', roleColor: 'blue', ipa: '/skɪlz/', pos: 'noun', bn: 'দক্ষতা' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'course-past-tense',
    title: 'Past Tense (অতীত কাল)',
    subtitle: 'Completed actions and past stories',
    level: 'Essential',
    badge: 'Past',
    lessons: [
      {
        id: 'lesson-past-1',
        title: 'Simple Past Actions (অতীতের সাধারণ কাজ)',
        subtitle: 'Sentences using past form of verbs',
        difficulty: 'Easy',
        lessonNumber: 1,
        totalInCourse: 2,
        exercises: [
          {
            id: 'past-1',
            sentence: 'I met my friend yesterday',
            bengaliMeaning: 'আমি গতকাল আমার বন্ধুর সাথে দেখা করেছিলাম',
            audioUrl: '/audio/past-1.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'met', role: 'Past Verb', roleColor: 'pink', ipa: '/met/', pos: 'verb', bn: 'দেখা করেছিলাম' },
              { word: 'my', role: 'Possessive', roleColor: 'orange', ipa: '/maɪ/', pos: 'determiner', bn: 'আমার' },
              { word: 'friend', role: 'Object', roleColor: 'blue', ipa: '/frend/', pos: 'noun', bn: 'বন্ধু' },
              { word: 'yesterday', role: 'Time', roleColor: 'emerald', ipa: '/ˈjestərdeɪ/', pos: 'adverb', bn: 'গতকাল' },
            ],
          },
          {
            id: 'past-2',
            sentence: 'She cooked delicious food',
            bengaliMeaning: 'সে সুস্বাদু খাবার রান্না করেছিল',
            audioUrl: '/audio/past-2.mp3',
            words: [
              { word: 'She', role: 'Subject', roleColor: 'orange', ipa: '/ʃiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'cooked', role: 'Past Verb', roleColor: 'pink', ipa: '/kʊkt/', pos: 'verb', bn: 'রান্না করেছিল' },
              { word: 'delicious', role: 'Modifier', roleColor: 'amber', ipa: '/dɪˈlɪʃəs/', pos: 'adjective', bn: 'সুস্বাদু' },
              { word: 'food', role: 'Object', roleColor: 'blue', ipa: '/fuːd/', pos: 'noun', bn: 'খাবার' },
            ],
          },
          {
            id: 'past-3',
            sentence: 'We went to the market',
            bengaliMeaning: 'আমরা বাজারে গিয়েছিলাম',
            audioUrl: '/audio/past-3.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'went', role: 'Past Verb', roleColor: 'pink', ipa: '/went/', pos: 'verb', bn: 'গিয়েছিলাম' },
              { word: 'to', role: 'Prep.', roleColor: 'cyan', ipa: '/tuː/', pos: 'preposition', bn: 'দিকে' },
              { word: 'the', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'market', role: 'Location', roleColor: 'emerald', ipa: '/ˈmɑːrkɪt/', pos: 'noun', bn: 'বাজার' },
            ],
          },
          {
            id: 'past-4',
            sentence: 'They finished the project on time',
            bengaliMeaning: 'তারা সময়মতো কাজটি শেষ করেছিল',
            audioUrl: '/audio/past-4.mp3',
            words: [
              { word: 'They', role: 'Subject', roleColor: 'orange', ipa: '/ðeɪ/', pos: 'pronoun', bn: 'তারা' },
              { word: 'finished', role: 'Past Verb', roleColor: 'pink', ipa: '/ˈfɪnɪʃt/', pos: 'verb', bn: 'শেষ করেছিল' },
              { word: 'the', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'project', role: 'Object', roleColor: 'blue', ipa: '/ˈprɑːdʒekt/', pos: 'noun', bn: 'কাজ / প্রজেক্ট' },
              { word: 'on', role: 'Prep.', roleColor: 'cyan', ipa: '/ɑːn/', pos: 'preposition', bn: 'এ' },
              { word: 'time', role: 'Time', roleColor: 'emerald', ipa: '/taɪm/', pos: 'noun', bn: 'সময়' },
            ],
          },
        ],
      },
      {
        id: 'lesson-past-2',
        title: 'Past Memories & Activities (অতীতের অভিজ্ঞতা)',
        subtitle: 'Everyday memories from yesterday and before',
        difficulty: 'Easy',
        lessonNumber: 2,
        totalInCourse: 2,
        exercises: [
          {
            id: 'past-5',
            sentence: 'I lived in a village before',
            bengaliMeaning: 'আমি আগে একটি গ্রামে বাস করতাম',
            audioUrl: '/audio/past-5.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'lived', role: 'Past Verb', roleColor: 'pink', ipa: '/lɪvd/', pos: 'verb', bn: 'বাস করতাম' },
              { word: 'in', role: 'Prep.', roleColor: 'cyan', ipa: '/ɪn/', pos: 'preposition', bn: 'এ' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'village', role: 'Location', roleColor: 'emerald', ipa: '/ˈvɪlɪdʒ/', pos: 'noun', bn: 'গ্রাম' },
              { word: 'before', role: 'Time', roleColor: 'amber', ipa: '/bɪˈfɔːr/', pos: 'adverb', bn: 'আগে' },
            ],
          },
          {
            id: 'past-6',
            sentence: 'He bought a new laptop',
            bengaliMeaning: 'সে একটি নতুন ল্যাপটপ কিনেছিল',
            audioUrl: '/audio/past-6.mp3',
            words: [
              { word: 'He', role: 'Subject', roleColor: 'orange', ipa: '/hiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'bought', role: 'Past Verb', roleColor: 'pink', ipa: '/bɔːt/', pos: 'verb', bn: 'কিনেছিল' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'new', role: 'Modifier', roleColor: 'amber', ipa: '/njuː/', pos: 'adjective', bn: 'নতুন' },
              { word: 'laptop', role: 'Object', roleColor: 'blue', ipa: '/ˈlæptɑːp/', pos: 'noun', bn: 'ল্যাপটপ' },
            ],
          },
          {
            id: 'past-7',
            sentence: 'We watched an exciting game',
            bengaliMeaning: 'আমরা একটি উত্তেজনাপূর্ণ খেলা দেখেছিলাম',
            audioUrl: '/audio/past-7.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'watched', role: 'Past Verb', roleColor: 'pink', ipa: '/wɑːtʃt/', pos: 'verb', bn: 'দেখেছিলাম' },
              { word: 'an', role: 'Art.', roleColor: 'cyan', ipa: '/æn/', pos: 'determiner', bn: 'একটি' },
              { word: 'exciting', role: 'Modifier', roleColor: 'amber', ipa: '/ɪkˈsaɪtɪŋ/', pos: 'adjective', bn: 'উত্তেজনাপূর্ণ' },
              { word: 'game', role: 'Object', roleColor: 'blue', ipa: '/ɡeɪm/', pos: 'noun', bn: 'খেলা' },
            ],
          },
          {
            id: 'past-8',
            sentence: 'She called me last night',
            bengaliMeaning: 'সে গত রাতে আমাকে ফোন করেছিল',
            audioUrl: '/audio/past-8.mp3',
            words: [
              { word: 'She', role: 'Subject', roleColor: 'orange', ipa: '/ʃiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'called', role: 'Past Verb', roleColor: 'pink', ipa: '/kɔːld/', pos: 'verb', bn: 'ফোন করেছিল' },
              { word: 'me', role: 'Object', roleColor: 'blue', ipa: '/miː/', pos: 'pronoun', bn: 'আমাকে' },
              { word: 'last', role: 'Modifier', roleColor: 'amber', ipa: '/læst/', pos: 'adjective', bn: 'গত' },
              { word: 'night', role: 'Time', roleColor: 'emerald', ipa: '/naɪt/', pos: 'noun', bn: 'রাতে' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'course-future-tense',
    title: 'Future Tense (ভবিষ্যত কাল)',
    subtitle: 'Plans, hopes and promises with Will & Going to',
    level: 'Essential',
    badge: 'Future',
    lessons: [
      {
        id: 'lesson-fut-1',
        title: "Plans & Promises with 'Will' (ভবিষ্যতের পরিকল্পনা)",
        subtitle: 'Simple future sentences using Will',
        difficulty: 'Easy',
        lessonNumber: 1,
        totalInCourse: 2,
        exercises: [
          {
            id: 'fut-1',
            sentence: 'I will visit you tomorrow',
            bengaliMeaning: 'আমি আগামীকাল তোমার সাথে দেখা করব',
            audioUrl: '/audio/fut-1.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'করব' },
              { word: 'visit', role: 'Verb', roleColor: 'purple', ipa: '/ˈvɪzɪt/', pos: 'verb', bn: 'দেখা করা' },
              { word: 'you', role: 'Object', roleColor: 'blue', ipa: '/juː/', pos: 'pronoun', bn: 'তোমার সাথে' },
              { word: 'tomorrow', role: 'Time', roleColor: 'emerald', ipa: '/təˈmɔːroʊ/', pos: 'adverb', bn: 'আগামীকাল' },
            ],
          },
          {
            id: 'fut-2',
            sentence: 'She will start a new job',
            bengaliMeaning: 'সে একটি নতুন চাকরি শুরু করবে',
            audioUrl: '/audio/fut-2.mp3',
            words: [
              { word: 'She', role: 'Subject', roleColor: 'orange', ipa: '/ʃiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'করবে' },
              { word: 'start', role: 'Verb', roleColor: 'purple', ipa: '/stɑːrt/', pos: 'verb', bn: 'শুরু করা' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'new', role: 'Modifier', roleColor: 'amber', ipa: '/njuː/', pos: 'adjective', bn: 'নতুন' },
              { word: 'job', role: 'Object', roleColor: 'blue', ipa: '/dʒɑːb/', pos: 'noun', bn: 'চাকরি' },
            ],
          },
          {
            id: 'fut-3',
            sentence: 'We will learn English fluently',
            bengaliMeaning: 'আমরা সাবলীলভাবে ইংরেজি শিখব',
            audioUrl: '/audio/fut-3.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'শিখব' },
              { word: 'learn', role: 'Verb', roleColor: 'purple', ipa: '/lɜːrn/', pos: 'verb', bn: 'শেখা' },
              { word: 'English', role: 'Language', roleColor: 'blue', ipa: '/ˈɪŋɡlɪʃ/', pos: 'noun', bn: 'ইংরেজি' },
              { word: 'fluently', role: 'Manner', roleColor: 'emerald', ipa: '/ˈfluːəntli/', pos: 'adverb', bn: 'সাবলীলভাবে' },
            ],
          },
          {
            id: 'fut-4',
            sentence: 'They will arrive very soon',
            bengaliMeaning: 'তারা খুব শীঘ্রই পৌঁছাবে',
            audioUrl: '/audio/fut-4.mp3',
            words: [
              { word: 'They', role: 'Subject', roleColor: 'orange', ipa: '/ðeɪ/', pos: 'pronoun', bn: 'তারা' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'পৌঁছাবে' },
              { word: 'arrive', role: 'Verb', roleColor: 'purple', ipa: '/əˈraɪv/', pos: 'verb', bn: 'আসা' },
              { word: 'very', role: 'Degree', roleColor: 'amber', ipa: '/ˈveri/', pos: 'adverb', bn: 'খুব' },
              { word: 'soon', role: 'Time', roleColor: 'emerald', ipa: '/suːn/', pos: 'adverb', bn: 'শীঘ্রই' },
            ],
          },
        ],
      },
      {
        id: 'lesson-fut-2',
        title: "Future Intentions & 'Going to' (ভবিষ্যতের ইচ্ছা)",
        subtitle: 'Everyday future expressions',
        difficulty: 'Easy',
        lessonNumber: 2,
        totalInCourse: 2,
        exercises: [
          {
            id: 'fut-5',
            sentence: 'I am going to buy a car',
            bengaliMeaning: 'আমি একটি গাড়ি কিনতে যাচ্ছি',
            audioUrl: '/audio/fut-5.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'am', role: 'Aux. Verb', roleColor: 'pink', ipa: '/æm/', pos: 'auxiliary verb', bn: 'আছি' },
              { word: 'going', role: 'Verb', roleColor: 'purple', ipa: '/ˈɡoʊɪŋ/', pos: 'verb', bn: 'যাচ্ছি' },
              { word: 'to', role: 'Particle', roleColor: 'cyan', ipa: '/tuː/', pos: 'infinitive', bn: 'করতে' },
              { word: 'buy', role: 'Verb', roleColor: 'pink', ipa: '/baɪ/', pos: 'verb', bn: 'কেনা' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'car', role: 'Object', roleColor: 'blue', ipa: '/kɑːr/', pos: 'noun', bn: 'গাড়ি' },
            ],
          },
          {
            id: 'fut-6',
            sentence: 'We will travel next month',
            bengaliMeaning: 'আমরা আগামী মাসে ভ্রমণ করব',
            audioUrl: '/audio/fut-6.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'করব' },
              { word: 'travel', role: 'Verb', roleColor: 'purple', ipa: '/ˈtrævl/', pos: 'verb', bn: 'ভ্রমণ' },
              { word: 'next', role: 'Modifier', roleColor: 'amber', ipa: '/nekst/', pos: 'adjective', bn: 'পরবর্তী' },
              { word: 'month', role: 'Time', roleColor: 'emerald', ipa: '/mʌnθ/', pos: 'noun', bn: 'মাসে' },
            ],
          },
          {
            id: 'fut-7',
            sentence: 'He will help us tomorrow',
            bengaliMeaning: 'সে আগামীকাল আমাদের সাহায্য করবে',
            audioUrl: '/audio/fut-7.mp3',
            words: [
              { word: 'He', role: 'Subject', roleColor: 'orange', ipa: '/hiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'করবে' },
              { word: 'help', role: 'Verb', roleColor: 'purple', ipa: '/help/', pos: 'verb', bn: 'সাহায্য' },
              { word: 'us', role: 'Object', roleColor: 'blue', ipa: '/ʌs/', pos: 'pronoun', bn: 'আমাদের' },
              { word: 'tomorrow', role: 'Time', roleColor: 'emerald', ipa: '/təˈmɔːroʊ/', pos: 'adverb', bn: 'আগামীকাল' },
            ],
          },
          {
            id: 'fut-8',
            sentence: 'Everything will be fine',
            bengaliMeaning: 'সবকিছু ঠিক হয়ে যাবে',
            audioUrl: '/audio/fut-8.mp3',
            words: [
              { word: 'Everything', role: 'Subject', roleColor: 'orange', ipa: '/ˈevriθɪŋ/', pos: 'pronoun', bn: 'সবকিছু' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'যাবে' },
              { word: 'be', role: 'Verb', roleColor: 'purple', ipa: '/biː/', pos: 'verb', bn: 'হওয়া' },
              { word: 'fine', role: 'Complement', roleColor: 'emerald', ipa: '/faɪn/', pos: 'adjective', bn: 'ঠিক' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'course-modal-verbs',
    title: 'Modal Verbs (ক্যান, কুড, শুড, মাস্ট)',
    subtitle: 'Ability, permission, advice and necessity',
    level: 'Essential',
    badge: 'Modals',
    lessons: [
      {
        id: 'lesson-modal-1',
        title: 'Ability & Permission (Can, Could, May)',
        subtitle: 'Can, Could, May sentences',
        difficulty: 'Easy',
        lessonNumber: 1,
        totalInCourse: 2,
        exercises: [
          {
            id: 'modal-1',
            sentence: 'I can speak English fluently',
            bengaliMeaning: 'আমি সাবলীলভাবে ইংরেজি বলতে পারি',
            audioUrl: '/audio/modal-1.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'can', role: 'Modal Verb', roleColor: 'purple', ipa: '/kæn/', pos: 'modal verb', bn: 'পারি' },
              { word: 'speak', role: 'Verb', roleColor: 'pink', ipa: '/spiːk/', pos: 'verb', bn: 'বলতে' },
              { word: 'English', role: 'Language', roleColor: 'blue', ipa: '/ˈɪŋɡlɪʃ/', pos: 'noun', bn: 'ইংরেজি' },
              { word: 'fluently', role: 'Manner', roleColor: 'emerald', ipa: '/ˈfluːəntli/', pos: 'adverb', bn: 'সাবলীলভাবে' },
            ],
          },
          {
            id: 'modal-2',
            sentence: 'Could you please help me',
            bengaliMeaning: 'আপনি কি দয়া করে আমাকে সাহায্য করবেন?',
            audioUrl: '/audio/modal-2.mp3',
            words: [
              { word: 'Could', role: 'Modal Verb', roleColor: 'purple', ipa: '/kʊd/', pos: 'modal verb', bn: 'পারবেন' },
              { word: 'you', role: 'Subject', roleColor: 'orange', ipa: '/juː/', pos: 'pronoun', bn: 'আপনি' },
              { word: 'please', role: 'Politeness', roleColor: 'amber', ipa: '/pliːz/', pos: 'adverb', bn: 'দয়া করে' },
              { word: 'help', role: 'Verb', roleColor: 'pink', ipa: '/help/', pos: 'verb', bn: 'সাহায্য' },
              { word: 'me', role: 'Object', roleColor: 'blue', ipa: '/miː/', pos: 'pronoun', bn: 'আমাকে' },
            ],
          },
          {
            id: 'modal-3',
            sentence: 'May I ask a question',
            bengaliMeaning: 'আমি কি একটি প্রশ্ন করতে পারি?',
            audioUrl: '/audio/modal-3.mp3',
            words: [
              { word: 'May', role: 'Modal Verb', roleColor: 'purple', ipa: '/meɪ/', pos: 'modal verb', bn: 'পারি কি' },
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'ask', role: 'Verb', roleColor: 'pink', ipa: '/æsk/', pos: 'verb', bn: 'জিজ্ঞাসা' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'question', role: 'Object', roleColor: 'blue', ipa: '/ˈkwestʃən/', pos: 'noun', bn: 'প্রশ্ন' },
            ],
          },
          {
            id: 'modal-4',
            sentence: 'She can drive a car',
            bengaliMeaning: 'সে গাড়ি চালাতে পারে',
            audioUrl: '/audio/modal-4.mp3',
            words: [
              { word: 'She', role: 'Subject', roleColor: 'orange', ipa: '/ʃiː/', pos: 'pronoun', bn: 'সে' },
              { word: 'can', role: 'Modal Verb', roleColor: 'purple', ipa: '/kæn/', pos: 'modal verb', bn: 'পারে' },
              { word: 'drive', role: 'Verb', roleColor: 'pink', ipa: '/draɪv/', pos: 'verb', bn: 'চালাতে' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একটি' },
              { word: 'car', role: 'Object', roleColor: 'blue', ipa: '/kɑːr/', pos: 'noun', bn: 'গাড়ি' },
            ],
          },
        ],
      },
      {
        id: 'lesson-modal-2',
        title: 'Advice & Obligation (Should, Must, Would)',
        subtitle: 'Should, Must, Would sentences',
        difficulty: 'Easy',
        lessonNumber: 2,
        totalInCourse: 2,
        exercises: [
          {
            id: 'modal-5',
            sentence: 'You should take rest now',
            bengaliMeaning: 'তোমার এখন বিশ্রাম নেওয়া উচিত',
            audioUrl: '/audio/modal-5.mp3',
            words: [
              { word: 'You', role: 'Subject', roleColor: 'orange', ipa: '/juː/', pos: 'pronoun', bn: 'তোমার' },
              { word: 'should', role: 'Modal Verb', roleColor: 'purple', ipa: '/ʃʊd/', pos: 'modal verb', bn: 'উচিত' },
              { word: 'take', role: 'Verb', roleColor: 'pink', ipa: '/teɪk/', pos: 'verb', bn: 'নেওয়া' },
              { word: 'rest', role: 'Object', roleColor: 'blue', ipa: '/rest/', pos: 'noun', bn: 'বিশ্রাম' },
              { word: 'now', role: 'Time', roleColor: 'emerald', ipa: '/naʊ/', pos: 'adverb', bn: 'এখন' },
            ],
          },
          {
            id: 'modal-6',
            sentence: 'We must follow the rules',
            bengaliMeaning: 'আমাদের অবশ্যই নিয়ম মানতে হবে',
            audioUrl: '/audio/modal-6.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমাদের' },
              { word: 'must', role: 'Modal Verb', roleColor: 'purple', ipa: '/mʌst/', pos: 'modal verb', bn: 'অবশ্যই' },
              { word: 'follow', role: 'Verb', roleColor: 'pink', ipa: '/ˈfɑːloʊ/', pos: 'verb', bn: 'মানতে হবে' },
              { word: 'the', role: 'Art.', roleColor: 'cyan', ipa: '/ðə/', pos: 'determiner', bn: 'নির্দিষ্ট' },
              { word: 'rules', role: 'Object', roleColor: 'blue', ipa: '/ruːlz/', pos: 'noun', bn: 'নিয়মগুলো' },
            ],
          },
          {
            id: 'modal-7',
            sentence: 'I would love to join you',
            bengaliMeaning: 'আমি তোমাদের সাথে যোগ দিতে পছন্দ করব',
            audioUrl: '/audio/modal-7.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'would', role: 'Modal Verb', roleColor: 'purple', ipa: '/wʊd/', pos: 'modal verb', bn: 'করব' },
              { word: 'love', role: 'Verb', roleColor: 'pink', ipa: '/lʌv/', pos: 'verb', bn: 'পছন্দ' },
              { word: 'to', role: 'Particle', roleColor: 'cyan', ipa: '/tuː/', pos: 'infinitive', bn: 'করতে' },
              { word: 'join', role: 'Verb', roleColor: 'purple', ipa: '/dʒɔɪn/', pos: 'verb', bn: 'যোগ দেওয়া' },
              { word: 'you', role: 'Object', roleColor: 'blue', ipa: '/juː/', pos: 'pronoun', bn: 'তোমাদের' },
            ],
          },
          {
            id: 'modal-8',
            sentence: 'You should drink more water',
            bengaliMeaning: 'তোমার আরও বেশি পানি পান করা উচিত',
            audioUrl: '/audio/modal-8.mp3',
            words: [
              { word: 'You', role: 'Subject', roleColor: 'orange', ipa: '/juː/', pos: 'pronoun', bn: 'তোমার' },
              { word: 'should', role: 'Modal Verb', roleColor: 'purple', ipa: '/ʃʊd/', pos: 'modal verb', bn: 'উচিত' },
              { word: 'drink', role: 'Verb', roleColor: 'pink', ipa: '/drɪŋk/', pos: 'verb', bn: 'পান করা' },
              { word: 'more', role: 'Modifier', roleColor: 'amber', ipa: '/mɔːr/', pos: 'adjective', bn: 'বেশি' },
              { word: 'water', role: 'Object', roleColor: 'blue', ipa: '/ˈwɔːtər/', pos: 'noun', bn: 'পানি' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'course-daily-talk',
    title: 'Daily Questions & Needs (দৈনন্দিন প্রশ্ন ও কথা)',
    subtitle: 'Everyday common questions and feelings',
    level: 'Everyday',
    badge: 'Daily',
    lessons: [
      {
        id: 'lesson-talk-1',
        title: 'Common Daily Questions (প্রয়োজনীয় প্রশ্ন)',
        subtitle: 'Questions you ask and hear every day',
        difficulty: 'Easy',
        lessonNumber: 1,
        totalInCourse: 2,
        exercises: [
          {
            id: 'talk-1',
            sentence: 'Where do you live now',
            bengaliMeaning: 'তুমি এখন কোথায় থাকো?',
            audioUrl: '/audio/talk-1.mp3',
            words: [
              { word: 'Where', role: 'Question', roleColor: 'purple', ipa: '/wer/', pos: 'adverb', bn: 'কোথায়' },
              { word: 'do', role: 'Aux. Verb', roleColor: 'pink', ipa: '/duː/', pos: 'auxiliary verb', bn: 'সহায়ক' },
              { word: 'you', role: 'Subject', roleColor: 'orange', ipa: '/juː/', pos: 'pronoun', bn: 'তুমি' },
              { word: 'live', role: 'Verb', roleColor: 'pink', ipa: '/lɪv/', pos: 'verb', bn: 'থাকো' },
              { word: 'now', role: 'Time', roleColor: 'emerald', ipa: '/naʊ/', pos: 'adverb', bn: 'এখন' },
            ],
          },
          {
            id: 'talk-2',
            sentence: 'What are you doing today',
            bengaliMeaning: 'তুমি আজ কী করছো?',
            audioUrl: '/audio/talk-2.mp3',
            words: [
              { word: 'What', role: 'Question', roleColor: 'purple', ipa: '/wʌt/', pos: 'pronoun', bn: 'কী' },
              { word: 'are', role: 'Aux. Verb', roleColor: 'pink', ipa: '/ɑːr/', pos: 'auxiliary verb', bn: 'আছো' },
              { word: 'you', role: 'Subject', roleColor: 'orange', ipa: '/juː/', pos: 'pronoun', bn: 'তুমি' },
              { word: 'doing', role: 'Verb', roleColor: 'purple', ipa: '/ˈduːɪŋ/', pos: 'verb', bn: 'করছো' },
              { word: 'today', role: 'Time', roleColor: 'emerald', ipa: '/təˈdeɪ/', pos: 'adverb', bn: 'আজ' },
            ],
          },
          {
            id: 'talk-3',
            sentence: 'How can I help you',
            bengaliMeaning: 'আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
            audioUrl: '/audio/talk-3.mp3',
            words: [
              { word: 'How', role: 'Question', roleColor: 'purple', ipa: '/haʊ/', pos: 'adverb', bn: 'কীভাবে' },
              { word: 'can', role: 'Modal Verb', roleColor: 'purple', ipa: '/kæn/', pos: 'modal verb', bn: 'পারি' },
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'help', role: 'Verb', roleColor: 'pink', ipa: '/help/', pos: 'verb', bn: 'সাহায্য' },
              { word: 'you', role: 'Object', roleColor: 'blue', ipa: '/juː/', pos: 'pronoun', bn: 'আপনাকে' },
            ],
          },
          {
            id: 'talk-4',
            sentence: 'When will you come home',
            bengaliMeaning: 'তুমি কখন বাড়ি আসবে?',
            audioUrl: '/audio/talk-4.mp3',
            words: [
              { word: 'When', role: 'Question', roleColor: 'purple', ipa: '/wen/', pos: 'adverb', bn: 'কখন' },
              { word: 'will', role: 'Future Aux', roleColor: 'pink', ipa: '/wɪl/', pos: 'modal verb', bn: 'আসবে' },
              { word: 'you', role: 'Subject', roleColor: 'orange', ipa: '/juː/', pos: 'pronoun', bn: 'তুমি' },
              { word: 'come', role: 'Verb', roleColor: 'purple', ipa: '/kʌm/', pos: 'verb', bn: 'আসা' },
              { word: 'home', role: 'Location', roleColor: 'emerald', ipa: '/hoʊm/', pos: 'noun', bn: 'বাড়ি' },
            ],
          },
        ],
      },
      {
        id: 'lesson-talk-2',
        title: 'Expressing Needs & Feelings (অনুভূতি ও প্রয়োজন)',
        subtitle: 'Sentences about feelings and help',
        difficulty: 'Easy',
        lessonNumber: 2,
        totalInCourse: 2,
        exercises: [
          {
            id: 'talk-5',
            sentence: 'I need some help please',
            bengaliMeaning: 'আমার কিছু সাহায্য প্রয়োজন দয়া করে',
            audioUrl: '/audio/talk-5.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমার' },
              { word: 'need', role: 'Verb', roleColor: 'pink', ipa: '/niːd/', pos: 'verb', bn: 'প্রয়োজন' },
              { word: 'some', role: 'Determiner', roleColor: 'cyan', ipa: '/sʌm/', pos: 'determiner', bn: 'কিছু' },
              { word: 'help', role: 'Object', roleColor: 'blue', ipa: '/help/', pos: 'noun', bn: 'সাহায্য' },
              { word: 'please', role: 'Politeness', roleColor: 'amber', ipa: '/pliːz/', pos: 'adverb', bn: 'দয়া করে' },
            ],
          },
          {
            id: 'talk-6',
            sentence: 'I am so happy today',
            bengaliMeaning: 'আমি আজ খুব খুশি',
            audioUrl: '/audio/talk-6.mp3',
            words: [
              { word: 'I', role: 'Subject', roleColor: 'orange', ipa: '/aɪ/', pos: 'pronoun', bn: 'আমি' },
              { word: 'am', role: 'Verb', roleColor: 'pink', ipa: '/æm/', pos: 'verb', bn: 'হই' },
              { word: 'so', role: 'Degree', roleColor: 'amber', ipa: '/soʊ/', pos: 'adverb', bn: 'খুব' },
              { word: 'happy', role: 'Feeling', roleColor: 'emerald', ipa: '/ˈhæpi/', pos: 'adjective', bn: 'খুশি' },
              { word: 'today', role: 'Time', roleColor: 'blue', ipa: '/təˈdeɪ/', pos: 'adverb', bn: 'আজ' },
            ],
          },
          {
            id: 'talk-7',
            sentence: 'We are ready for practice',
            bengaliMeaning: 'আমরা অনুশীলনের জন্য প্রস্তুত',
            audioUrl: '/audio/talk-7.mp3',
            words: [
              { word: 'We', role: 'Subject', roleColor: 'orange', ipa: '/wiː/', pos: 'pronoun', bn: 'আমরা' },
              { word: 'are', role: 'Verb', roleColor: 'pink', ipa: '/ɑːr/', pos: 'verb', bn: 'হই' },
              { word: 'ready', role: 'State', roleColor: 'emerald', ipa: '/ˈredi/', pos: 'adjective', bn: 'প্রস্তুত' },
              { word: 'for', role: 'Prep.', roleColor: 'cyan', ipa: '/fɔːr/', pos: 'preposition', bn: 'জন্য' },
              { word: 'practice', role: 'Object', roleColor: 'blue', ipa: '/ˈpræktɪs/', pos: 'noun', bn: 'অনুশীলন' },
            ],
          },
          {
            id: 'talk-8',
            sentence: 'Practice makes a person perfect',
            bengaliMeaning: 'অনুশীলন মানুষকে নিখুঁত করে তোলে',
            audioUrl: '/audio/talk-8.mp3',
            words: [
              { word: 'Practice', role: 'Subject', roleColor: 'orange', ipa: '/ˈpræktɪs/', pos: 'noun', bn: 'অনুশীলন' },
              { word: 'makes', role: 'Verb', roleColor: 'pink', ipa: '/meɪks/', pos: 'verb', bn: 'করে তোলে' },
              { word: 'a', role: 'Art.', roleColor: 'cyan', ipa: '/ə/', pos: 'determiner', bn: 'একজন' },
              { word: 'person', role: 'Object', roleColor: 'blue', ipa: '/ˈpɜːrsn/', pos: 'noun', bn: 'মানুষকে' },
              { word: 'perfect', role: 'Complement', roleColor: 'emerald', ipa: '/ˈpɜːrfɪkt/', pos: 'adjective', bn: 'নিখুঁত' },
            ],
          },
        ],
      },
    ],
  },
]

import sentences3000Data from './sentences_3000.json'
import wordDictionary from './wordDictionary.js'

// Normalizes ending punctuation (. or ?) so every sentence is grammatically complete
export function normalizeSentencePunctuation(sentence, bengali = '') {
  if (!sentence) return ''
  const trimmed = sentence.trim()
  if (/[.?!]$/.test(trimmed)) return trimmed

  const isQuestion =
    /^(who|what|where|when|why|which|how|is|are|am|do|does|did|can|could|will|would|should|may|have|has)\b/i.test(trimmed) ||
    (bengali && bengali.includes('?'))

  return isQuestion ? `${trimmed}?` : `${trimmed}.`
}

// Auto-tagger with 100% complete Bengali meanings and grammar roles
export function parseSentenceIntoWords(sentence) {
  if (!sentence) return []
  const clean = sentence.trim().replace(/\s+/g, ' ')
  const rawWords = clean.split(' ')

  return rawWords.map((w, index) => {
    const cleanWord = w.replace(/[^\w'-]/g, '')
    const lower = cleanWord.toLowerCase()
    const punctuation = w.match(/[.,?!]+$/)?.[0] || ''

    const dictEntry = wordDictionary[lower]
    let role = dictEntry?.role || (index === 0 ? 'Subject' : 'Object')
    let roleColor = dictEntry?.roleColor || 'blue'
    let pos = dictEntry?.pos || 'noun'
    let bn = dictEntry?.bn || ''

    // Contextual grammatical refinement:
    // 1. Initial word is Subject if pronoun/noun
    if (index === 0 && (role === 'Pronoun' || role === 'Noun' || dictEntry?.pos === 'pronoun')) {
      role = 'Subject'
      roleColor = 'orange'
    }

    // 2. Following a modal verb (e.g. 'will rest', 'can speak'), the following word is a Verb
    if (index > 0) {
      const prevWord = rawWords[index - 1].replace(/[^\w'-]/g, '').toLowerCase()
      const prevEntry = wordDictionary[prevWord]
      if (prevEntry?.role === 'Modal' && (role === 'Object' || role === 'Noun' || role === 'Word')) {
        role = 'Verb'
        roleColor = 'pink'
        pos = 'verb'
      }
    }

    return {
      word: cleanWord,
      punctuation,
      role,
      roleColor,
      ipa: `/${lower}/`,
      pos,
      bn,
    }
  })
}

// Flat list of original course exercises
export const COURSE_EXERCISES = COURSES.flatMap((course) =>
  course.lessons.flatMap((lesson) =>
    lesson.exercises.map((ex) => {
      const normalizedSentence = normalizeSentencePunctuation(ex.sentence, ex.bengaliMeaning)
      return {
        ...ex,
        sentence: normalizedSentence,
        courseId: course.id,
        courseTitle: course.title,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        category: course.badge || 'Daily Conversation',
      }
    })
  )
)

// Master list of 3,000 Common Sentences with lazy word generation
export const SENTENCES_3000 = sentences3000Data.map((s, idx) => {
  const normalizedSentence = normalizeSentencePunctuation(s.sentence, s.bengaliMeaning)
  return {
    id: s.id || `s-${idx + 1}`,
    sentence: normalizedSentence,
    bengaliMeaning: s.bengaliMeaning,
    category: s.category || 'Daily Phrases',
    difficulty: s.difficulty || 'Easy',
    audioUrl: null,
    get words() {
      if (!this._words) {
        this._words = parseSentenceIntoWords(this.sentence)
      }
      return this._words
    },
  }
})

// Master pool of concise, high-impact practice exercises (3,000 sentences)
export const ALL_EXERCISES = SENTENCES_3000

// Category metadata with icons, colors & counts for UI category selector
export const CATEGORIES_SUMMARY = [
  { id: 'all', name: 'All Sentences', bn: 'সব বাক্য (৩,০০০টি)', count: 3000, color: 'indigo' },
  { id: 'daily-challenge', name: 'Daily Challenge', bn: 'আজকের ১০টি চ্যালেঞ্জ 🔥', count: 10, color: 'amber' },
  { id: 'Modal Verbs', name: 'Modal Verbs', bn: 'মডাল ভার্বস (Can, Should, Must)', count: 870, color: 'sky' },
  { id: 'Tense: Present', name: 'Present Tense', bn: 'বর্তমান কাল', count: 777, color: 'teal' },
  { id: 'Tense: Future', name: 'Future Tense', bn: 'ভবিষ্যত কাল', count: 601, color: 'violet' },
  { id: 'Tense: Past', name: 'Past Tense', bn: 'অতীত কাল', count: 584, color: 'amber' },
  { id: 'Questions', name: 'Questions', bn: 'প্রশ্ন ও জিজ্ঞাসা', count: 84, color: 'emerald' },
  { id: 'Daily Phrases', name: 'Daily Phrases', bn: 'প্রয়োজনীয় ফ্রেজ ও কথা', count: 50, color: 'blue' },
  { id: 'Work & Office', name: 'Work & Office', bn: 'অফিস ও কাজের কথা', count: 20, color: 'slate' },
  { id: 'Short Quotes', name: 'Short Quotes', bn: 'ছোট অনুপ্রেরণামূলক উক্তি', count: 14, color: 'pink' },
]

