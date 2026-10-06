import asyncio
import os
import edge_tts

sentences = {
    # Existing
    'ex-1': 'I am a student.',
    'ex-2': 'I live in this city.',
    'ex-3': 'I am learning English again.',
    'ex-2-1': 'My family lives in a quiet town.',
    'ex-2-2': 'I drink fresh coffee every morning.',
    'ex-2-3': 'We love spending time together.',
    'ex-3-1': 'He works at an international office.',
    'ex-3-2': 'They speak English very fluently.',
    'ex-3-3': 'Practice makes everything easier.',
    
    # Present Tense
    'pres-1': 'I wake up early every day.',
    'pres-2': 'She speaks English very well.',
    'pres-3': 'They play football in the afternoon.',
    'pres-4': 'We eat dinner together.',
    'pres-5': 'I am reading a good book.',
    'pres-6': 'The sun rises in the east.',
    'pres-7': 'He is waiting for the bus.',
    'pres-8': 'They are learning new skills.',

    # Past Tense
    'past-1': 'I met my friend yesterday.',
    'past-2': 'She cooked delicious food.',
    'past-3': 'We went to the market.',
    'past-4': 'They finished the project on time.',
    'past-5': 'I lived in a village before.',
    'past-6': 'He bought a new laptop.',
    'past-7': 'We watched an exciting game.',
    'past-8': 'She called me last night.',

    # Future Tense
    'fut-1': 'I will visit you tomorrow.',
    'fut-2': 'She will start a new job.',
    'fut-3': 'We will learn English fluently.',
    'fut-4': 'They will arrive very soon.',
    'fut-5': 'I am going to buy a car.',
    'fut-6': 'We will travel next month.',
    'fut-7': 'He will help us tomorrow.',
    'fut-8': 'Everything will be fine.',

    # Modal Verbs
    'modal-1': 'I can speak English fluently.',
    'modal-2': 'Could you please help me.',
    'modal-3': 'May I ask a question.',
    'modal-4': 'She can drive a car.',
    'modal-5': 'You should take rest now.',
    'modal-6': 'We must follow the rules.',
    'modal-7': 'I would love to join you.',
    'modal-8': 'You should drink more water.',

    # Daily Questions & Talk
    'talk-1': 'Where do you live now.',
    'talk-2': 'What are you doing today.',
    'talk-3': 'How can I help you.',
    'talk-4': 'When will you come home.',
    'talk-5': 'I need some help please.',
    'talk-6': 'I am so happy today.',
    'talk-7': 'We are ready for practice.',
    'talk-8': 'Practice makes a person perfect.',
}

os.makedirs('public/audio', exist_ok=True)

async def main():
    print("Generating neural audio files with Microsoft Jenny...")
    for ex_id, text in sentences.items():
        out_file = os.path.join('public', 'audio', f'{ex_id}.mp3')
        if os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
            continue
        try:
            communicate = edge_tts.Communicate(text, 'en-US-JennyNeural')
            await communicate.save(out_file)
            print(f"[OK] Generated {out_file}")
        except Exception as e:
            print(f"[ERROR] {ex_id}: {e}")
    print("All audio generated successfully!")

if __name__ == '__main__':
    asyncio.run(main())
