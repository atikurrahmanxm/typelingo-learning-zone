import json
import os

seen = set()
all_sentences = []

def add(sentence, bengali, category):
    s = sentence.strip()
    words = s.split()
    # STRICT CONSTRAINT: 3 to 6 words only!
    if len(words) < 3 or len(words) > 6:
        return
    key = s.lower().replace('.', '').replace('?', '').replace('!', '')
    if key in seen:
        return
    seen.add(key)
    all_sentences.append({
        "id": f"s-{len(all_sentences) + 1}",
        "sentence": s,
        "bengaliMeaning": bengali.strip(),
        "category": category,
        "difficulty": "Easy" if len(words) <= 4 else "Medium"
    })

print("Generating concise, high-frequency, natural sentences (3-5 words)...")

# ==========================================
# 1. COMMON DAILY PHRASES & IDIOMS (3-5 words)
# ==========================================
daily_phrases = [
    ("How are you today?", "আজ আপনি কেমন আছেন?", "Daily Phrases"),
    ("Nice to meet you.", "দেখা হয়ে ভালো লাগল।", "Daily Phrases"),
    ("Have a nice day.", "দিনটি শুভ হোক।", "Daily Phrases"),
    ("Have a great day.", "দিনটি দারুণ কাটুক।", "Daily Phrases"),
    ("See you again soon.", "শীঘ্রই আবার দেখা হবে।", "Daily Phrases"),
    ("See you later today.", "আজ পরে দেখা হবে।", "Daily Phrases"),
    ("Thank you very much.", "আপনাকে অনেক ধন্যবাদ।", "Daily Phrases"),
    ("Thanks for your help.", "সাহায্যের জন্য ধন্যবাদ।", "Daily Phrases"),
    ("You are welcome here.", "আপনাকে এখানে স্বাগতম।", "Daily Phrases"),
    ("Take care of yourself.", "নিজের যত্ন নিও।", "Daily Phrases"),
    ("Take good care today.", "ভালো যত্ন নিও।", "Daily Phrases"),
    ("Don't worry about it.", "চিন্তা করো না।", "Daily Phrases"),
    ("It is my pleasure.", "এটা আমার আনন্দ।", "Daily Phrases"),
    ("Please forgive me now.", "আমাকে এখন ক্ষমা করুন।", "Daily Phrases"),
    ("Excuse me for this.", "আমাকে মাফ করবেন।", "Daily Phrases"),
    ("Let me know soon.", "আমাকে শীঘ্রই জানিও।", "Daily Phrases"),
    ("I am very glad.", "আমি খুব আনন্দিত।", "Daily Phrases"),
    ("I am so happy.", "আমি খুব খুশি।", "Daily Phrases"),
    ("What do you mean?", "তুমি কী বোঝাচ্ছ?", "Daily Phrases"),
    ("Never give up hope.", "কখনও আশা ছেড়ো না।", "Daily Phrases"),
    ("Time is very precious.", "সময় খুবই মূল্যবান।", "Daily Phrases"),
    ("Keep up good work.", "ভালো কাজ চালিয়ে যাও।", "Daily Phrases"),
    ("Believe in your dreams.", "নিজের স্বপ্নে বিশ্বাস রাখো।", "Daily Phrases"),
    ("Make yourself at home.", "নিজের বাড়ি মনে করো।", "Daily Phrases"),
    ("Good luck to you.", "তোমার জন্য শুভকামনা।", "Daily Phrases"),
    ("I agree with you.", "আমি তোমার সাথে একমত।", "Daily Phrases"),
    ("That sounds very good.", "এটা খুব ভালো লাগছে।", "Daily Phrases"),
    ("That sounds great today.", "আজ দারুণ লাগছে।", "Daily Phrases"),
    ("No problem at all.", "কোনো সমস্যাই নেই।", "Daily Phrases"),
    ("Hold on a second.", "এক সেকেন্ড অপেক্ষা করো।", "Daily Phrases"),
    ("Keep in touch always.", "যোগাযোগ রেখো সর্বদা।", "Daily Phrases"),
    ("Call me later today.", "আজ পরে ফোন দিও।", "Daily Phrases"),
    ("I miss you deeply.", "তোমাকে খুব মনে পড়ছে।", "Daily Phrases"),
    ("Have a safe journey.", "যাত্রা শুভ ও নিরাপদ হোক।", "Daily Phrases"),
    ("Happy birthday to you.", "তোমাকে জন্মদিনের শুভেচ্ছা।", "Daily Phrases"),
    ("Congratulations on your success.", "সাফল্যের জন্য অভিনন্দন।", "Daily Phrases"),
    ("All the best today.", "আজকের জন্য শুভকামনা।", "Daily Phrases"),
    ("Enjoy your free time.", "অবসর সময় উপভোগ করো।", "Daily Phrases"),
    ("Welcome to our home.", "আমাদের বাড়িতে স্বাগতম।", "Daily Phrases"),
    ("Long time no see.", "অনেক দিন দেখা নেই।", "Daily Phrases"),
    ("Glad to see you.", "তোমাকে দেখে ভালো লাগল।", "Daily Phrases"),
    ("It looks very nice.", "এটি দেখতে খুব সুন্দর।", "Daily Phrases"),
    ("I feel much better.", "আমার অনেক ভালো লাগছে।", "Daily Phrases"),
    ("Please come inside now.", "দয়া করে ভেতরে আসুন।", "Daily Phrases"),
    ("Have a seat here.", "এখানে একটু বসুন।", "Daily Phrases"),
    ("Wait for me please.", "দয়া করে অপেক্ষা করুন।", "Daily Phrases"),
    ("Listen to me carefully.", "মনোযোগ দিয়ে আমার কথা শোনো।", "Daily Phrases"),
    ("Tell me the truth.", "আমাকে সত্যিটা বলো।", "Daily Phrases"),
    ("Trust in your ability.", "নিজের যোগ্যতায় বিশ্বাস রাখো।", "Daily Phrases"),
    ("Stay safe and healthy.", "নিরাপদে ও সুস্থ থাকুন।", "Daily Phrases"),
]

for s, b, c in daily_phrases:
    add(s, b, c)

# ==========================================
# 2. MODAL VERBS (Can, Could, Should, Would, Must, May)
# ==========================================
modal_verbs_data = [
    # (English action, Bangla action)
    ("speak English well", "ভালো ইংরেজি বলতে"),
    ("help you today", "তোমাকে আজ সাহায্য করতে"),
    ("solve this problem", "এই সমস্যা সমাধান করতে"),
    ("learn very fast", "খুব দ্রুত শিখতে"),
    ("arrive on time", "সময়মতো পৌঁছাতে"),
    ("come with us", "আমাদের সাথে আসতে"),
    ("drive a car", "গাড়ি চালাতে"),
    ("cook good food", "ভালো রান্না করতে"),
    ("read this book", "এই বইটি পড়তে"),
    ("wait a moment", "একটু অপেক্ষা করতে"),
    ("sleep early tonight", "আজ রাতে তাড়াতাড়ি ঘুমাতে"),
    ("drink warm water", "হালকা গরম পানি খেতে"),
    ("exercise every day", "প্রতিদিন ব্যায়াম করতে"),
    ("study very hard", "খুব মন দিয়ে পড়তে"),
    ("stay calm always", "সর্বদা শান্ত থাকতে"),
    ("be very careful", "খুব সতর্ক হতে"),
    ("save your money", "টাকা সঞ্চয় করতে"),
    ("focus on goals", "লক্ষ্যে মনোযোগ দিতে"),
    ("respect your elders", "বড়দের সম্মান করতে"),
    ("tell the truth", "সত্য কথা বলতে"),
    ("join the meeting", "মিটিংয়ে যোগ দিতে"),
    ("finish the work", "কাজটি শেষ করতে"),
    ("clean your room", "ঘর পরিষ্কার করতে"),
    ("listen very carefully", "খুব মনোযোগ দিয়ে শুনতে"),
    ("trust your friend", "বন্ধুকে বিশ্বাস করতে"),
    ("wake up early", "ভোরে ঘুম থেকে উঠতে"),
    ("write clean code", "পরিষ্কার কোড লিখতে"),
    ("walk every morning", "প্রতিদিন সকালে হাঁটতে"),
    ("call me later", "পরে আমাকে ফোন করতে"),
    ("visit our village", "আমাদের গ্রামে ঘুরতে"),
    ("buy fresh fruits", "তাজা ফল কিনতে"),
    ("start the project", "প্রকল্পটি শুরু করতে"),
    ("play football well", "ভালো ফুটবল খেলতে"),
    ("swim in water", "পানিতে সাঁতার কাটতে"),
    ("stay with us", "আমাদের সাথে থাকতে"),
]

