import json
import re

with open("src/data/speedTestParagraphs.js", "r", encoding="utf-8") as f:
    text = f.read()

# Extract JSON array
m = re.search(r"export const SPEED_PARAGRAPHS = (\[.*?\]);", text, re.DOTALL)
if not m:
    print("Could not find array")
    exit(1)

paragraphs = json.loads(m.group(1))

# Natural thematic expansions for any paragraph with < 45 words
expansions = {
    "para-1": " True progress is forged in quiet moments of devotion when nobody is watching. Keep your eyes firmly fixed on your own path and celebrate every step forward.",
    "para-2": " Over time, those tiny daily improvements compound into unstoppable momentum. What seemed difficult yesterday becomes your second nature tomorrow.",
    "para-3": " Protect this sacred quiet time before the rush of notifications begins. A peaceful morning creates an unbreakable shield of composure for the entire day.",
    "para-4": " Regard your missteps not with shame, but with genuine scientific curiosity. When you learn to welcome constructive feedback, every setback becomes a stepping stone.",
    "para-5": " Give yourself permission to disconnect from the endless digital chatter. In the quiet space between spoken words, your deepest intuitions finally find room to breathe.",
    "para-6": " When you actively practice thankfulness, your perspective shifts from scarcity to abundance. It brings a gentle lightness to your heart and warms everyone around you.",
    "para-7": " True speed is an outcome of smoothness, patience, and unwavering precision. When you refuse to rush, you conserve energy and master the rhythm of your craft.",
    "para-8": " The greatest regret in life is not having tried and fallen short, but never daring to begin. Take that brave leap forward and let your curiosity guide your feet.",
    "para-9": " By letting go of trivial distractions, you regain ownership of your energy and focus. Simplicity is not lack of ambition; it is the ultimate clarity of purpose.",
    "para-10": " When storms arrive, remind yourself that difficult seasons never last forever. Keep moving forward one quiet step at a time, trusting in your capacity to endure.",
    "para-11": " A kind word costs nothing, yet carries the power to restore another person's faith in humanity. Let gentleness be your trademark in a world that is often harsh.",
    "para-12": " Set aside your urge to interrupt or fix things immediately. Simply listen with an open mind, and you will build bridges of trust that endure through any storm.",
    "para-13": " When your energy wanes, learn to rest rather than to quit. Restoring your body and mind honors the hard work you have already invested in your dreams.",
    "para-14": " Forgiving the past does not change what happened, but it expands your capacity to welcome a brighter future. Step forward unburdened and embrace what lies ahead.",
    "para-15": " Whenever your thoughts wander into anxious speculation, gently bring your focus back to the present task. Right here and now is where your true strength resides.",
    "para-16": " These stellar nurseries remind us that from vast clouds of chaos, order and luminous brilliance can emerge across cosmic time.",
    "para-17": " Physicists continue studying the edges of these cosmic abysses, hoping to unite the theories of gravity and quantum mechanics into a single grand equation.",
    "para-18": " In this sense, the night sky is the ultimate museum of ancient light. We gaze at celestial wonders that may have vanished long before our ancestors walked the Earth.",
    "para-19": " Observers standing beneath this glowing spectacle feel an unforgettable sense of cosmic kinship. Nature reveals its grandest electrical poetry above the snowy landscape.",
    "para-20": " High-resolution cameras send back panoramas of windblown sand dunes and lonely rock towers. Every transmitted photograph reminds us that humanity is a species of explorers.",
    "para-21": " Contemplating this cosmic velocity expands human imagination. It reveals how profoundly distant even our closest planetary neighbors are within the vast solar system.",
    "para-22": " Without this gentle force holding our feet to the soil, liquid oceans would drift away into space and life as we know it would cease to exist.",
    "para-23": " The prospect of discovering bio-signatures in alien atmospheres drives astronomers forward. One day soon, we may learn that our living planet is not alone in the void.",
    "para-24": " Without this magnetic force field sheltering the planet, solar winds would have stripped away our atmosphere and left Earth as barren as the cold lunar dust.",
    "para-25": " For millions of years, lunar tides have swept along coastal ecosystems, regulating ocean currents and marking the passage of time for countless living creatures.",
    "para-26": " When these icy travelers loop around our Sun, they leave trails of cosmic dust. When Earth passes through their path, we are treated to dazzling meteor showers.",
    "para-27": " To realize that our Sun is merely one star among hundreds of billions instills quiet awe. It reminds us how precious and unique our home in the universe truly is.",
    "para-28": " In the grand architecture of the cosmos, our small blue planet remains our only home. It is our shared duty to cherish and protect this delicate oasis of life.",
    "para-29": " Detecting these cosmic visitors helps astrophysicists map the extreme energetic events unfolding in distant galaxies across billions of light years of time.",
    "para-30": " Even as stars undergo their life cycles, the heavy elements forged in their hearts are scattered across space, becoming the building blocks for future worlds and life.",
    "para-31": " These abyssal creatures teach us that life is remarkably adaptable. Even in total darkness and freezing cold, nature discovers inventive ways to endure and flourish.",
    "para-32": " This cooperative ecosystem reminds us that survival in the wild is not merely about competition, but about intricate partnerships that sustain the entire community.",
    "para-33": " Standing above the clouds with the wind singing against cold stone, one realizes how small our daily worries are against the grand canvas of the natural world.",
    "para-34": " This delicate insect weighing less than a gram completes a journey that astounds modern scientists, demonstrating the extraordinary power of instinct and determination.",
    "para-35": " Protecting these fragile underwater sanctuaries is vital for planetary health. When coral reefs flourish, they sustain coastal communities and maintain ocean equilibrium.",
    "para-36": " Beneath the canopy, towering trees filter rainfall into gentle mist that nurtures rich plant life. Preserving these ancient forests ensures balance across the global climate.",
    "para-37": " At night, temperatures drop dramatically and an ocean of bright stars illuminates the tranquil landscape. The desert rewards those who appreciate quiet resilience.",
    "para-38": " Standing near the edge of a massive glacier inspires profound humility. These ancient ice giants hold the memory of past climates frozen within their crystalline depths.",
    "para-39": " Their joyful leaps above ocean swells remind us that playful curiosity is a hallmark of high intelligence. Dolphins share a special bond with the open sea.",
    "para-40": " This cascade of ecological healing demonstrates how every species plays a crucial role. Restoring balance in nature creates ripples of renewal throughout the landscape.",
    "para-41": " The fallen leaves decompose into rich soil that nourishes the roots through cold winter months. Letting go is not the end, but the beginning of tomorrow's rebirth.",
    "para-42": " The selfless devotion of a honeybee colony offers a timeless lesson in unity. Working together with shared purpose, small creatures accomplish extraordinary feats.",
    "para-43": " Watching an eagle glide across mountain valleys inspires dreams of flight. It teaches us to rise above turbulent storms and navigate life with calm perspective.",
    "para-44": " When facing difficult obstacles, remember the gentle mountain stream. Soft persistence and steady effort can wear down the most stubborn barriers over time.",
    "para-45": " The wilderness at night feels sacred and untamed. It reminds us that Earth belongs not only to daylight wanderers, but to mysterious creatures of the midnight hours.",
    "para-46": " As computing power continues to expand at breathtaking speeds, our responsibility is to channel this technology toward solving global problems and uplifting humanity.",
    "para-47": " Used wisely, these computational tools can expand our capacity to teach, heal, and explore. The ultimate question is not what machines can do, but how we guide them.",
    "para-48": " Knowledge that was once locked inside private archives is now available at the touch of a button, uniting scholars, students, and dreamers from every walk of life.",
    "para-49": " Investing in clean technology creates a healthier world where clean air and vibrant landscapes flourish alongside technological progress for centuries to come.",
    "para-50": " These emerging systems have the potential to unlock breakthroughs in clean battery chemistry, advanced materials, and deep space communication.",
    "para-51": " These metallic sentinels circle Earth day and night without rest, stitching together global communication and ensuring safety across our interconnected modern world.",
    "para-52": " Reimagining urban mobility can reclaim city streets for green parks and pedestrian paths, transforming metropolitan centers into peaceful communities.",
    "para-53": " Ensuring these digital records remain accessible across generations is a vital cultural duty. We preserve the wisdom of our ancestors to light the road for posterity.",
    "para-54": " The widespread availability of printed pages transformed ordinary citizens into independent thinkers, sparking centuries of social progress and scientific discovery.",
    "para-55": " As artificial intelligence and cloud networks expand, maintaining strong privacy protections ensures that individuals retain control over their personal stories.",
    "para-56": " By placing learners directly into interactive historical environments, educational technology makes complex subjects engaging, intuitive, and deeply memorable.",
    "para-57": " The precision required to build these modern wonders borders on the miraculous. Each chip is a monument to human curiosity, mathematics, and engineering perseverance.",
    "para-58": " Even when its power eventually fades, this courageous spacecraft will continue sailing through the cosmic silence as an eternal monument to human wonder.",
    "para-59": " By combining mechanical accuracy with human compassion, modern surgical robotics helps patients return home to their families with less pain and faster healing.",
    "para-60": " Designing cities around human happiness, clean energy, and accessible parks ensures that technology serves our deepest collective well-being.",
    "para-61": " Travelers shared stories around desert campfires, discovering common human longings beneath different languages and laying foundations for cross-cultural friendship.",
    "para-62": " Standing beneath their immense stone shadows at sunset reminds visitors that human ambition and craftsmanship can build monuments that outlast the rise and fall of empires.",
    "para-63": " Though the historic building was lost to the sands of time, the ideal of a universal library continues to inspire digital archives and open knowledge projects today.",
    "para-64": " Their remarkable navigational heritage proves that deep harmony with nature and sharp observation can guide humans safely across the widest oceans.",
    "para-65": " Visiting these ancient stone strongholds transports the imagination backward in time, reminding us of the enduring drama of human history etched into solid rock.",
    "para-66": " This extraordinary era showed that investing in education, arts, and human curiosity can awaken societies from prolonged darkness into dazzling illumination.",
    "para-67": " Every sentence we read today connects us across thousands of years to those early thinkers, proving that ideas are among the most durable forces on Earth.",
    "para-68": " The discovery of fire was the spark that ignited human culture, transforming dark cold caves into warm hearths of social communion and endless invention.",
    "para-69": " The relationship between seafaring navigators and celestial constellations is a testament to human ingenuity before the dawn of mechanical instruments.",
    "para-70": " Walking along these ancient stone ramparts leaves travelers breathless with admiration for the perseverance and resilience of those who built them brick by brick.",
    "para-71": " The quest for these precious culinary treasures proved that even modest plants can alter world history, ignite exploration, and connect separated continents.",
    "para-72": " The durability of these majestic stone arches stands as a testament to the Roman commitment to public utility, sanitation, and architectural beauty.",
    "para-73": " By cataloging stars and inventing precision instruments, these early astronomers passed down intellectual treasures that helped spark the global scientific age.",
    "para-74": " Walking through these silent stone corridors surrounded by jungle sounds invites deep reverence for the skilled hands that sculpted such timeless beauty.",
    "para-75": " Their courage under extreme conditions remains an enduring inspiration for all who venture into the uncharted corners of science, nature, and human capability.",
    "para-76": " Turning the crisp pages of an old book slows the pulse and calms the restless mind, opening doors into the timeless sanctuary of human thought.",
    "para-77": " Whether in times of joyful celebration or quiet sorrow, a meaningful song wraps around the listener like a comforting friend who understands without speaking.",
    "para-78": " Stepping back from the easel after hours of solitary focus brings a sense of deep fulfillment that only artistic creation can bestow upon the soul.",
    "para-79": " Walking through a sunlit cathedral or a thoughtfully designed modern library elevates the human spirit and inspires us to live with greater harmony.",
    "para-80": " Across every culture and epoch, stories remind us of our shared humanity and kindle the torch of hope through even the darkest midnight hours.",
    "para-81": " The right poem at the right moment can alter how you see an entire lifetime, giving voice to private emotions you never knew how to express.",
    "para-82": " Creating something beautiful is our way of adding light to the world. It declares that beyond mere survival, the human experience is worthy of celebration.",
    "para-83": " Emerging from this trance of creation, the artist leaves behind a piece of their inner soul, offering a mirror through which others can discover themselves.",
    "para-84": " Live theater creates an intimate bond between performers and observers that digital screens cannot replace, celebrating the raw truth of human emotion.",
    "para-85": " In an era of disposable plastic goods, handcrafted objects remind us of the enduring value of patience, durability, and honest materials.",
    "para-86": " This philosophy reminds us that in our own lives, personal growth often consists of chipping away negative habits until our best character emerges.",
    "para-87": " Singing these ancestral melodies binds communities together across generations, keeping alive the authentic stories of working people.",
    "para-88": " Surrounding yourself with harmonious tones can transform your working environment into an inspiring sanctuary of creativity and calm focus.",
    "para-89": " Holding these tangible memories reminds us that while time marches relentlessly forward, love and genuine connection remain forever untouched.",
    "para-90": " Before speaking, ask yourself if your words are true, necessary, and kind. Gentle speech builds enduring relationships that withstand life's trials.",
    "para-91": " Prioritize your nightly rest with the same dedication you give to your most ambitious goals, and your body will reward you with vibrant vitality.",
    "para-92": " Never let the busyness of adult life extinguish that childlike hunger to learn. Cultivating curiosity transforms every ordinary day into an exciting discovery.",
    "para-93": " Trust in the quiet power of steady repetition. With patience and consistent practice, actions that once felt awkward will become graceful and effortless.",
    "para-94": " Give your full attention to one meaningful priority at a time. You will accomplish your goals with greater elegance and enjoy deep peace of mind.",
    "para-95": " When we take time to understand another person's journey, barriers dissolve and compassionate communities flourish where everyone feels respected.",
    "para-96": " Make time every day to smile and laugh from the heart. Joy is contagious, and a cheerful disposition lightens every burden you carry along the road.",
    "para-97": " Cultivating a daily reading habit is one of the highest gifts you can give yourself. Books offer a lifetime of wisdom distilled into accessible pages.",
    "para-98": " Speak to yourself with the same warmth and respect you would offer to a cherished friend, and watch your confidence flourish naturally.",
    "para-99": " Once you take that initial small action, anxiety gives way to focus, and the energy of progress carries you smoothly toward completion.",
    "para-100": " Live with purpose and act with intention. When you know why you are working, you will find the strength to triumph over any obstacle.",
    "para-101": " Step away from glowing screens regularly and breathe deeply beneath the open sky. Nature never hurries, yet everything gets accomplished in due time.",
    "para-102": " Create digital boundaries that allow your mind to think deeply without disruption. Quality of attention determines the quality of your life.",
    "para-103": " Protect moments of unstructured reflection in your schedule. Giving your imagination permission to roam often reveals life's most brilliant inspirations.",
    "para-104": " Remember that bamboo bends gracefully with the fiercest storm without breaking. Cultivate that same flexible resilience in your own heart.",
    "para-105": " Enjoy the process of learning rather than focusing solely on the final outcome. The journey of continuous improvement is its own greatest reward.",
    "para-106": " Sip slowly and appreciate this peaceful pause before the obligations of the day begin. A mindful start sets a balanced tone for everything that follows.",
    "para-107": " Take a moment to breathe the fresh morning air and feel the solid ground beneath you. Grounding yourself in nature restores inner harmony.",
    "para-108": " Let the steady rhythm of the rain wash away lingering worries. There is pure comfort in knowing that after every storm, the sky clears again.",
    "para-109": " When a meal is created with affection and shared with open hands, even the simplest ingredients become a feast of warmth and happiness.",
    "para-110": " Drink deeply and be grateful for clean fresh water. Appreciating this basic necessity reminds us of how blessed we are in daily life.",
    "para-111": " Let the vast silence of the night quiet your restless mind. Underneath the cosmic dome, you are part of an immense and wonderful story.",
    "para-112": " Settle into this comforting sanctuary and release the tensions of the day. A warm, peaceful evening restores the spirit for a bright tomorrow.",
    "para-113": " Finding peace does not require traveling to remote mountaintops; it requires learning to discover quiet moments right where you are.",
    "para-114": " Practice this mindful pause throughout your day. A calm breath is an instant bridge from anxious reaction to thoughtful, compassionate response.",
    "para-115": " When you cultivate an attitude of generous service, you discover that the joy you give to others returns multiplied into your own life.",
    "para-116": " As flowers blossom and vegetables ripen under your care, the garden becomes a living testament to what steady love and attention can yield.",
    "para-117": " Let the fading light remind you that every ending carries the promise of a fresh dawn. Rest calmly tonight and wake up with renewed enthusiasm.",
    "para-118": " In these early morning minutes, the world feels fresh, unhurried, and full of possibility. Greet the new day with a hopeful and peaceful heart.",
    "para-119": " Listen to the rhythmic roar of the ocean and breathe in the salty sea air. Nature's timeless power puts all human worries into gentle perspective.",
    "para-120": " Spend quiet time with yourself without guilt or distraction. Knowing and appreciating who you are is the foundation of genuine happiness.",
    "para-121": " With each stroke on the keyboard, muscle memory translates thoughts into visible sentences. Trust your fingers and let the natural rhythm guide your flow.",
    "para-122": " Practice difficult combinations with gentle focus rather than frustration. Soon your fingers will navigate the entire keyboard with graceful confidence.",
    "para-123": " Slow down whenever you make a mistake, correct it calmly, and resume your typing. Clean habits built today will produce blazing speed tomorrow.",
    "para-124": " When typing becomes automatic, your cognitive energy is freed entirely for creativity, composition, and profound problem solving.",
    "para-125": " In this zone of optimal performance, typing feels as effortless as breathing. Enjoy the sensation of your thoughts flowing directly into reality.",
    "para-126": " Developing rapid, precise typing skills removes friction from your daily work, enabling you to express your ideas with clarity and power.",
    "para-127": " Let each session be an exercise in patient presence. As you focus on the steady progression of characters, stress dissolves into focused calm.",
    "para-128": " Take brief breaks to stretch your fingers and breathe deeply. Caring for your physical comfort ensures you will enjoy typing for decades to come.",
    "para-129": " Ten minutes of focused daily practice creates neural pathways that last a lifetime. Trust the compounding power of small, consistent steps.",
    "para-130": " Embrace every challenge as an invitation to grow stronger. Keep your spirit enthusiastic and enjoy the rewarding art of modern typing."
}

# Apply expansions to paragraphs that need them
for p in paragraphs:
    pid = p["id"]
    if pid in expansions:
        p["text"] = p["text"].strip() + expansions[pid]

# Re-check word counts
counts = [len(p["text"].split()) for p in paragraphs]
print(f"Min words: {min(counts)}, Max words: {max(counts)}, Avg words: {sum(counts)/len(counts):.1f}")
print("All paragraphs >= 45 words?", all(c >= 45 for c in counts))

# Format JavaScript output
js_output = """// 130+ Curated, Diverse, Non-Repeating Typing Paragraphs for Score Test
// Each paragraph is between 45-75 words, beautifully written across 9 distinct categories.

export const SPEED_PARAGRAPHS = """ + json.dumps(paragraphs, indent=2) + """;

export const SPEED_SENTENCES_POOL = SPEED_PARAGRAPHS.map(p => {
  const match = p.text.match(/^([^.?!]+[.?!])/);
  return match ? match[1].trim() : p.text.split('.')[0] + '.';
});
"""

with open("src/data/speedTestParagraphs.js", "w", encoding="utf-8") as f:
    f.write(js_output)

print("Updated src/data/speedTestParagraphs.js with 130 full-sized paragraphs!")
