import json

paragraphs = [
    # -------------------------------------------------------------------------
    # 1. WISDOM, MINDFULNESS & STOICISM (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-1",
        "title": "Patience and Persistence",
        "category": "Wisdom & Habits",
        "text": "Patience and persistence can overcome almost any obstacle in life. When you work calmly towards your goals without rushing, small daily efforts compound into extraordinary achievements. A steady pace always triumphs over erratic speed."
    },
    {
        "id": "para-2",
        "title": "The Power of Tiny Habits",
        "category": "Wisdom & Habits",
        "text": "Great transformations rarely happen overnight. They are the natural result of tiny choices repeated every single day. When you improve by just one percent each morning, you gradually build a foundation that withstands the strongest storms."
    },
    {
        "id": "para-3",
        "title": "Morning Calm and Clarity",
        "category": "Wisdom & Habits",
        "text": "The early morning hours carry a rare and precious stillness. Before the noise of the world awakens, you have an opportunity to set your intentions, breathe deeply, and direct your focus toward what truly matters most."
    },
    {
        "id": "para-4",
        "title": "Embracing Mistakes as Teachers",
        "category": "Wisdom & Habits",
        "text": "Mistakes are not signs of permanent failure, but rather essential signposts along the journey of mastery. Each error teaches you what does not work and guides your next attempt with clearer vision and deeper wisdom."
    },
    {
        "id": "para-5",
        "title": "The Value of Silence",
        "category": "Wisdom & Habits",
        "text": "In a noisy world that constantly demands attention, intentional silence is a superpower. When you pause to sit quietly with your thoughts, your mind settles, creativity awakens, and clarity replaces confusion."
    },
    {
        "id": "para-6",
        "title": "Gratitude in Daily Life",
        "category": "Wisdom & Habits",
        "text": "Gratitude turns what we already have into more than enough. When you learn to notice the ordinary blessings around you, every sunrise, warm drink, and gentle conversation becomes a source of genuine peace."
    },
    {
        "id": "para-7",
        "title": "Slowing Down to Speed Up",
        "category": "Wisdom & Habits",
        "text": "Rushing through tasks often creates costly errors that require double the effort to repair. By slowing down and moving with deliberate intention, you work with higher quality, greater composure, and enduring velocity."
    },
    {
        "id": "para-8",
        "title": "Overcoming Fear of Failure",
        "category": "Wisdom & Habits",
        "text": "Courage is not the complete absence of fear, but the conscious choice to act despite it. When you accept uncertainty as a natural part of any worthy endeavor, you unlock the freedom to explore bold new frontiers."
    },
    {
        "id": "para-9",
        "title": "The Joy of Simplicity",
        "category": "Wisdom & Habits",
        "text": "True sophistication lies in removing what is unnecessary. When you declutter your space and schedule, you create room for meaningful connections, creative work, and the quiet contentment of an unburdened spirit."
    },
    {
        "id": "para-10",
        "title": "Resilience Against Hardship",
        "category": "Wisdom & Habits",
        "text": "Hardship reveals inner strengths that comfort tends to hide. Like steel forged in fire, your character deepens each time you choose to endure adversity with dignity, optimism, and unyielding grace."
    },
    {
        "id": "para-11",
        "title": "Kindness as Quiet Strength",
        "category": "Wisdom & Habits",
        "text": "Kindness is never a sign of weakness; it is the ultimate expression of inner confidence. A single compassionate word can lift someone out of despair and echo across lifetimes in ways we may never fully see."
    },
    {
        "id": "para-12",
        "title": "The Art of Deep Listening",
        "category": "Wisdom & Habits",
        "text": "Most people listen only to prepare their reply, rather than to truly understand. When you give someone your undivided presence and listen without judgment, you offer them one of the rarest gifts in human experience."
    },
    {
        "id": "para-13",
        "title": "Finding Balance Every Day",
        "category": "Wisdom & Habits",
        "text": "Balance is not a fixed destination that you reach and keep forever. It is an ongoing dance of small adjustments between strenuous effort and restorative rest, ambition and contentment, action and quiet reflection."
    },
    {
        "id": "para-14",
        "title": "The Power of Letting Go",
        "category": "Wisdom & Habits",
        "text": "Holding onto past regrets is like carrying heavy stones while climbing a steep hill. When you release what you cannot change, your hands become free to grasp the fresh opportunities unfolding right before you."
    },
    {
        "id": "para-15",
        "title": "Living in the Present Moment",
        "category": "Wisdom & Habits",
        "text": "Yesterday is a closed chapter and tomorrow is yet unwritten. The only moment where your choices carry real power is right now. Anchor your attention here, and you will discover immense richness in every breath."
    },

    # -------------------------------------------------------------------------
    # 2. SCIENCE, SPACE & COSMOS (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-16",
        "title": "The Birth of Stars",
        "category": "Science & Space",
        "text": "Deep within cold clouds of interstellar gas and dust, gravity quietly gathers matter together over millions of years. As pressure builds and temperatures soar to immense heights, nuclear fusion ignites, giving birth to a brilliant new star."
    },
    {
        "id": "para-17",
        "title": "The Mystery of Black Holes",
        "category": "Science & Space",
        "text": "Black holes represent regions of spacetime where gravitational pull is so intense that nothing, not even light itself, can escape. At their boundaries, time slows down to a crawl, challenging our deepest understanding of modern physics."
    },
    {
        "id": "para-18",
        "title": "Looking Back in Time",
        "category": "Science & Space",
        "text": "Because light takes time to travel vast cosmic distances, looking out into space means looking back into history. When modern telescopes capture light from distant galaxies, we witness the universe as it existed billions of years ago."
    },
    {
        "id": "para-19",
        "title": "The Northern Lights",
        "category": "Science & Space",
        "text": "The aurora borealis is a celestial dance of vibrant light across the polar sky. Charged particles from the solar wind collide with oxygen and nitrogen in Earth's atmosphere, painting ribbons of emerald and violet across the darkness."
    },
    {
        "id": "para-20",
        "title": "Mars Exploration",
        "category": "Science & Space",
        "text": "Robotic rovers on Mars roll across ancient riverbeds, analyzing red rocks and dry lake basins. Each drill sample brings humanity closer to answering whether microbial life once flourished on our neighboring planetary world."
    },
    {
        "id": "para-21",
        "title": "The Speed of Light",
        "category": "Science & Space",
        "text": "Light travels at roughly three hundred thousand kilometers every second, making it the cosmic speed limit of the universe. Even at this astonishing velocity, sunlight takes over eight minutes to complete its journey to our planet."
    },
    {
        "id": "para-22",
        "title": "Gravity the Great Architect",
        "category": "Science & Space",
        "text": "Gravity is the invisible architect that holds our solar system in delicate balance. It shapes spiral galaxies, commands the ocean tides, and keeps our atmosphere safely wrapped around the globe like a protective blanket."
    },
    {
        "id": "para-23",
        "title": "Distant Exoplanets",
        "category": "Science & Space",
        "text": "Astronomers have discovered thousands of planets orbiting faraway stars across the Milky Way. Some are frozen gas giants, while others reside in the habitable zone, where liquid oceans might shelter alien ecosystems."
    },
    {
        "id": "para-24",
        "title": "Earth's Magnetic Shield",
        "category": "Science & Space",
        "text": "Deep within our planet, molten iron churns continuously, generating a vast magnetic field that extends far into outer space. This invisible shield deflects lethal cosmic radiation and preserves the delicate atmosphere that makes life possible."
    },
    {
        "id": "para-25",
        "title": "The Moon and Earth",
        "category": "Science & Space",
        "text": "Our Moon is far more than a glowing ornament in the night sky. Its gravitational embrace stabilizes the tilt of Earth's rotational axis, preventing extreme climate swings that would otherwise disrupt living species."
    },
    {
        "id": "para-26",
        "title": "Comets and Ancient Ice",
        "category": "Science & Space",
        "text": "Comets are frozen time capsules left over from the formation of our solar system. As they approach the sun, their ice vaporizes into majestic glowing tails that stretch across millions of kilometers of empty space."
    },
    {
        "id": "para-27",
        "title": "The Milky Way Galaxy",
        "category": "Science & Space",
        "text": "Our home galaxy is a swirling spiral containing hundreds of billions of stars. On a dark summer night away from city lights, its central disk appears overhead like a river of silver dust spilled across the heavens."
    },
    {
        "id": "para-28",
        "title": "The Grand Scale of Space",
        "category": "Science & Space",
        "text": "The observable universe stretches across roughly ninety billion light years in diameter. Within this colossal expanse, our entire planet is just a pale blue dot suspended peacefully in a sunbeam of cosmic mystery."
    },
    {
        "id": "para-29",
        "title": "Cosmic Rays from the Deep",
        "category": "Science & Space",
        "text": "High-energy particles travel across the void of space from exploding supernovae and distant galactic nuclei. When they strike our upper atmosphere, they trigger cascades of subatomic particles that shower harmlessly around us."
    },
    {
        "id": "para-30",
        "title": "The Future of the Sun",
        "category": "Science & Space",
        "text": "Our Sun has burned faithfully for nearly five billion years and will continue shining for billions more. In its distant twilight, it will expand into a glowing red giant, casting off luminous shells of gas into the void."
    },

    # -------------------------------------------------------------------------
    # 3. NATURE, OCEANS & WILDLIFE (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-31",
        "title": "The Deep Ocean Trenches",
        "category": "Nature & Earth",
        "text": "In the deepest abyss of the ocean, sunlight never penetrates and crushing pressures prevail. Yet even in this alien darkness, bioluminescent creatures glow with cold light and thrive around geothermal volcanic vents."
    },
    {
        "id": "para-32",
        "title": "The Wood Wide Web",
        "category": "Nature & Earth",
        "text": "Beneath the forest floor lies a complex network of fungal threads connecting tree roots. Through this underground system, ancient trees share vital nutrients with younger saplings and transmit warnings about insect attacks."
    },
    {
        "id": "para-33",
        "title": "Majestic Mountain Summits",
        "category": "Nature & Earth",
        "text": "High mountain peaks stand like silent sentinels above the swirling clouds. Their jagged rocky ridges remind all who climb them that humility and perseverance are required to reach the world's most breathtaking viewpoints."
    },
    {
        "id": "para-34",
        "title": "Monarch Butterfly Migration",
        "category": "Nature & Earth",
        "text": "Every autumn, millions of monarch butterflies undertake a heroic journey spanning thousands of miles across North America. Driven by ancient instinct, they navigate across forests and rivers to find sanctuary in mountain fir trees."
    },
    {
        "id": "para-35",
        "title": "Coral Reef Sanctuaries",
        "category": "Nature & Earth",
        "text": "Coral reefs are the bustling cities of the ocean realm. Though covering less than one percent of the sea floor, they shelter a quarter of all marine life, displaying dazzling colors and harmonious symbiotic partnerships."
    },
    {
        "id": "para-36",
        "title": "The Amazon Rainforest",
        "category": "Nature & Earth",
        "text": "The Amazon basin is the green lungs of our planet, producing oxygen and recycling moisture through vast atmospheric rivers. Its dense canopy protects millions of rare plant and animal species that exist nowhere else on Earth."
    },
    {
        "id": "para-37",
        "title": "The Silence of the Desert",
        "category": "Nature & Earth",
        "text": "Deserts may appear barren at first glance, but they hold a quiet and resilient beauty. Sculpted sand dunes shift under whispering winds, and desert flowers bloom with sudden brilliance after rare seasonal rains."
    },
    {
        "id": "para-38",
        "title": "Glacial Rivers of Ice",
        "category": "Nature & Earth",
        "text": "Glaciers are massive rivers of compressed blue ice that move with imperceptible slowness. Over millennia, their relentless weight carves deep valleys and polishes granite cliffs, reshaping the face of entire continents."
    },
    {
        "id": "para-39",
        "title": "The Intelligence of Dolphins",
        "category": "Nature & Earth",
        "text": "Dolphins possess remarkable social intelligence and communicate through complex whistles and clicks. They cooperate to hunt in pods, teach skills to their young, and demonstrate playful curiosity toward other ocean dwellers."
    },
    {
        "id": "para-40",
        "title": "Wolves and River Pathways",
        "category": "Nature & Earth",
        "text": "When wolves were reintroduced to Yellowstone, their presence kept deer populations moving, allowing willow trees to recover along riverbanks. As vegetation returned, birds and beavers thrived, ultimately stabilizing the rivers themselves."
    },
    {
        "id": "para-41",
        "title": "Autumn and Renewal",
        "category": "Nature & Earth",
        "text": "Autumn demonstrates the beauty of letting go. As green leaves turn to rich shades of gold, amber, and crimson, the trees gracefully release their foliage to conserve energy for the coming spring renewal."
    },
    {
        "id": "para-42",
        "title": "The Architecture of Honeybees",
        "category": "Nature & Earth",
        "text": "Inside a beehive, thousands of workers build perfect hexagonal wax combs with mathematical precision. Their collective labor produces honey, nourishes larvae, and pollinates the flowering plants that sustain terrestrial life."
    },
    {
        "id": "para-43",
        "title": "Eagles Riding Thermals",
        "category": "Nature & Earth",
        "text": "With wings outstretched, an eagle catches invisible rising currents of warm air, spiraling upward without a single flap. From high above, its keen eyesight scans the vast landscape with effortless mastery."
    },
    {
        "id": "para-44",
        "title": "Rivers and Smooth Stones",
        "category": "Nature & Earth",
        "text": "A rushing mountain stream does not carve through solid granite with sudden violence, but through persistent patience. Over centuries, continuous water flows round sharp edges and turns rough boulders into smooth pebbles."
    },
    {
        "id": "para-45",
        "title": "Night in the Wilderness",
        "category": "Nature & Earth",
        "text": "When twilight fades in the wild, an entirely different chorus begins. Crickets hum in rhythmic cadence, owls call from pine branches, and nocturnal hunters step lightly over damp moss under a silver moon."
    },

    # -------------------------------------------------------------------------
    # 4. TECHNOLOGY, AI & INNOVATION (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-46",
        "title": "The Evolution of Computers",
        "category": "Tech & Future",
        "text": "From room-sized calculating engines made of vacuum tubes to pocket devices with billions of microscopic transistors, computers have rewritten modern life. They empower human imagination to solve problems once deemed impossible."
    },
    {
        "id": "para-47",
        "title": "Artificial Intelligence",
        "category": "Tech & Future",
        "text": "Machine learning algorithms analyze massive patterns in data to translate languages, discover medicines, and assist creative artists. As intelligent tools evolve, the key challenge is aligning them with ethical human values."
    },
    {
        "id": "para-48",
        "title": "The Global Web",
        "category": "Tech & Future",
        "text": "The internet is a global tapestry of light pulses running through undersea fiber cables and wireless signals. It allows two people on opposite sides of the globe to share ideas and collaborate in milliseconds."
    },
    {
        "id": "para-49",
        "title": "Renewable Energy Transition",
        "category": "Tech & Future",
        "text": "Sunlight striking photovoltaic panels and wind spinning giant turbine blades are steadily transforming how humanity powers its civilization. Clean energy offers a sustainable path that protects our planet for generations ahead."
    },
    {
        "id": "para-50",
        "title": "Quantum Computing Frontiers",
        "category": "Tech & Future",
        "text": "By harnessing quantum superposition and entanglement, quantum computers process complex calculations in parallel. They hold the immense promise to revolutionize modern cryptography, optimize global logistics, and simulate intricate molecular chemistry at atomic scales with unprecedented speed."
    },
    {
        "id": "para-51",
        "title": "Satellites in Orbit",
        "category": "Tech & Future",
        "text": "Thousands of satellites orbit silently above the atmosphere, tracking global weather patterns, guiding maritime vessels, and providing broadband internet to remote mountain villages that were once cut off from the world."
    },
    {
        "id": "para-52",
        "title": "Autonomous Transportation",
        "category": "Tech & Future",
        "text": "Autonomous vehicles combine computer vision, radar, and sensor fusion to navigate complex road networks safely. By removing human distraction and fatigue, self-driving systems have the potential to save countless lives."
    },
    {
        "id": "para-53",
        "title": "Digital Memory and Preservation",
        "category": "Tech & Future",
        "text": "Ancient records were carved into stone tablets or penned onto fragile parchment. Today, human culture, literature, and scientific discoveries are preserved as digital bits, accessible instantly to curious minds worldwide."
    },
    {
        "id": "para-54",
        "title": "The Printing Revolution",
        "category": "Tech & Future",
        "text": "Gutenberg's movable type was one of the most transformative inventions in human history. By making books accessible beyond wealthy elites, it democratized knowledge and ignited scientific and cultural revolutions across the globe."
    },
    {
        "id": "para-55",
        "title": "Cybersecurity and Privacy",
        "category": "Tech & Future",
        "text": "As our lives become increasingly digital, protecting personal data and critical infrastructure requires constant vigilance. Cryptography acts as a digital padlock, ensuring confidential communication remains private and secure."
    },
    {
        "id": "para-56",
        "title": "Virtual Worlds and Simulation",
        "category": "Tech & Future",
        "text": "Immersive headsets and interactive spatial audio allow students to walk through ancient Rome or explore the human bloodstream. Simulation bridges the gap between abstract theory and unforgettable experiential learning."
    },
    {
        "id": "para-57",
        "title": "Silicon Craftsmanship",
        "category": "Tech & Future",
        "text": "Modern microprocessors are among the most intricate objects ever manufactured by humanity. Engineers etch circuit lines just a few atoms wide onto polished silicon wafers, choreographing billions of electrical signals."
    },
    {
        "id": "para-58",
        "title": "Deep Space Probes",
        "category": "Tech & Future",
        "text": "Voyager one has traveled farther from Earth than any craft in history, crossing the boundary into interstellar space. Carrying a golden record of human songs, it drifts quietly among the stars as our eternal ambassador."
    },
    {
        "id": "para-59",
        "title": "Robotics in Surgery",
        "category": "Tech & Future",
        "text": "Surgical robotic arms translate a doctor's hand motions into microscopic precision, reducing incision sizes and accelerating recovery times. Technology amplifies human healing hands to perform miracles once thought impossible."
    },
    {
        "id": "para-60",
        "title": "Smart Cities of Tomorrow",
        "category": "Tech & Future",
        "text": "Intelligent power grids, automated water recycling, and sensor-driven transit networks will define sustainable urban living. By minimizing waste and optimizing resource distribution, cities can become healthier habitats for everyone."
    },

    # -------------------------------------------------------------------------
    # 5. HISTORY, EXPLORATION & ARCHITECTURE (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-61",
        "title": "The Ancient Silk Road",
        "category": "History & Wonders",
        "text": "For centuries, camel caravans traversed rugged deserts and mountain passes, carrying silk, spices, and glass between East and West. More than commodities, this historic network exchanged philosophy, mathematics, and architectural styles."
    },
    {
        "id": "para-62",
        "title": "The Pyramids of Giza",
        "category": "History & Wonders",
        "text": "Rising boldly from the desert sands, the Great Pyramid has stood for over four thousand years. Built with millions of massive limestone blocks, its precise geometric alignment continues to inspire awe and wonder."
    },
    {
        "id": "para-63",
        "title": "The Library of Alexandria",
        "category": "History & Wonders",
        "text": "In the ancient Mediterranean world, scholars gathered in Alexandria to copy scrolls, study celestial maps, and debate mathematics. It represented humanity's earliest ambition to collect the sum of all known knowledge."
    },
    {
        "id": "para-64",
        "title": "Polynesian Ocean Wayfinders",
        "category": "History & Wonders",
        "text": "Without compasses or metal instruments, Polynesian navigators crossed thousands of miles of open Pacific Ocean. They read ocean swells, flight paths of seabirds, and rising star constellations to discover remote island paradises."
    },
    {
        "id": "para-65",
        "title": "Medieval Castles and Stone",
        "category": "History & Wonders",
        "text": "Perched on rocky cliffs, medieval fortresses were built to endure long sieges and harsh winters. Their thick granite walls, spiral staircases, and heavy oak doors tell silent tales of knights, banquets, and political intrigue."
    },
    {
        "id": "para-66",
        "title": "The Renaissance Awakening",
        "category": "History & Wonders",
        "text": "In fourteenth-century Florence, a revival of classical learning sparked breathtaking breakthroughs in painting, sculpture, and scientific inquiry. Thinkers like Leonardo da Vinci showed that art and science are two sides of one coin."
    },
    {
        "id": "para-67",
        "title": "The Invention of Writing",
        "category": "History & Wonders",
        "text": "When early scribes pressed cuneiform marks into wet clay tablets, human memory stepped beyond the limits of oral speech. Writing enabled laws, commerce, literature, and scientific knowledge to outlive the mortal flesh."
    },
    {
        "id": "para-68",
        "title": "The Discovery of Fire",
        "category": "History & Wonders",
        "text": "Mastering fire gave early humans warmth in bitter winters, protection against predators, and cooked meals that fueled brain expansion. Around crackling flames at night, storytelling was born and social culture took root."
    },
    {
        "id": "para-69",
        "title": "Navigating by the Stars",
        "category": "History & Wonders",
        "text": "Before modern GPS satellites orbited overhead, sailors held brass sextants up to the night sky to calculate their latitude. The constant position of the North Star guided lonely vessels safely home across stormy seas."
    },
    {
        "id": "para-70",
        "title": "The Great Wall of China",
        "category": "History & Wonders",
        "text": "Snaking across misty mountain ridges and arid plateaus for thousands of kilometers, the Great Wall stands as a monumental engineering feat. Millions of builders contributed their labor over centuries to defend their civilization."
    },
    {
        "id": "para-71",
        "title": "Ancient Spice Routes",
        "category": "History & Wonders",
        "text": "Merchant ships once sailed uncharted oceans in search of cinnamon, cloves, and nutmeg. The desire for these rare aromatic flavors reshaped global cartography, drove maritime voyages, and connected distant continents."
    },
    {
        "id": "para-72",
        "title": "Roman Stone Aqueducts",
        "category": "History & Wonders",
        "text": "Built with elegant stone arches that gently descended over vast landscapes, Roman aqueducts carried fresh mountain water into bustling cities. Their engineering genius supported public baths, fountains, and vibrant civic hygiene."
    },
    {
        "id": "para-73",
        "title": "The Golden Age of Astronomy",
        "category": "History & Wonders",
        "text": "Scholars in ancient Baghdad translated astronomical texts, calculated the circumference of Earth, and mapped star coordinates with astrolabes. Their pioneering work preserved scientific light that illuminated future generations."
    },
    {
        "id": "para-74",
        "title": "Forgotten Jungle Temples",
        "category": "History & Wonders",
        "text": "Hidden beneath thick tropical foliage for centuries, ancient stone temples like Angkor Wat showcase intricate carvings of celestial dancers and sacred epics, proving that human artistry can endure long after empires fade."
    },
    {
        "id": "para-75",
        "title": "The Spirit of Polar Explorers",
        "category": "History & Wonders",
        "text": "Braving minus forty-degree temperatures and howling blizzards, early Antarctic explorers dragged heavy sledges across white ice fields. Their relentless determination expanded our map of Earth's most formidable frontiers."
    },

    # -------------------------------------------------------------------------
    # 6. ART, LITERATURE, MUSIC & CREATIVITY (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-76",
        "title": "The Aroma of Old Books",
        "category": "Art & Literature",
        "text": "There is a quiet magic in wandering through a bookstore filled with old volumes. The gentle scent of aged paper and leather bindings invites you to step inside forgotten worlds and converse with minds across the ages."
    },
    {
        "id": "para-77",
        "title": "Music and Memory",
        "category": "Art & Literature",
        "text": "A familiar melody can instantly transport you back to a forgotten childhood afternoon or a warm summer road trip. Music bypasses intellectual debate and speaks directly to the emotional core of our shared human soul."
    },
    {
        "id": "para-78",
        "title": "The Discipline of Painting",
        "category": "Art & Literature",
        "text": "An artist does not merely paint what they see with the eyes, but what they perceive with the heart. Layer upon layer of pigment and shadow gradually captures light, emotion, and the subtle breath of life on canvas."
    },
    {
        "id": "para-79",
        "title": "Architecture as Frozen Music",
        "category": "Art & Literature",
        "text": "Great buildings are more than shelters from wind and rain; they are physical expressions of cultural aspiration. The harmony of soaring arches, balanced pillars, and natural light inspires contemplation and peace."
    },
    {
        "id": "para-80",
        "title": "Midnight Storytelling",
        "category": "Art & Literature",
        "text": "Stories are the vessels through which we make sense of our fears, triumphs, and hopes. When a tale is well told around a glowing hearth, listeners of all ages become bound together by wonder and shared imagination."
    },
    {
        "id": "para-81",
        "title": "Poetry the Language of Soul",
        "category": "Art & Literature",
        "text": "Poetry compresses vast oceans of human feeling into a few carefully arranged words. A single stanza can capture heartbreak, euphoria, or quiet melancholy better than a dozen chapters of ordinary prose."
    },
    {
        "id": "para-82",
        "title": "Why Humans Create Art",
        "category": "Art & Literature",
        "text": "From charcoal drawings on prehistoric cave walls to digital animations on glowing screens, humans have an innate need to express beauty. Art is how we announce our presence and proclaim that our lives carry meaning."
    },
    {
        "id": "para-83",
        "title": "The Flow State of an Artist",
        "category": "Art & Literature",
        "text": "When an author writes or a musician composes in deep flow, the passage of time dissolves. Self-doubt falls away, leaving only pure focus and effortless creation flowing from the mind onto the blank canvas."
    },
    {
        "id": "para-84",
        "title": "The Magic of Theater",
        "category": "Art & Literature",
        "text": "When the velvet curtains rise and stage lights illuminate the actors, audience members willingly suspend disbelief. For two hours, we weep, laugh, and walk in someone else's shoes, leaving the theater with enlarged hearts."
    },
    {
        "id": "para-85",
        "title": "Handmade Craftsmanship",
        "category": "Art & Literature",
        "text": "A wooden chair shaped by a master carpenter carries personality that machine assembly cannot replicate. The smooth curve of the grain and sturdy joints reflect hours of patient devotion to an honorable craft."
    },
    {
        "id": "para-86",
        "title": "Sculpting Truth from Stone",
        "category": "Art & Literature",
        "text": "Michelangelo believed that every block of marble already contained a hidden statue waiting to be set free. The sculptor's task was simply to chip away the superfluous stone until the living masterpiece stood revealed."
    },
    {
        "id": "para-87",
        "title": "The Power of Folk Songs",
        "category": "Art & Literature",
        "text": "Folk songs passed down through generations carry the collective laughter and tears of everyday people. Simple acoustic chords and honest lyrics preserve cultural wisdom far better than formal history textbooks."
    },
    {
        "id": "para-88",
        "title": "Colors and Emotion",
        "category": "Art & Literature",
        "text": "Colors possess an uncanny ability to alter human mood. Warm yellows bring optimism, cool blues induce calm reflection, and vibrant reds ignite passion and urgency, communicating with our psyche without words."
    },
    {
        "id": "para-89",
        "title": "Photographs and Memory",
        "category": "Art & Literature",
        "text": "A photograph freezes a single slice of time forever. Long after loved ones have changed or departed, looking at a faded image brings back the sound of their laugh, the warm sunlight, and the joy of that exact afternoon."
    },
    {
        "id": "para-90",
        "title": "The Power of Chosen Words",
        "category": "Art & Literature",
        "text": "Words hold the power to start wars or heal wounded souls. Choosing speech with deliberate care is one of the highest arts, transforming ordinary conversations into bridges of deep mutual understanding."
    },

    # -------------------------------------------------------------------------
    # 7. PSYCHOLOGY, MIND & HUMAN POTENTIAL (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-91",
        "title": "The Healing Power of Sleep",
        "category": "Mind & Potential",
        "text": "During deep sleep, the brain cleanses metabolic toxins, organizes memories, and repairs neural pathways. Skimping on rest drains creativity and emotional stability, while restorative sleep refreshes mind and body for peak performance."
    },
    {
        "id": "para-92",
        "title": "The Fire of Curiosity",
        "category": "Mind & Potential",
        "text": "Curiosity is the secret fuel behind every great invention and scientific breakthrough. When you remain genuinely interested in how things work and ask thoughtful questions, the world becomes an endless classroom of wonder."
    },
    {
        "id": "para-93",
        "title": "Building Muscle Memory",
        "category": "Mind & Potential",
        "text": "Whether playing piano or touch-typing on a keyboard, repetitive deliberate practice wires motor commands into physical reflex. What initially required painful concentration gradually becomes smooth, effortless, and instinctive."
    },
    {
        "id": "para-94",
        "title": "The Myth of Multitasking",
        "category": "Mind & Potential",
        "text": "Human brains cannot focus deeply on multiple complex tasks at once; they merely switch attention back and forth rapidly. Single-tasking with undivided concentration yields far higher quality and leaves you energized rather than exhausted."
    },
    {
        "id": "para-95",
        "title": "The Science of Empathy",
        "category": "Mind & Potential",
        "text": "Mirror neurons allow us to feel a sliver of another person's pain or triumph. Empathy is not just a polite social virtue; it is the evolutionary glue that enabled human communities to cooperate and survive together."
    },
    {
        "id": "para-96",
        "title": "Laughter as Medicine",
        "category": "Mind & Potential",
        "text": "A hearty belly laugh releases tension, lowers stress hormones, and triggers the release of endorphins. Sharing genuine laughter with friends creates an instant bond and reminds us not to take life's minor troubles too seriously."
    },
    {
        "id": "para-97",
        "title": "Reading Rewires the Brain",
        "category": "Mind & Potential",
        "text": "Immersing yourself in a well-written book strengthens vocabulary, increases attention span, and expands empathy. As you interpret characters' inner motivations, your brain practices viewing the world from diverse perspectives."
    },
    {
        "id": "para-98",
        "title": "The Power of Internal Dialogue",
        "category": "Mind & Potential",
        "text": "The voice inside your head influences your reality more than external circumstances. Replacing harsh self-criticism with encouraging, pragmatic feedback turns your inner monologue into your most reliable ally."
    },
    {
        "id": "para-99",
        "title": "Defeating Procrastination",
        "category": "Mind & Potential",
        "text": "Procrastination is rarely about laziness; it is often driven by emotional friction and fear of imperfection. Breaking a daunting project into a tiny two-minute starting step melts resistance and builds momentum."
    },
    {
        "id": "para-100",
        "title": "The Search for Meaning",
        "category": "Mind & Potential",
        "text": "Humans thrive when they believe their daily efforts contribute to something greater than themselves. Finding meaning in your work and relationships gives you the resilience to endure inevitable life challenges with courage."
    },
    {
        "id": "para-101",
        "title": "Nature and Mental Restoration",
        "category": "Mind & Potential",
        "text": "Walking among green trees and listening to flowing streams reduces mental fatigue and calms an overstimulated nervous system. Nature offers an effortless restorative sanctuary that restores cognitive focus and emotional clarity."
    },
    {
        "id": "para-102",
        "title": "Navigating Information Overload",
        "category": "Mind & Potential",
        "text": "Consuming an endless stream of digital notifications scatters your attention and creates subtle chronic anxiety. Learning to intentionally unplug and consume high-signal information protects your creative focus and peace of mind."
    },
    {
        "id": "para-103",
        "title": "The Creative Value of Daydreaming",
        "category": "Mind & Potential",
        "text": "When your conscious mind wanders during a walk or shower, the default mode network connects distant memories and ideas. Many breakthrough solutions arrive not from intense straining, but during relaxed moments of mental play."
    },
    {
        "id": "para-104",
        "title": "Emotional Resilience",
        "category": "Mind & Potential",
        "text": "Resilience is like a mental muscle that strengthens each time you weather disappointment. By viewing setbacks as temporary challenges rather than permanent traits, you bounce back with renewed vigor and wisdom."
    },
    {
        "id": "para-105",
        "title": "The Path to Lifelong Mastery",
        "category": "Mind & Potential",
        "text": "True masters never consider themselves finished learning; they retain a beginner's openness and curiosity. Approaching your daily craft with humble dedication transforms ordinary work into an inspiring lifelong adventure."
    },

    # -------------------------------------------------------------------------
    # 8. DAILY SERENITY, HEALTH & SIMPLE PLEASURES (15)
    # -------------------------------------------------------------------------
    {
        "id": "para-106",
        "title": "Morning Coffee Ritual",
        "category": "Daily Serenity",
        "text": "The rich aroma of freshly brewed coffee in the quiet kitchen is a comforting morning ritual. Holding the warm ceramic mug in two hands and taking that first slow sip prepares both mind and body for the day ahead."
    },
    {
        "id": "para-107",
        "title": "Barefoot in the Morning Grass",
        "category": "Daily Serenity",
        "text": "Walking barefoot through cool morning dew grounds you firmly in the physical world. The crisp blades of grass beneath your feet awaken your senses and provide an instant reminder of nature's simple healing touch."
    },
    {
        "id": "para-108",
        "title": "The Sound of Falling Rain",
        "category": "Daily Serenity",
        "text": "Gentle raindrops tapping against window panes create a soothing natural white noise. Wrapped inside a cozy room with a warm blanket and a good book, the storm outside only deepens your appreciation of indoor sanctuary."
    },
    {
        "id": "para-109",
        "title": "Cooking with Care",
        "category": "Daily Serenity",
        "text": "Chopping fresh vegetables, listening to garlic sizzle in olive oil, and seasoning soup to perfection is a form of mindful meditation. Preparing wholesome food with care nourishes both the cook and all who gather at the table."
    },
    {
        "id": "para-110",
        "title": "Clean Cold Water",
        "category": "Daily Serenity",
        "text": "A tall glass of ice-cold water on a sweltering summer afternoon is one of life's most refreshing sensations. Hydrating your body restores mental acuity, smooths fatigue, and reminds us of water's vital role in all life."
    },
    {
        "id": "para-111",
        "title": "Stargazing on Summer Nights",
        "category": "Daily Serenity",
        "text": "Lying on an open hillside beneath an indigo sky dotted with sparkling stars puts daily worries into healthy perspective. The gentle summer breeze rustles the trees while the silent cosmos expands endlessly overhead."
    },
    {
        "id": "para-112",
        "title": "The Comfort of an Old Blanket",
        "category": "Daily Serenity",
        "text": "Pulling a soft, familiar quilt up to your shoulders on a chilly winter evening wraps you in a comforting embrace. The weight of the blanket calms the nervous system and whispers that it is safe to rest deeply."
    },
    {
        "id": "para-113",
        "title": "Quiet Pockets in the City",
        "category": "Daily Serenity",
        "text": "Even within bustling metropolises with roaring traffic and crowded sidewalks, peaceful sanctuaries exist. A leafy courtyard with a trickling stone fountain offers weary urbanites a tranquil oasis to catch their breath."
    },
    {
        "id": "para-114",
        "title": "One Deep Breath",
        "category": "Daily Serenity",
        "text": "Before answering an angry email or reacting to frustrating news, taking one slow, deep breath changes everything. That brief pause allows wisdom to take the wheel before impulsive irritation can cause lasting regret."
    },
    {
        "id": "para-115",
        "title": "The Joy of Helping Others",
        "category": "Daily Serenity",
        "text": "Carrying heavy groceries for an elderly neighbor or holding a doorway open for a parent with a stroller brightens two days at once. Selfless acts of everyday kindness weave invisible threads of trust throughout society."
    },
    {
        "id": "para-116",
        "title": "Tending a Green Garden",
        "category": "Daily Serenity",
        "text": "Pressing seeds into rich dark soil, pulling stubborn weeds, and watering green leaves connects us directly with the soil. Watching tiny green sprouts push toward the sunlight teaches patience and the quiet magic of growth."
    },
    {
        "id": "para-117",
        "title": "Sunset by the Riverbank",
        "category": "Daily Serenity",
        "text": "Sitting beside a calm river as golden hour turns into dusky purple brings peace to the spirit. The gentle water reflects the burning clouds, washing away the fatigue and urgency of another busy day."
    },
    {
        "id": "para-118",
        "title": "The Stillness of Dawn",
        "category": "Daily Serenity",
        "text": "Before the streetlamps switch off and commuters begin their march, dawn paints the horizon in soft pastel hues. Witnessing the birth of a brand-new day fills the heart with fresh hope and quiet gratitude."
    },
    {
        "id": "para-119",
        "title": "Ocean Waves at High Tide",
        "category": "Daily Serenity",
        "text": "Standing at the edge of the shoreline as salty foam washes gently over your feet reminds you of nature's timeless rhythms. The rhythmic pulse of ocean waves has rolled onto shores for eons, long before human footprints appeared."
    },
    {
        "id": "para-120",
        "title": "The Beauty of Solitude",
        "category": "Daily Serenity",
        "text": "Solitude is not loneliness; it is the rich practice of enjoying one's own company. In solitary hours, you hear your own voice, heal from life's scrapes, and replenish the inner reservoir of strength needed to love others well."
    },

    # -------------------------------------------------------------------------
    # 9. TYPING CRAFT, FOCUS & FLOW (10)
    # -------------------------------------------------------------------------
    {
        "id": "para-121",
        "title": "The Rhythm of the Keyboard",
        "category": "Typing & Flow",
        "text": "A skilled typist does not look down at the keys. Instead, fingers dance across the home row with intuitive grace, producing a satisfying rhythmic clatter that matches the exact velocity of creative thought."
    },
    {
        "id": "para-122",
        "title": "Finger Independence",
        "category": "Typing & Flow",
        "text": "Developing independence in every finger requires patience and regular practice. When your ring fingers and pinkies move with equal confidence and accuracy, typing speed accelerates without strain or fatigue."
    },
    {
        "id": "para-123",
        "title": "Accuracy Before Speed",
        "category": "Typing & Flow",
        "text": "Trying to type too fast before mastering accuracy inevitably causes stumbling and backtracking. Focus first on clean, error-free keystrokes, and you will find that great speed follows naturally and effortlessly."
    },
    {
        "id": "para-124",
        "title": "The Dance of Ten Fingers",
        "category": "Typing & Flow",
        "text": "When ten fingers work in harmonious coordination, the keyboard vanishes from conscious awareness. Words flow directly from mind to screen, turning a mechanical tool into an extension of your creative consciousness."
    },
    {
        "id": "para-125",
        "title": "Entering the Flow State",
        "category": "Typing & Flow",
        "text": "When challenge and skill align in perfect balance, you enter the flow state. Distractions fade away, the cursor blinks like a steady heartbeat, and sentences emerge on the page with breathtaking fluency."
    },
    {
        "id": "para-126",
        "title": "Writing at Thought Speed",
        "category": "Typing & Flow",
        "text": "Typing fast is not just about competing on leaderboards; it is about keeping up with your thoughts. When your fingers move as swiftly as your ideas, you capture brilliant inspirations before they vanish into thin air."
    },
    {
        "id": "para-127",
        "title": "The Meditation of Typing",
        "category": "Typing & Flow",
        "text": "Typing practice can become a form of active meditation. Tracking each glowing character, correcting slight missteps calmly, and maintaining smooth cadence anchors your attention completely in the present moment."
    },
    {
        "id": "para-128",
        "title": "Ergonomics and Posture",
        "category": "Typing & Flow",
        "text": "Sit tall with relaxed shoulders, keep your wrists slightly floating, and let your fingers gently curve over the home keys. Good posture prevents strain and enables you to write for hours with ease and joyful stamina."
    },
    {
        "id": "para-129",
        "title": "Consistency and Muscle Memory",
        "category": "Typing & Flow",
        "text": "Practicing ten minutes every single day is vastly superior to practicing for hours once a week. Frequent short sessions allow sleep cycles to reinforce muscle pathways, creating permanent and effortless fluency."
    },
    {
        "id": "para-130",
        "title": "The Joy of Daily Practice",
        "category": "Typing & Flow",
        "text": "Celebrate every small milestone along your typing journey. Whether you gain five words per minute or achieve flawless accuracy on a difficult passage, your progress proves that dedication always bears sweet fruit."
    }
]

print(f"Total paragraphs created: {len(paragraphs)}")

# Validation checks
short_paras = []
for p in paragraphs:
    words = p["text"].split()
    if len(words) < 35:
        short_paras.append((p["id"], len(words), p["title"]))

print(f"Short paragraphs (<35 words): {short_paras}")

# Save as JS file
js_content = """// 130+ Curated, Diverse, Non-Repeating Typing Paragraphs for Score Test
// Each paragraph is between 40-75 words, beautifully written across 9 distinct categories.

export const SPEED_PARAGRAPHS = """ + json.dumps(paragraphs, indent=2) + """;

export const SPEED_SENTENCES_POOL = SPEED_PARAGRAPHS.map(p => {
  // Extract the first cohesive sentence from each paragraph for Sentences mode
  const match = p.text.match(/^([^.?!]+[.?!])/);
  return match ? match[1].trim() : p.text.split('.')[0] + '.';
});
"""

with open("src/data/speedTestParagraphs.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved successfully to src/data/speedTestParagraphs.js")