# Can / Could / Should / Must / May across subjects
sub_modal_rules = [
    ("I can", "আমি", "পারি"),
    ("We can", "আমরা", "পারি"),
    ("You can", "তুমি", "পারো"),
    ("He can", "সে", "পারে"),
    ("She can", "সে", "পারে"),
    ("They can", "তারা", "পারে"),
    ("I could", "আমি", "পারতাম"),
    ("We could", "আমরা", "পারতাম"),
    ("You could", "তুমি", "পারতে"),
    ("He could", "সে", "পারত"),
    ("She could", "সে", "পারত"),
    ("They could", "তারা", "পারত"),
    ("You should", "তোমার", "উচিত"),
    ("We should", "আমাদের", "উচিত"),
    ("I should", "আমার", "উচিত"),
    ("He should", "তার", "উচিত"),
    ("She should", "তার", "উচিত"),
    ("They should", "তাদের", "উচিত"),
    ("We must", "আমাদের অবশ্যই", "হবে"),
    ("You must", "তোমাকে অবশ্যই", "হবে"),
    ("I must", "আমাকে অবশ্যই", "হবে"),
    ("He must", "তাকে অবশ্যই", "হবে"),
    ("She must", "তাকে অবশ্যই", "হবে"),
    ("They must", "তাদের অবশ্যই", "হবে"),
]

for sub_e, sub_b, modal_suffix in sub_modal_rules:
    for act_e, act_b in modal_verbs_data:
        add(f"{sub_e} {act_e}.", f"{sub_b} {act_b} {modal_suffix}।", "Modal Verbs")

# Modal Questions (3-5 words)
modal_questions = [
    ("Can you help me?", "তুমি কি সাহায্য করবে?", "Modal Verbs"),
    ("Can I come in?", "আমি কি আসতে পারি?", "Modal Verbs"),
    ("Can we start now?", "আমরা কি শুরু করব?", "Modal Verbs"),
    ("Can you hear me?", "তুমি কি শুনতে পাচ্ছ?", "Modal Verbs"),
    ("Can you speak English?", "তুমি কি ইংরেজি বলো?", "Modal Verbs"),
    ("Can you do this?", "তুমি কি পারবে?", "Modal Verbs"),
    ("Can I sit here?", "আমি কি বসতে পারি?", "Modal Verbs"),
    ("Can you see that?", "তুমি কি দেখতে পাচ্ছ?", "Modal Verbs"),
    ("Can we go home?", "আমরা কি বাড়ি যাব?", "Modal Verbs"),
    ("Can you call me?", "আমাকে ফোন দেবে?", "Modal Verbs"),
    ("Could you help me?", "আমাকে সাহায্য করবেন?", "Modal Verbs"),
    ("Could you repeat that?", "আবার একটু বলবেন?", "Modal Verbs"),
    ("Could you wait here?", "এখানে অপেক্ষা করবেন?", "Modal Verbs"),
    ("Could we start now?", "আমরা কি শুরু করব?", "Modal Verbs"),
    ("Could you call later?", "পরে ফোন করবেন?", "Modal Verbs"),
    ("Could you come here?", "এখানে একটু আসবেন?", "Modal Verbs"),
    ("Should I call him?", "আমার কি ডাকা উচিত?", "Modal Verbs"),
    ("Should we go now?", "আমাদের কি যাওয়া উচিত?", "Modal Verbs"),
    ("Should I wait here?", "আমার কি অপেক্ষা উচিত?", "Modal Verbs"),
    ("Should we start today?", "আমাদের কি শুরু উচিত?", "Modal Verbs"),
    ("May I come in?", "আমি কি আসতে পারি?", "Modal Verbs"),
    ("May I help you?", "আমি কি সাহায্য করব?", "Modal Verbs"),
    ("May I ask questions?", "আমি কি জিজ্ঞেস করব?", "Modal Verbs"),
    ("May I sit here?", "আমি কি বসতে পারি?", "Modal Verbs"),
    ("May I leave now?", "আমি কি যেতে পারি?", "Modal Verbs"),
    ("Would you like tea?", "আপনি কি চা নেবেন?", "Modal Verbs"),
    ("Would you like coffee?", "আপনি কি কফি নেবেন?", "Modal Verbs"),
    ("Would you join us?", "আপনি কি যোগ দেবেন?", "Modal Verbs"),
    ("Would you come along?", "আপনি কি সাথে আসবেন?", "Modal Verbs"),
    ("Must we go now?", "আমাদের কি যেতে হবে?", "Modal Verbs"),
]

for s, b, c in modal_questions:
    add(s, b, c)

# ==========================================
# 3. PRESENT TENSE (Simple, Continuous, Perfect) (3-5 words)
# ==========================================
simple_present_actions = [
    # (1st person action, 3rd person action, bangla 1st, bangla 3rd)
    ("live in Dhaka", "lives in Dhaka", "ঢাকায় বাস করি", "ঢাকায় বাস করে"),
    ("work from home", "works from home", "বাসা থেকে কাজ করি", "বাসা থেকে কাজ করে"),
    ("drink hot coffee", "drinks hot coffee", "গরম কফি খাই", "গরম কফি খায়"),
    ("drink green tea", "drinks green tea", "গ্রিন টি খাই", "গ্রিন টি খায়"),
    ("read books daily", "reads books daily", "প্রতিদিন বই পড়ি", "প্রতিদিন বই পড়ে"),
    ("wake up early", "wakes up early", "ভোরে ঘুম থেকে উঠি", "ভোরে ঘুম থেকে ওঠে"),
    ("love this place", "loves this place", "এই জায়গা ভালোবাসি", "এই জায়গা ভালোবাসে"),
    ("know the answer", "knows the answer", "উত্তরটি জানি", "উত্তরটি জানে"),
    ("learn English daily", "learns English daily", "প্রতিদিন ইংরেজি শিখি", "প্রতিদিন ইংরেজি শেখে"),
    ("walk every morning", "walks every morning", "প্রতিদিন সকালে হাঁটি", "প্রতিদিন সকালে হাঁটে"),
    ("listen to music", "listens to music", "গান শুনি", "গান শোনে"),
    ("exercise every day", "exercises every day", "প্রতিদিন ব্যায়াম করি", "প্রতিদিন ব্যায়াম করে"),
    ("cook delicious food", "cooks delicious food", "সুস্বাদু খাবার রাঁধি", "সুস্বাদু খাবার রাঁধে"),
    ("drive a car", "drives a car", "গাড়ি চালাই", "গাড়ি চালায়"),
    ("speak the truth", "speaks the truth", "সত্য কথা বলি", "সত্য কথা বলে"),
    ("help my parents", "helps his parents", "বাবা-মাকে সাহায্য করি", "বাবা-মাকে সাহায্য করে"),
    ("clean my room", "cleans her room", "ঘর পরিষ্কার করি", "ঘর পরিষ্কার করে"),
    ("save money monthly", "saves money monthly", "প্রতি মাসে টাকা জমাই", "প্রতি মাসে টাকা জমায়"),
    ("start work early", "starts work early", "তাড়াতাড়ি কাজ শুরু করি", "তাড়াতাড়ি কাজ শুরু করে"),
    ("eat fresh fruits", "eats fresh fruits", "তাজা ফল খাই", "তাজা ফল খায়"),
    ("play football well", "plays football well", "ভালো ফুটবল খেলি", "ভালো ফুটবল খেলে"),
    ("sleep eight hours", "sleeps eight hours", "আট ঘণ্টা ঘুমাই", "আট ঘণ্টা ঘুমায়"),
    ("enjoy good music", "enjoys good music", "ভালো গান উপভোগ করি", "ভালো গান উপভোগ করে"),
    ("trust my friends", "trusts her friends", "বন্ধুদের বিশ্বাস করি", "বন্ধুদের বিশ্বাস করে"),
    ("write clean code", "writes clean code", "পরিষ্কার কোড লিখি", "পরিষ্কার কোড লেখে"),
    ("teach young students", "teaches young students", "ছোটদের পড়াই", "ছোটদের পড়ায়"),
    ("visit old friends", "visits old friends", "পুরনো বন্ধুদের সাথে দেখা করি", "পুরনো বন্ধুদের সাথে দেখা করে"),
    ("study very hard", "studies very hard", "খুব মন দিয়ে পড়ি", "খুব মন দিয়ে পড়ে"),
    ("respect all teachers", "respects all teachers", "সব শিক্ষককে সম্মান করি", "সব শিক্ষককে সম্মান করে"),
    ("smile every day", "smiles every day", "প্রতিদিন হাসি", "প্রতিদিন হাসে"),
]

for a1_e, a3_e, b1, b3 in simple_present_actions:
    add(f"I {a1_e}.", f"আমি {b1}।", "Tense: Present")
    add(f"We {a1_e}.", f"আমরা {b1}।", "Tense: Present")
    add(f"You {a1_e}.", f"তুমি {b1.replace('করি', 'করো').replace('পড়ি', 'পড়ো').replace('খাই', 'খাও').replace('উঠি', 'উঠো')}।", "Tense: Present")
    add(f"He {a3_e}.", f"সে {b3}।", "Tense: Present")
    add(f"She {a3_e}.", f"সে {b3}।", "Tense: Present")
    add(f"They {a1_e}.", f"তারা {b3}।", "Tense: Present")

# Present Continuous (3-4 words)
cont_actions = [
    ("working now", "কাজ করছি", "কাজ করছে"),
    ("reading now", "পড়ছি", "পড়ছে"),
    ("coming soon", "শীঘ্রই আসছি", "শীঘ্রই আসছে"),
    ("learning English", "ইংরেজি শিখছি", "ইংরেজি শিখছে"),
    ("waiting here", "অপেক্ষা করছি", "অপেক্ষা করছে"),
    ("eating lunch", "দুপুরের খাবার খাচ্ছি", "দুপুরের খাবার খাচ্ছে"),
    ("drinking tea", "চা খাচ্ছি", "চা খাচ্ছে"),
    ("going home", "বাড়ি যাচ্ছি", "বাড়ি যাচ্ছে"),
    ("cooking dinner", "রাতের খাবার রাঁধছি", "রাতের খাবার রাঁধছে"),
    ("playing now", "খেলছি", "খেলছে"),
    ("sleeping now", "ঘুমাচ্ছি", "ঘুমাচ্ছে"),
    ("running fast", "দ্রুত দৌড়াচ্ছি", "দ্রুত দৌড়াচ্ছে"),
    ("walking outside", "বাইরে হাঁটছি", "বাইরে হাঁটছে"),
    ("studying today", "আজ পড়ছি", "আজ পড়ছে"),
    ("calling you", "তোমাকে ডাকছি", "তোমাকে ডাকছে"),
    ("watching TV", "টিভি দেখছি", "টিভি দেখছে"),
    ("writing code", "কোড লিখছি", "কোড লিখছে"),
    ("listening music", "গান শুনছি", "গান শুনছে"),
    ("cleaning house", "ঘর মুছছি", "ঘর মুছছে"),
    ("resting now", "বিশ্রাম নিচ্ছি", "বিশ্রাম নিচ্ছে"),
]

for act_e, b_1st, b_3rd in cont_actions:
    add(f"I am {act_e}.", f"আমি এখন {b_1st}।", "Tense: Present")
    add(f"We are {act_e}.", f"আমরা এখন {b_1st}।", "Tense: Present")
    add(f"He is {act_e}.", f"সে {b_3rd}।", "Tense: Present")
    add(f"She is {act_e}.", f"সে {b_3rd}।", "Tense: Present")
    add(f"They are {act_e}.", f"তারা {b_3rd}।", "Tense: Present")

# Present Perfect (3-4 words)
perf_actions = [
    ("done it", "করেছি", "করেছে"),
    ("seen him", "দেখেছি", "দেখেছে"),
    ("finished work", "কাজ শেষ করেছি", "কাজ শেষ করেছে"),
    ("arrived now", "পৌঁছেছি", "পৌঁছেছে"),
    ("called you", "তোমাকে ডেকেছি", "তোমাকে ডেকেছে"),
    ("eaten lunch", "দুপুরের খাবার খেয়েছি", "দুপুরের খাবার খেয়েছে"),
    ("won today", "আজ জিতেছি", "আজ জিতেছে"),
    ("left already", "চলে গেছি", "চলে গেছে"),
    ("read this", "এটি পড়েছি", "এটি পড়েছে"),
    ("cleaned it", "পরিষ্কার করেছি", "পরিষ্কার করেছে"),
    ("paid bills", "বিল পরিশোধ করেছি", "বিল পরিশোধ করেছে"),
    ("sent email", "ইমেইল পাঠিয়েছি", "ইমেইল পাঠিয়েছে"),
    ("woken up", "ঘুম থেকে উঠেছি", "ঘুম থেকে উঠেছে"),
    ("learned this", "এটি শিখেছি", "এটি শিখেছে"),
    ("helped him", "তাকে সাহায্য করেছি", "তাকে সাহায্য করেছে"),
]

for act_e, b_1st, b_3rd in perf_actions:
    add(f"I have {act_e}.", f"আমি {b_1st}।", "Tense: Present")
    add(f"We have {act_e}.", f"আমরা {b_1st}।", "Tense: Present")
    add(f"He has {act_e}.", f"সে {b_3rd}।", "Tense: Present")
    add(f"She has {act_e}.", f"সে {b_3rd}।", "Tense: Present")
    add(f"They have {act_e}.", f"তারা {b_3rd}।", "Tense: Present")

# ==========================================
# 4. PAST TENSE (Simple & Continuous) (3-5 words)
# ==========================================
past_actions_data = [
    ("woke up early", "ভোরে ঘুম থেকে উঠেছিলাম", "ভোরে ঘুম থেকে উঠেছিল"),
    ("drank hot coffee", "গরম কফি খেয়েছিলাম", "গরম কফি খেয়েছিল"),
    ("read the news", "সংবাদ পড়েছিলাম", "সংবাদ পড়েছিল"),
    ("met my friend", "বন্ধুর সাথে দেখা করেছিলাম", "বন্ধুর সাথে দেখা করেছিল"),
    ("called you yesterday", "গতকাল ফোন করেছিলাম", "গতকাল ফোন করেছিল"),
    ("bought a phone", "ফোন কিনেছিলাম", "ফোন কিনেছিল"),
    ("finished the task", "কাজটি শেষ করেছিলাম", "কাজটি শেষ করেছিল"),
    ("slept very well", "ভালো ঘুমিয়েছিলাম", "ভালো ঘুমিয়েছিল"),
    ("walked five miles", "পাঁচ মাইল হেঁটেছিলাম", "পাঁচ মাইল হেঁটেছিল"),
    ("cooked good food", "ভালো রান্না করেছিলাম", "ভালো রান্না করেছিল"),
    ("went to school", "স্কুলে গিয়েছিলাম", "স্কুলে গিয়েছিল"),
    ("saw that movie", "সিনেমাটি দেখেছিলাম", "সিনেমাটি দেখেছিল"),
    ("heard the sound", "শব্দটি শুনেছিলাম", "শব্দটি শুনেছিল"),
    ("felt very tired", "ক্লান্ত বোধ করেছিলাম", "ক্লান্ত বোধ করেছিল"),
    ("cleaned the house", "ঘর পরিষ্কার করেছিলাম", "ঘর পরিষ্কার করেছিল"),
    ("waited an hour", "এক ঘণ্টা অপেক্ষা করেছিলাম", "এক ঘণ্টা অপেক্ষা করেছিল"),
    ("sent the letter", "চিঠি পাঠিয়েছিলাম", "চিঠি পাঠিয়েছিল"),
    ("helped the boy", "ছেলেটিকে সাহায্য করেছিলাম", "ছেলেটিকে সাহায্য করেছিল"),
    ("told the truth", "সত্য বলেছিলাম", "সত্য বলেছিল"),
    ("arrived on time", "সময়মতো পৌঁছেছিলাম", "সময়মতো পৌঁছেছিল"),
    ("worked hard yesterday", "গতকাল কঠোর কাজ করেছিলাম", "গতকাল কঠোর কাজ করেছিল"),
    ("learned new words", "নতুন শব্দ শিখেছিলাম", "নতুন শব্দ শিখেছিল"),
    ("passed the exam", "পরীক্ষায় উত্তীর্ণ হয়েছিলাম", "পরীক্ষায় উত্তীর্ণ হয়েছিল"),
    ("won the game", "খেলায় জিতেছিলাম", "খেলায় জিতেছিল"),
    ("drove very fast", "খুব দ্রুত গাড়ি চালিয়েছিলাম", "খুব দ্রুত গাড়ি চালিয়েছিল"),
    ("ate fresh food", "তাজা খাবার খেয়েছিলাম", "তাজা খাবার খেয়েছিল"),
    ("visited the doctor", "ডাক্তার দেখিয়েছিলাম", "ডাক্তার দেখিয়েছিল"),
    ("lost my keys", "চাবি হারিয়ে ফেলেছিলাম", "চাবি হারিয়ে ফেলেছিল"),
    ("found my bag", "ব্যাগটি খুঁজে পেয়েছিলাম", "ব্যাগটি খুঁজে পেয়েছিল"),
    ("started the engine", "ইঞ্জিন চালু করেছিলাম", "ইঞ্জিন চালু করেছিল"),
]

for act_e, b_1st, b_3rd in past_actions_data:
    add(f"I {act_e}.", f"আমি {b_1st}।", "Tense: Past")
    add(f"We {act_e}.", f"আমরা {b_1st}।", "Tense: Past")
    add(f"You {act_e}.", f"তুমি {b_1st.replace('ছিলাম', 'ছিলে')}।", "Tense: Past")
    add(f"He {act_e}.", f"সে {b_3rd}।", "Tense: Past")
    add(f"She {act_e}.", f"সে {b_3rd}।", "Tense: Past")
    add(f"They {act_e}.", f"তারা {b_3rd}।", "Tense: Past")

# ==========================================
# 5. FUTURE TENSE (3-5 words)
# ==========================================
future_actions_data = [
    ("call you tomorrow", "আগামীকাল ফোন করব", "আগামীকাল ফোন করবে"),
    ("come very soon", "খুব শীঘ্রই আসব", "খুব শীঘ্রই আসবে"),
    ("help you today", "আজ সাহায্য করব", "আজ সাহায্য করবে"),
    ("meet him tomorrow", "আগামীকাল দেখা করব", "আগামীকাল দেখা করবে"),
    ("buy that phone", "ঐ ফোনটি কিনব", "ঐ ফোনটি কিনবে"),
    ("learn English fast", "দ্রুত ইংরেজি শিখব", "দ্রুত ইংরেজি শিখবে"),
    ("work hard today", "আজ কঠোর পরিশ্রম করব", "আজ কঠোর পরিশ্রম করবে"),
    ("wake up early", "ভোরে ঘুম থেকে উঠব", "ভোরে ঘুম থেকে উঠবে"),
    ("wait right here", "এখানেই অপেক্ষা করব", "এখানেই অপেক্ষা করবে"),
    ("try again tomorrow", "আগামীকাল আবার চেষ্টা করব", "আগামীকাল আবার চেষ্টা করবে"),
    ("stay home today", "আজ বাড়ি থাকব", "আজ বাড়ি থাকবে"),
    ("be ready soon", "শীঘ্রই প্রস্তুত হব", "শীঘ্রই প্রস্তুত হবে"),
    ("finish work early", "তাড়াতাড়ি কাজ শেষ করব", "তাড়াতাড়ি কাজ শেষ করবে"),
    ("win the match", "ম্যাচে জয়ী হব", "ম্যাচে জয়ী হবে"),
    ("write clean code", "পরিষ্কার কোড লিখব", "পরিষ্কার কোড লিখবে"),
    ("cook dinner tonight", "আজ রাতে রান্না করব", "আজ রাতে রান্না করবে"),
    ("visit our village", "গ্রামে ঘুরতে যাব", "গ্রামে ঘুরতে যাবে"),
    ("send the files", "ফাইলগুলো পাঠাব", "ফাইলগুলো পাঠাবে"),
    ("sleep early tonight", "আজ তাড়াতাড়ি ঘুমাব", "আজ তাড়াতাড়ি ঘুমাবে"),
    ("read this book", "এই বইটি পড়ব", "এই বইটি পড়বে"),
    ("start the meeting", "মিটিং শুরু করব", "মিটিং শুরু করবে"),
    ("clean the room", "ঘর পরিষ্কার করব", "ঘর পরিষ্কার করবে"),
    ("save extra money", "অতিরিক্ত টাকা সঞ্চয় করব", "অতিরিক্ত টাকা সঞ্চয় করবে"),
    ("exercise every morning", "প্রতিদিন সকালে ব্যায়াম করব", "প্রতিদিন সকালে ব্যায়াম করবে"),
    ("drink more water", "বেশি করে পানি খাব", "বেশি করে পানি খাবে"),
    ("speak the truth", "সত্য কথা বলব", "সত্য কথা বলবে"),
    ("help my friend", "বন্ধুকে সাহায্য করব", "বন্ধুকে সাহায্য করবে"),
    ("travel next month", "আগামী মাসে ঘুরতে যাব", "আগামী মাসে ঘুরতে যাবে"),
    ("join the class", "ক্লাসে যোগ দেব", "ক্লাসে যোগ দেবে"),
    ("listen to you", "তোমার কথা শুনব", "তোমার কথা শুনবে"),
]

for act_e, b_1st, b_3rd in future_actions_data:
    add(f"I will {act_e}.", f"আমি {b_1st}।", "Tense: Future")
    add(f"We will {act_e}.", f"আমরা {b_1st}।", "Tense: Future")
    add(f"You will {act_e}.", f"তুমি {b_1st.replace('করব', 'করবে').replace('আসব', 'আসবে').replace('কিনব', 'কিনবে').replace('যাব', 'যাবে')}।", "Tense: Future")
    add(f"He will {act_e}.", f"সে {b_3rd}।", "Tense: Future")
    add(f"She will {act_e}.", f"সে {b_3rd}।", "Tense: Future")
    add(f"They will {act_e}.", f"তারা {b_3rd}।", "Tense: Future")

# ==========================================
# 6. QUESTIONS (Wh- & Helping Verbs) (3-5 words)
# ==========================================
short_questions = [
    ("What is your name?", "আপনার নাম কী?", "Questions"),
    ("Where do you live?", "আপনি কোথায় থাকেন?", "Questions"),
    ("What time is it?", "এখন কয়টা বাজে?", "Questions"),
    ("Where are you going?", "তুমি কোথায় যাচ্ছ?", "Questions"),
    ("Why are you late?", "তোমার দেরি হলো কেন?", "Questions"),
    ("Why are you smiling?", "তুমি হাসছ কেন?", "Questions"),
    ("Who is with you?", "তোমার সাথে কে আছে?", "Questions"),
    ("Who called you today?", "আজ তোমাকে কে ডেকেছে?", "Questions"),
    ("How was your day?", "তোমার দিনটি কেমন ছিল?", "Questions"),
    ("How do you feel?", "তোমার কেমন লাগছে?", "Questions"),
    ("Which book is yours?", "কোন বইটি তোমার?", "Questions"),
    ("Where is my bag?", "আমার ব্যাগটি কোথায়?", "Questions"),
    ("Where is the station?", "স্টেশনটি কোথায়?", "Questions"),
    ("How much is this?", "এটির দাম কত?", "Questions"),
    ("Are you ready now?", "তুমি কি এখন প্রস্তুত?", "Questions"),
    ("Do you like coffee?", "তুমি কি কফি পছন্দ করো?", "Questions"),
    ("Do you like tea?", "তুমি কি চা পছন্দ করো?", "Questions"),
    ("Did you see him?", "তুমি কি তাকে দেখেছিলে?", "Questions"),
    ("Did you finish it?", "তুমি কি শেষ করেছিলে?", "Questions"),
    ("Will you join us?", "তুমি কি যোগ দেবে?", "Questions"),
    ("Is this seat free?", "এই সিটটি কি খালি?", "Questions"),
    ("Do you understand me?", "তুমি কি বুঝতে পেরেছ?", "Questions"),
    ("Where did you go?", "তুমি কোথায় গিয়েছিলে?", "Questions"),
    ("What did you buy?", "তুমি কী কিনেছিলে?", "Questions"),
    ("Why did you leave?", "তুমি চলে গেলে কেন?", "Questions"),
    ("Who told you this?", "তোমাকে এটা কে বলেছে?", "Questions"),
    ("How did you know?", "তুমি কীভাবে জেনেছ?", "Questions"),
    ("When will you come?", "তুমি কখন আসবে?", "Questions"),
    ("What do you want?", "তুমি কী চাও?", "Questions"),
    ("Do you speak English?", "আপনি কি ইংরেজি বলেন?", "Questions"),
    ("Are you coming today?", "তুমি কি আজ আসছ?", "Questions"),
    ("Is everything fine now?", "এখন কি সবকিছু ঠিক?", "Questions"),
    ("Can you hear me?", "তুমি কি শুনতে পাচ্ছ?", "Questions"),
    ("Where is the office?", "অফিসটি কোথায়?", "Questions"),
    ("Who is that person?", "ঐ ব্যক্তি কে?", "Questions"),
    ("What are you doing?", "তুমি কী করছ?", "Questions"),
    ("Why are you crying?", "তুমি কাঁদছ কেন?", "Questions"),
    ("When did you arrive?", "তুমি কখন পৌঁছালে?", "Questions"),
    ("Which color you like?", "কোন রঙ পছন্দ করো?", "Questions"),
    ("Do you need help?", "তোমার কি সাহায্য দরকার?", "Questions"),
]

for s, b, c in short_questions:
    add(s, b, c)

# Question variations
q_verbs = [
    ("like this book", "এই বইটি পছন্দ করো"),
    ("want some tea", "চা খেতে চাও"),
    ("need more time", "আরও সময় চাও"),
    ("know his name", "তার নাম জানো"),
    ("have a car", "গাড়ি আছে"),
    ("read the news", "খবর পড়ো"),
    ("work from home", "বাসা থেকে কাজ করো"),
    ("speak with him", "তার সাথে কথা বলো"),
    ("wake up early", "ভোরে ঘুম থেকে ওঠো"),
    ("drink green tea", "গ্রিন টি খাও"),
    ("play video games", "ভিডিও গেম খেলো"),
    ("feel very happy", "খুশি অনুভব করছ"),
    ("learn English online", "অনলাইনে ইংরেজি শেখো"),
    ("save your money", "টাকা সঞ্চয় করো"),
    ("cook your food", "নিজে রান্না করো")
]

for qv_e, qv_b in q_verbs:
    add(f"Do you {qv_e}?", f"তুমি কি {qv_b}?", "Questions")
    add(f"Did you {qv_e}?", f"তুমি কি {qv_b.replace('করো', 'করেছিলে').replace('চাও', 'চেয়েছিলে').replace('জানো', 'জেনেছিলে').replace('খাও', 'খেয়েছিলে').replace('পড়ো', 'পড়েছিলে')}?", "Questions")
    add(f"Will you {qv_e}?", f"তুমি কি {qv_b.replace('করো', 'করবে').replace('চাও', 'চাইবে').replace('জানো', 'জানবে').replace('খাও', 'খাবে').replace('পড়ো', 'পড়বে')}?", "Questions")

# ==========================================
# 7. WORK & OFFICE (3-5 words)
# ==========================================
work_data = [
    ("Send me the file.", "আমাকে ফাইলটি পাঠাও।", "Work & Office"),
    ("Check your inbox now.", "তোমার ইনবক্স চেক করো।", "Work & Office"),
    ("The meeting has started.", "মিটিংটি শুরু হয়েছে।", "Work & Office"),
    ("I sent an email.", "আমি ইমেইল পাঠিয়েছি।", "Work & Office"),
    ("Write clean code always.", "সর্বদা পরিষ্কার কোড লেখ।", "Work & Office"),
    ("Fix this bug fast.", "এই বাগটি দ্রুত ঠিক করো।", "Work & Office"),
    ("Save your work now.", "তোমার কাজ সেভ করো।", "Work & Office"),
    ("We need more time.", "আমাদের আরও সময় দরকার।", "Work & Office"),
    ("The server is fast.", "সার্ভারটি খুব দ্রুত।", "Work & Office"),
    ("Update your status today.", "কাজের আপডেট দাও।", "Work & Office"),
    ("Join the team call.", "দলের কলে যোগ দাও।", "Work & Office"),
    ("Review this document carefully.", "নথিটি মনোযোগ দিয়ে দেখো।", "Work & Office"),
    ("Submit your work today.", "আজ তোমার কাজ জমা দাও।", "Work & Office"),
    ("The project is ready.", "প্রকল্পটি প্রস্তুত হয়েছে।", "Work & Office"),
    ("Work hard every day.", "প্রতিদিন কঠোর পরিশ্রম করো।", "Work & Office"),
    ("Meet the deadline on time.", "সময়মতো কাজ শেষ করো।", "Work & Office"),
    ("Our client is happy.", "মক্কেল খুব খুশি।", "Work & Office"),
    ("Print the report now.", "রিপোর্টটি প্রিন্ট করো।", "Work & Office"),
    ("Share your screen please.", "স্ক্রিন শেয়ার করো।", "Work & Office"),
    ("Turn on your camera.", "ক্যামেরা চালু করো।", "Work & Office"),
]

for s, b, c in work_data:
    add(s, b, c)

# ==========================================
# 8. SHORT WISDOM & QUOTES (3-5 words)
# ==========================================
quotes_data = [
    ("Practice makes you perfect.", "অনুশীলন মানুষকে নিখুঁত করে।", "Short Quotes"),
    ("Time is very precious.", "সময় খুবই মূল্যবান।", "Short Quotes"),
    ("Knowledge is true power.", "জ্ঞানই হলো আসল শক্তি।", "Short Quotes"),
    ("Never lose your hope.", "কখনও আশা হারাবেন না।", "Short Quotes"),
    ("Hard work brings success.", "কঠোর পরিশ্রম সাফল্য আনে।", "Short Quotes"),
    ("Patience is a virtue.", "ধৈর্য একটি মহৎ গুণ।", "Short Quotes"),
    ("Honesty is the best.", "সততাই সর্বদা সেরা।", "Short Quotes"),
    ("Kindness always matters most.", "দয়া ও নম্রতা সবচেয়ে জরুরি।", "Short Quotes"),
    ("Dream big every day.", "প্রতিদিন বড় স্বপ্ন দেখো।", "Short Quotes"),
    ("Action speaks very loud.", "কথা নয়, কাজই বড় পরিচয়।", "Short Quotes"),
    ("Focus on your progress.", "নিজের উন্নতির দিকে মনোযোগ দাও।", "Short Quotes"),
    ("Stay humble and kind.", "সর্বদা বিনয়ী ও সদয় থাকো।", "Short Quotes"),
    ("Learn from your mistakes.", "ভুল থেকে শিক্ষা গ্রহণ করো।", "Short Quotes"),
    ("Health is real wealth.", "স্বাস্থ্যই সকল সুখের মূল।", "Short Quotes"),
    ("Simplicity is true beauty.", "সরলতাই হলো আসল সৌন্দর্য।", "Short Quotes"),
]

for s, b, c in quotes_data:
    add(s, b, c)

print(f"Current count: {len(all_sentences)}")

# Fill up smoothly to 3,000 using high quality, natural permutations strictly 3-5 words
subjects_multi = [
    ("I", "আমি"),
    ("We", "আমরা"),
    ("You", "তুমি"),
    ("He", "সে"),
    ("She", "সে"),
    ("They", "তারা"),
]

# Additional clean, natural daily predicates (3-4 words):
# (present_en, past_en, fut_en, bn_pres, bn_past, bn_fut)
predicates = [
    ("drink fresh milk", "drank fresh milk", "drink fresh milk", "তাজা দুধ খাই", "তাজা দুধ খেয়েছিলাম", "তাজা দুধ খাব"),
    ("drink cold water", "drank cold water", "drink cold water", "ঠান্ডা পানি খাই", "ঠান্ডা পানি খেয়েছিলাম", "ঠান্ডা পানি খাব"),
    ("eat sweet mangoes", "ate sweet mangoes", "eat sweet mangoes", "মিষ্টি আম খাই", "মিষ্টি আম খেয়েছিলাম", "মিষ্টি আম খাব"),
    ("eat green apples", "ate green apples", "eat green apples", "সবুজ আপেল খাই", "সবুজ আপেল খেয়েছিলাম", "সবুজ আপেল খাব"),
    ("read short stories", "read short stories", "read short stories", "ছোট গল্প পড়ি", "ছোট গল্প পড়েছিলাম", "ছোট গল্প পড়ব"),
    ("read English grammar", "read English grammar", "read English grammar", "ইংরেজি ব্যাকরণ পড়ি", "ইংরেজি ব্যাকরণ পড়েছিলাম", "ইংরেজি ব্যাকরণ পড়ব"),
    ("write short notes", "wrote short notes", "write short notes", "ছোট নোট লিখি", "ছোট নোট লিখেছিলাম", "ছোট নোট লিখব"),
    ("write kind words", "wrote kind words", "write kind words", "সদয় কথা লিখি", "সদয় কথা লিখেছিলাম", "সদয় কথা লিখব"),
    ("sing sweet songs", "sang sweet songs", "sing sweet songs", "মিষ্টি গান গাই", "মিষ্টি গান গেয়েছিলাম", "মিষ্টি গান গাইব"),
    ("draw nice pictures", "drew nice pictures", "draw nice pictures", "সুন্দর ছবি আঁকি", "সুন্দর ছবি এঁকেছিলাম", "সুন্দর ছবি আঁকব"),
    ("wash dirty clothes", "washed dirty clothes", "wash dirty clothes", "পোশাক পরিষ্কার করি", "পোশাক পরিষ্কার করেছিলাম", "পোশাক পরিষ্কার করব"),
    ("wear clean shirts", "wore clean shirts", "wear clean shirts", "পরিষ্কার জামা পরি", "পরিষ্কার জামা পরেছিলাম", "পরিষ্কার জামা পরব"),
    ("plant green trees", "planted green trees", "plant green trees", "সবুজ গাছ লাগাই", "সবুজ গাছ লাগিয়েছিলাম", "সবুজ গাছ লাগাব"),
    ("water the flowers", "watered the flowers", "water the flowers", "ফুলে পানি দিই", "ফুলে পানি দিয়েছিলাম", "ফুলে পানি দেব"),
    ("open the window", "opened the window", "open the window", "জানালা খুলে দিই", "জানালা খুলে দিয়েছিলাম", "জানালা খুলে দেব"),
    ("close the door", "closed the door", "close the door", "দরজা বন্ধ করি", "দরজা বন্ধ করেছিলাম", "দরজা বন্ধ করব"),
    ("lock the gate", "locked the gate", "lock the gate", "গেট তালা মারি", "গেট তালা মেরেছিলাম", "গেট তালা মারব"),
    ("buy daily groceries", "bought daily groceries", "buy daily groceries", "দৈনিক বাজার করি", "দৈনিক বাজার করেছিলাম", "দৈনিক বাজার করব"),
    ("visit local markets", "visited local markets", "visit local markets", "বাজারে ঘুরতে যাই", "বাজারে ঘুরতে গিয়েছিলাম", "বাজারে ঘুরতে যাব"),
    ("walk in gardens", "walked in gardens", "walk in gardens", "বাগানে হাঁটি", "বাগানে হেঁটেছিলাম", "বাগানে হাঁটব"),
    ("play indoor chess", "played indoor chess", "play indoor chess", "দাবা খেলি", "দাবা খেলেছিলাম", "দাবা খেলব"),
    ("watch evening sunsets", "watched evening sunsets", "watch evening sunsets", "সূর্যাস্ত দেখি", "সূর্যাস্ত দেখেছিলাম", "সূর্যাস্ত দেখব"),
    ("enjoy morning breeze", "enjoyed morning breeze", "enjoy morning breeze", "সকালের বাতাস উপভোগ করি", "সকালের বাতাস উপভোগ করেছিলাম", "সকালের বাতাস উপভোগ করব"),
    ("study modern science", "studied modern science", "study modern science", "বিজ্ঞান পড়ি", "বিজ্ঞান পড়েছিলাম", "বিজ্ঞান পড়ব"),
    ("learn world history", "learned world history", "learn world history", "ইতিহাস শিখি", "ইতিহাস শিখেছিলাম", "ইতিহাস শিখব"),
    ("speak with friends", "spoke with friends", "speak with friends", "বন্ধুদের সাথে কথা বলি", "বন্ধুদের সাথে কথা বলেছিলাম", "বন্ধুদের সাথে কথা বলব"),
    ("help elderly people", "helped elderly people", "help elderly people", "বড়দের সাহায্য করি", "বড়দের সাহায্য করেছিলাম", "বড়দের সাহায্য করব"),
    ("feed street animals", "fed street animals", "feed street animals", "প্রাণীদের খাবার দিই", "প্রাণীদের খাবার দিয়েছিলাম", "প্রাণীদের খাবার দেব"),
    ("listen to elders", "listened to elders", "listen to elders", "বড়দের কথা শুনি", "বড়দের কথা শুনেছিলাম", "বড়দের কথা শুনব"),
    ("clean working desks", "cleaned working desks", "clean working desks", "টেবিল পরিষ্কার করি", "টেবিল পরিষ্কার করেছিলাম", "টেবিল পরিষ্কার করব")
]

for s_e, s_b in subjects_multi:
    for pres_e, past_e, fut_e, bn_pres, bn_past, bn_fut in predicates:
        # Present
        if s_e in ["He", "She"]:
            # 3rd person singular present
            v_parts = pres_e.split()
            v_3rd = v_parts[0] + "s"
            rest_v = " ".join(v_parts[1:])
            add(f"{s_e} {v_3rd} {rest_v}.", f"{s_b} {bn_pres.replace('করি', 'করে').replace('খাই', 'খায়').replace('পড়ি', 'পড়ে').replace('দিই', 'দেয়').replace('যাই', 'যায়').replace('হাঁটি', 'হাঁটে').replace('গাই', 'গায়')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past.replace('ছিলাম', 'ছিল')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('দেবো', 'দেবে').replace('দেব', 'দেবে').replace('যাব', 'যাবে')}।", "Tense: Future")
        elif s_e == "You":
            add(f"{s_e} {pres_e}.", f"{s_b} {bn_pres.replace('করি', 'করো').replace('খাই', 'খাও').replace('পড়ি', 'পড়ো').replace('দিই', 'দাও').replace('যাই', 'যাও').replace('হাঁটি', 'হাঁটো')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past.replace('ছিলাম', 'ছিলে')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('দেব', 'দেবে').replace('যাব', 'যাবে')}।", "Tense: Future")
        else: # I, We, They
            add(f"{s_e} {pres_e}.", f"{s_b} {bn_pres if s_e != 'They' else bn_pres.replace('করি', 'করে').replace('খাই', 'খায়').replace('পড়ি', 'পড়ে').replace('দিই', 'দেয়')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past if s_e != 'They' else bn_past.replace('ছিলাম', 'ছিল')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut if s_e != 'They' else bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('দেব', 'দেবে')}।", "Tense: Future")

# Additional clean, natural daily predicates
extra_daily_verbs = [
    ("eat warm soup", "ate warm soup", "eat warm soup", "গরম স্যুপ খাই", "গরম স্যুপ খেয়েছিলাম", "গরম স্যুপ খাব"),
    ("drink orange juice", "drank orange juice", "drink orange juice", "কমলার রস খাই", "কমলার রস খেয়েছিলাম", "কমলার রস খাব"),
    ("bake sweet cake", "baked sweet cake", "bake sweet cake", "মিষ্টি কেক বানাই", "মিষ্টি কেক বানিয়েছিলাম", "মিষ্টি কেক বানাব"),
    ("slice fresh bread", "sliced fresh bread", "slice fresh bread", "পাউরুটি কাটি", "পাউরুটি কেটেছিলাম", "পাউরুটি কাটব"),
    ("ride small bikes", "rode small bikes", "ride small bikes", "সাইকেল চালাই", "সাইকেল চালিয়েছিলাম", "সাইকেল চালাব"),
    ("climb high hills", "climbed high hills", "climb high hills", "পাহাড়ে উঠি", "পাহাড়ে উঠেছিলাম", "পাহাড়ে উঠব"),
    ("swim in rivers", "swam in rivers", "swim in rivers", "নদীতে সাঁতার কাটি", "নদীতে সাঁতার কেটেছিলাম", "নদীতে সাঁতার কাটব"),
    ("rest on weekends", "rested on weekends", "rest on weekends", "ছুটির দিনে বিশ্রাম নিই", "ছুটির দিনে বিশ্রাম নিয়েছিলাম", "ছুটির দিনে বিশ্রাম নেব"),
    ("enjoy rainy days", "enjoyed rainy days", "enjoy rainy days", "বৃষ্টির দিন উপভোগ করি", "বৃষ্টির দিন উপভোগ করেছিলাম", "বৃষ্টির দিন উপভোগ করব"),
    ("watch the stars", "watched the stars", "watch the stars", "তারা দেখি", "তারা দেখেছিলাম", "তারা দেখব"),
    ("plant red roses", "planted red roses", "plant red roses", "লাল গোলাপ লাগাই", "লাল গোলাপ লাগিয়েছিলাম", "লাল গোলাপ লাগাব"),
    ("feed the birds", "fed the birds", "feed the birds", "পাখিদের খাবার দিই", "পাখিদের খাবার দিয়েছিলাম", "পাখিদের খাবার দেব"),
    ("sweep the floor", "swept the floor", "sweep the floor", "মেঝে ঝাড়ু দিই", "মেঝে ঝাড়ু দিয়েছিলাম", "মেঝে ঝাড়ু দেব"),
    ("wash the car", "washed the car", "wash the car", "গাড়ি পরিষ্কার করি", "গাড়ি পরিষ্কার করেছিলাম", "গাড়ি পরিষ্কার করব"),
    ("polish black shoes", "polished black shoes", "polish black shoes", "কালো জুতো পালিশ করি", "কালো জুতো পালিশ করেছিলাম", "কালো জুতো পালিশ করব"),
    ("read daily newspaper", "read daily newspaper", "read daily newspaper", "দৈনিক পত্রিকা পড়ি", "দৈনিক পত্রিকা পড়েছিলাম", "দৈনিক পত্রিকা পড়ব"),
    ("solve math problems", "solved math problems", "solve math problems", "গণিতের অংক করি", "গণিতের অংক করেছিলাম", "গণিতের অংক করব"),
    ("learn new coding", "learned new coding", "learn new coding", "নতুন কোডিং শিখি", "নতুন কোডিং শিখেছিলাম", "নতুন কোডিং শিখব"),
    ("type on keyboard", "typed on keyboard", "type on keyboard", "কীবোর্ডে টাইপ করি", "কীবোর্ডে টাইপ করেছিলাম", "কীবোর্ডে টাইপ করব"),
    ("listen to podcast", "listened to podcast", "listen to podcast", "পডকাস্ট শুনি", "পডকাস্ট শুনেছিলাম", "পডকাস্ট শুনব"),
    ("call my brother", "called my brother", "call my brother", "ভাইকে ফোন করি", "ভাইকে ফোন করেছিলাম", "ভাইকে ফোন করব"),
    ("visit my sister", "visited my sister", "visit my sister", "বোনের বাসায় যাই", "বোনের বাসায় গিয়েছিলাম", "বোনের বাসায় যাব"),
    ("meet new people", "met new people", "meet new people", "নতুন মানুষের সাথে দেখা করি", "নতুন মানুষের সাথে দেখা করেছিলাম", "নতুন মানুষের সাথে দেখা করব"),
    ("share good news", "shared good news", "share good news", "ভালো খবর জানাই", "ভালো খবর জানিয়েছিলাম", "ভালো খবর জানাব"),
    ("help the team", "helped the team", "help the team", "দলে সাহায্য করি", "দলে সাহায্য করেছিলাম", "দলে সাহায্য করব"),
    ("plan the tour", "planned the tour", "plan the tour", "ভ্রমণের পরিকল্পনা করি", "ভ্রমণের পরিকল্পনা করেছিলাম", "ভ্রমণের পরিকল্পনা করব"),
    ("pack the suitcase", "packed the suitcase", "pack the suitcase", "ব্যাগ গুছিয়ে নিই", "ব্যাগ গুছিয়ে নিয়েছিলাম", "ব্যাগ গুছিয়ে নেব"),
    ("arrive very early", "arrived very early", "arrive very early", "খুব ভোরে পৌঁছাই", "খুব ভোরে পৌঁছেছিলাম", "খুব ভোরে পৌঁছাব"),
    ("leave the office", "left the office", "leave the office", "অফিস থেকে বের হই", "অফিস থেকে বের হয়েছিলাম", "অফিস থেকে বের হব"),
    ("lock the drawers", "locked the drawers", "lock the drawers", "ড্রয়ার তালা মারি", "ড্রয়ার তালা মেরেছিলাম", "ড্রয়ার তালা মারব"),
]

for s_e, s_b in subjects_multi:
    for pres_e, past_e, fut_e, bn_pres, bn_past, bn_fut in extra_daily_verbs:
        if s_e in ["He", "She"]:
            v_parts = pres_e.split()
            v_3rd = v_parts[0] + "s"
            rest_v = " ".join(v_parts[1:])
            add(f"{s_e} {v_3rd} {rest_v}.", f"{s_b} {bn_pres.replace('করি', 'করে').replace('খাই', 'খায়').replace('পড়ি', 'পড়ে').replace('দিই', 'দেয়').replace('যাই', 'যায়').replace('নিই', 'নেয়').replace('কাটি', 'কাটে')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past.replace('ছিলাম', 'ছিল')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('নেব', 'নেবে')}।", "Tense: Future")
        elif s_e == "You":
            add(f"{s_e} {pres_e}.", f"{s_b} {bn_pres.replace('করি', 'করো').replace('খাই', 'খাও').replace('পড়ি', 'পড়ো').replace('দিই', 'দাও').replace('নিই', 'নাও')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past.replace('ছিলাম', 'ছিলে')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('নেব', 'নেবে')}।", "Tense: Future")
        else:
            add(f"{s_e} {pres_e}.", f"{s_b} {bn_pres if s_e != 'They' else bn_pres.replace('করি', 'করে').replace('খাই', 'খায়').replace('পড়ি', 'পড়ে')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past if s_e != 'They' else bn_past.replace('ছিলাম', 'ছিল')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut if s_e != 'They' else bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে')}।", "Tense: Future")

extra_questions = [
    ("Where is your home?", "তোমার বাড়ি কোথায়?"),
    ("What is your hobby?", "তোমার শখ কী?"),
    ("Who is your teacher?", "তোমার শিক্ষক কে?"),
    ("When is the train?", "ট্রেনটি কখন আসবে?"),
    ("Why are you quiet?", "তুমি শান্ত কেন?"),
    ("How is the weather?", "আবহাওয়া কেমন?"),
    ("Is the food ready?", "খাবার কি তৈরি?"),
    ("Are you feeling better?", "ভালো লাগছে কি?"),
    ("Can we talk now?", "কথা বলা যাবে?"),
    ("Did you sleep well?", "ঘুম ভালো হয়েছিল?"),
    ("Will you wait here?", "এখানে অপেক্ষা করবে?"),
    ("Do you drink tea?", "চা পান করো?"),
    ("What do you study?", "তুমি কী পড়ো?"),
    ("Where did he go?", "সে কোথায় গেল?"),
    ("Why did she call?", "সে ফোন দিল কেন?"),
    ("Who won the game?", "খেলায় কে জিতল?"),
    ("How do I start?", "কীভাবে শুরু করব?"),
    ("Can I try this?", "চেষ্টা করে দেখব?"),
    ("May we sit together?", "একসাথে বসতে পারি?"),
    ("Should I close it?", "বন্ধ করে দেব?"),
    ("Can we go together?", "একসাথে যাওয়া যাবে?"),
    ("Did you call me?", "আমাকে ফোন দিয়েছিলে?"),
    ("Is he your friend?", "সে কি তোমার বন্ধু?"),
    ("Are they coming today?", "তারা কি আজ আসছে?"),
    ("Where was your bag?", "ব্যাগ কোথায় ছিল?"),
    ("Why is it cold?", "এত ঠান্ডা কেন?"),
    ("What will you eat?", "তুমি কী খাবে?"),
    ("Who opened the door?", "দরজা কে খুলল?"),
    ("Did you see that?", "তুমি কি ওটা দেখেছ?"),
    ("Can you drive now?", "গাড়ি চালাতে পারবে?")
]

more_clean_actions = [
    ("read funny comics", "read funny comics", "read funny comics", "মজার কমিকস পড়ি", "মজার কমিকস পড়েছিলাম", "মজার কমিকস পড়ব"),
    ("eat ripe bananas", "ate ripe bananas", "eat ripe bananas", "পাকা কলা খাই", "পাকা কলা খেয়েছিলাম", "পাকা কলা খাব"),
    ("drink lemon water", "drank lemon water", "drink lemon water", "লেবুর পানি খাই", "লেবুর পানি খেয়েছিলাম", "লেবুর পানি খাব"),
    ("listen to radio", "listened to radio", "listen to radio", "রেডিও শুনি", "রেডিও শুনেছিলাম", "রেডিও শুনব"),
    ("watch comedy shows", "watched comedy shows", "watch comedy shows", "কমেডি শো দেখি", "কমেডি শো দেখেছিলাম", "কমেডি শো দেখব"),
    ("clean the kitchen", "cleaned the kitchen", "clean the kitchen", "রান্নাঘর পরিষ্কার করি", "রান্নাঘর পরিষ্কার করেছিলাম", "রান্নাঘর পরিষ্কার করব"),
    ("wash plastic cups", "washed plastic cups", "wash plastic cups", "কাপ ধুয়ে ফেলি", "কাপ ধুয়ে ফেলেছিলাম", "কাপ ধুয়ে ফেলব"),
    ("make herbal tea", "made herbal tea", "make herbal tea", "ভেষজ চা বানাই", "ভেষজ চা বানিয়েছিলাম", "ভেষজ চা বানাব"),
    ("taste delicious honey", "tasted delicious honey", "taste delicious honey", "মধু খাই", "মধু খেয়েছিলাম", "মধু খাব"),
    ("open the gates", "opened the gates", "open the gates", "গেট খুলে দিই", "গেট খুলে দিয়েছিলাম", "গেট খুলে দেব"),
    ("ring the bell", "rang the bell", "ring the bell", "ঘণ্টা বাজাই", "ঘণ্টা বাজিয়েছিলাম", "ঘণ্টা বাজাব"),
    ("carry school bags", "carried school bags", "carry school bags", "স্কুল ব্যাগ নিই", "স্কুল ব্যাগ নিয়েছিলাম", "স্কুল ব্যাগ নেব"),
    ("ride fast trains", "rode fast trains", "ride fast trains", "দ্রুত ট্রেনে চড়ি", "দ্রুত ট্রেনে চড়েছিলাম", "দ্রুত ট্রেনে চড়ব"),
    ("visit city parks", "visited city parks", "visit city parks", "পার্কে ঘুরতে যাই", "পার্কে ঘুরতে গিয়েছিলাম", "পার্কে ঘুরতে যাব"),
    ("walk near lakes", "walked near lakes", "walk near lakes", "হ্রদের কাছে হাঁটি", "হ্রদের কাছে হেঁটেছিলাম", "হ্রদের কাছে হাঁটব"),
    ("sit under trees", "sat under trees", "sit under trees", "গাছের নিচে বসি", "গাছের নিচে বসেছিলাম", "গাছের নিচে বসব"),
    ("enjoy sweet breeze", "enjoyed sweet breeze", "enjoy sweet breeze", "মিষ্টি বাতাস উপভোগ করি", "মিষ্টি বাতাস উপভোগ করেছিলাম", "মিষ্টি বাতাস উপভোগ করব"),
    ("take short breaks", "took short breaks", "take short breaks", "বিরতি নিই", "বিরতি নিয়েছিলাম", "বিরতি নেব"),
    ("write daily diaries", "wrote daily diaries", "write daily diaries", "ডায়েরি লিখি", "ডায়েরি লিখেছিলাম", "ডায়েরি লিখব"),
    ("read world news", "read world news", "read world news", "বিশ্বসংবাদ পড়ি", "বিশ্বসংবাদ পড়েছিলাম", "বিশ্বসংবাদ পড়ব"),
]

for s_e, s_b in subjects_multi:
    for pres_e, past_e, fut_e, bn_pres, bn_past, bn_fut in more_clean_actions:
        if s_e in ["He", "She"]:
            v_parts = pres_e.split()
            v_3rd = v_parts[0] + "s"
            rest_v = " ".join(v_parts[1:])
            add(f"{s_e} {v_3rd} {rest_v}.", f"{s_b} {bn_pres.replace('করি', 'করে').replace('খাই', 'খায়').replace('পড়ি', 'পড়ে').replace('দিই', 'দেয়').replace('যাই', 'যায়').replace('নিই', 'নেয়').replace('বসি', 'বসে').replace('চড়ি', 'চড়ে')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past.replace('ছিলাম', 'ছিল')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('নেব', 'নেবে').replace('বসব', 'বসবে')}।", "Tense: Future")
        elif s_e == "You":
            add(f"{s_e} {pres_e}.", f"{s_b} {bn_pres.replace('করি', 'করো').replace('খাই', 'খাও').replace('পড়ি', 'পড়ো').replace('দিই', 'দাও').replace('নিই', 'নাও')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past.replace('ছিলাম', 'ছিলে')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে').replace('নেব', 'নেবে')}।", "Tense: Future")
        else:
            add(f"{s_e} {pres_e}.", f"{s_b} {bn_pres if s_e != 'They' else bn_pres.replace('করি', 'করে').replace('খাই', 'খায়').replace('পড়ি', 'পড়ে')}।", "Tense: Present")
            add(f"{s_e} {past_e}.", f"{s_b} {bn_past if s_e != 'They' else bn_past.replace('ছিলাম', 'ছিল')}।", "Tense: Past")
            add(f"{s_e} will {fut_e}.", f"{s_b} {bn_fut if s_e != 'They' else bn_fut.replace('করব', 'করবে').replace('খাব', 'খাবে').replace('পড়ব', 'পড়বে')}।", "Tense: Future")

print(f"Total Unique Sentences: {len(all_sentences)}")

# Ensure we have at least 3,000
assert len(all_sentences) >= 3000, f"Only {len(all_sentences)} sentences generated, need at least 3000"

# Take exactly 3,000
final_list = all_sentences[:3000]

# Renumber IDs
for i, item in enumerate(final_list, 1):
    item["id"] = f"s-{i}"

# Double check length distribution
lengths = [len(item["sentence"].split()) for item in final_list]
print(f"Final Count: {len(final_list)}")
print(f"Min word length: {min(lengths)}, Max word length: {max(lengths)}")

output_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "sentences_3000.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(final_list, f, ensure_ascii=False, indent=2)

print(f"Successfully generated 3,000 short/medium sentences at {output_path}!")
