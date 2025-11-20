export interface EnneagramQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    scores: Record<number, number>;
  }[];
}

export const enneagramQuestions: EnneagramQuestion[] = [
  {
    id: 1,
    text: "When something goes wrong, my first instinct is to...",
    options: [
      { text: "Figure out the 'right' way to fix it", scores: { 1: 3, 6: 1 } },
      { text: "See who needs help or support", scores: { 2: 3, 9: 1 } },
      { text: "Jump into action mode and solve it", scores: { 3: 3, 8: 1 } },
      { text: "Feel it deeply and process the emotions", scores: { 4: 3, 7: 1 } },
      { text: "Step back and analyze what happened", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 2,
    text: "People would say my superpower is...",
    options: [
      { text: "Always knowing the right thing to do", scores: { 1: 3, 6: 1 } },
      { text: "Making everyone feel loved and seen", scores: { 2: 3, 9: 1 } },
      { text: "Getting stuff done like a boss", scores: { 3: 3, 8: 1 } },
      { text: "Being real and emotionally deep", scores: { 4: 3, 2: 1 } },
      { text: "Knowing random facts about everything", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 3,
    text: "I feel most alive when...",
    options: [
      { text: "Everything is organized and running smoothly", scores: { 1: 3, 6: 1 } },
      { text: "I'm making someone's day better", scores: { 2: 3, 9: 1 } },
      { text: "I'm crushing my goals", scores: { 3: 3, 8: 1 } },
      { text: "I'm creating something meaningful", scores: { 4: 3, 7: 1 } },
      { text: "I'm learning something mind-blowing", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 4,
    text: "When I'm stressed, I tend to...",
    options: [
      { text: "Get extra critical and nitpicky", scores: { 1: 3, 6: 1 } },
      { text: "Over-give until I'm exhausted", scores: { 2: 3, 9: 1 } },
      { text: "Work even harder (hello burnout)", scores: { 3: 3, 8: 1 } },
      { text: "Retreat into my feelings", scores: { 4: 3, 5: 1 } },
      { text: "Disappear into my own world", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 5,
    text: "My friends describe me as...",
    options: [
      { text: "The responsible one who has it together", scores: { 1: 3, 6: 1 } },
      { text: "The caring friend who's always there", scores: { 2: 3, 9: 1 } },
      { text: "The ambitious go-getter", scores: { 3: 3, 8: 1 } },
      { text: "The creative soul with big feelings", scores: { 4: 3, 7: 1 } },
      { text: "The quiet genius in the corner", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 6,
    text: "Deep down, what drives me is...",
    options: [
      { text: "Being a good person and doing things right", scores: { 1: 3, 6: 1 } },
      { text: "Being loved and needed by others", scores: { 2: 3, 9: 1 } },
      { text: "Being successful and admired", scores: { 3: 3, 8: 1 } },
      { text: "Being authentic and special", scores: { 4: 3, 2: 1 } },
      { text: "Being smart and capable", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 7,
    text: "My biggest fear is...",
    options: [
      { text: "Being wrong or making mistakes", scores: { 1: 3, 6: 1 } },
      { text: "Being unloved or rejected", scores: { 2: 3, 4: 1 } },
      { text: "Being seen as a failure", scores: { 3: 3, 8: 1 } },
      { text: "Being ordinary or invisible", scores: { 4: 3, 2: 1 } },
      { text: "Being clueless or incompetent", scores: { 5: 3, 6: 1 } }
    ]
  },
  {
    id: 8,
    text: "In relationships, I'm the one who...",
    options: [
      { text: "Has high standards (for myself and others)", scores: { 1: 3, 6: 1 } },
      { text: "Puts everyone else's needs first", scores: { 2: 3, 9: 1 } },
      { text: "Wants to look like the power couple", scores: { 3: 3, 8: 1 } },
      { text: "Craves deep, soulmate-level connection", scores: { 4: 3, 2: 1 } },
      { text: "Needs lots of alone time to recharge", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 9,
    text: "When there's drama, I...",
    options: [
      { text: "Stand my ground on what's right", scores: { 1: 3, 8: 1 } },
      { text: "Try to make peace and smooth things over", scores: { 2: 3, 9: 2 } },
      { text: "Focus on finding a practical solution", scores: { 3: 3, 1: 1 } },
      { text: "Feel ALL the feelings intensely", scores: { 4: 3, 8: 1 } },
      { text: "Nope out and think about it later", scores: { 5: 3, 9: 1 } }
    ]
  },
  {
    id: 10,
    text: "I'm naturally drawn to...",
    options: [
      { text: "Systems, order, and doing things properly", scores: { 1: 3, 6: 1 } },
      { text: "Helping people and making them happy", scores: { 2: 3, 9: 1 } },
      { text: "Winning, achieving, and leveling up", scores: { 3: 3, 8: 1 } },
      { text: "Art, beauty, and deep meaning", scores: { 4: 3, 7: 1 } },
      { text: "Knowledge, research, and understanding", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 11,
    text: "When making decisions, I ask myself...",
    options: [
      { text: "What's the right thing to do?", scores: { 1: 3, 6: 1 } },
      { text: "How will this affect the people I love?", scores: { 2: 3, 9: 1 } },
      { text: "Will this help me succeed?", scores: { 3: 3, 8: 1 } },
      { text: "Does this feel authentic to who I am?", scores: { 4: 3, 2: 1 } },
      { text: "What does the data say?", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 12,
    text: "My struggle is...",
    options: [
      { text: "Being way too hard on myself (and others)", scores: { 1: 3, 6: 1 } },
      { text: "Forgetting I have needs too", scores: { 2: 3, 9: 1 } },
      { text: "Working myself to death", scores: { 3: 3, 8: 1 } },
      { text: "Getting stuck in sad feelings", scores: { 4: 3, 5: 1 } },
      { text: "Living in my head instead of real life", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 13,
    text: "My perfect day includes...",
    options: [
      { text: "Checking everything off my to-do list", scores: { 1: 3, 3: 1 } },
      { text: "Quality time with my favorite people", scores: { 2: 3, 9: 1 } },
      { text: "Making progress on my big goals", scores: { 3: 3, 8: 1 } },
      { text: "Creating something beautiful or meaningful", scores: { 4: 3, 7: 1 } },
      { text: "Going down a Wikipedia rabbit hole", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 14,
    text: "I get anxious when...",
    options: [
      { text: "Things are messy or wrong", scores: { 1: 3, 6: 1 } },
      { text: "People don't appreciate me", scores: { 2: 3, 4: 1 } },
      { text: "I'm not making progress", scores: { 3: 3, 8: 1 } },
      { text: "I feel disconnected from myself", scores: { 4: 3, 2: 1 } },
      { text: "I'm unprepared or overwhelmed", scores: { 5: 3, 6: 1 } }
    ]
  },
  {
    id: 15,
    text: "My communication style is...",
    options: [
      { text: "Direct and to the point", scores: { 1: 3, 8: 1 } },
      { text: "Warm and encouraging", scores: { 2: 3, 9: 1 } },
      { text: "Confident and persuasive", scores: { 3: 3, 8: 1 } },
      { text: "Expressive and emotional", scores: { 4: 3, 2: 1 } },
      { text: "Thoughtful and precise", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 16,
    text: "I'm most comfortable when...",
    options: [
      { text: "Everything has its place", scores: { 1: 3, 6: 1 } },
      { text: "Everyone around me is happy", scores: { 2: 3, 9: 2 } },
      { text: "I'm winning at life", scores: { 3: 3, 8: 1 } },
      { text: "I can be my weird, authentic self", scores: { 4: 3, 7: 1 } },
      { text: "I have time to think and process", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 17,
    text: "At my best, I'm...",
    options: [
      { text: "Wise, accepting, and chill", scores: { 1: 3, 9: 1 } },
      { text: "Genuinely loving without expecting anything back", scores: { 2: 3, 4: 1 } },
      { text: "Authentic and inspiring AF", scores: { 3: 3, 6: 1 } },
      { text: "Creative and emotionally honest", scores: { 4: 3, 1: 1 } },
      { text: "A visionary genius", scores: { 5: 3, 8: 1 } }
    ]
  },
  {
    id: 18,
    text: "I avoid...",
    options: [
      { text: "Anger and imperfection", scores: { 1: 3, 6: 1 } },
      { text: "Admitting I need help", scores: { 2: 3, 9: 1 } },
      { text: "Looking like a failure", scores: { 3: 3, 8: 1 } },
      { text: "Being basic or ordinary", scores: { 4: 3, 2: 1 } },
      { text: "Emotional chaos", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 19,
    text: "My energy goes toward...",
    options: [
      { text: "Making things better and more perfect", scores: { 1: 3, 3: 1 } },
      { text: "Taking care of everyone", scores: { 2: 3, 9: 1 } },
      { text: "Achieving and succeeding", scores: { 3: 3, 8: 1 } },
      { text: "Understanding myself on a deep level", scores: { 4: 3, 5: 1 } },
      { text: "Learning all the things", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 20,
    text: "I need to work on...",
    options: [
      { text: "Chilling out and not judging everything", scores: { 1: 3, 6: 1 } },
      { text: "Setting boundaries (what are those?)", scores: { 2: 3, 9: 1 } },
      { text: "Being real instead of performing", scores: { 3: 3, 8: 1 } },
      { text: "Not dwelling on what I don't have", scores: { 4: 3, 5: 1 } },
      { text: "Actually engaging with the world", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 21,
    text: "In group settings, I...",
    options: [
      { text: "Make sure things are done correctly", scores: { 1: 3, 6: 1 } },
      { text: "Check in on everyone's vibes", scores: { 2: 3, 9: 2 } },
      { text: "Take charge and lead", scores: { 3: 3, 8: 2 } },
      { text: "Bring the creative, unique energy", scores: { 4: 3, 7: 1 } },
      { text: "Observe from the sidelines", scores: { 5: 3, 9: 1 } }
    ]
  },
  {
    id: 22,
    text: "What matters most to me is...",
    options: [
      { text: "Integrity and doing the right thing", scores: { 1: 3, 6: 1 } },
      { text: "Love and connection", scores: { 2: 3, 9: 1 } },
      { text: "Success and achievement", scores: { 3: 3, 8: 1 } },
      { text: "Authenticity and depth", scores: { 4: 3, 2: 1 } },
      { text: "Knowledge and competence", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 23,
    text: "When things go sideways, I...",
    options: [
      { text: "Analyze what should've been done differently", scores: { 1: 3, 6: 1 } },
      { text: "Worry about how it affects everyone", scores: { 2: 3, 9: 1 } },
      { text: "Fix it ASAP", scores: { 3: 3, 8: 1 } },
      { text: "Take it personally and feel it deeply", scores: { 4: 3, 2: 1 } },
      { text: "Retreat to figure it out alone", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 24,
    text: "My nightmare scenario is...",
    options: [
      { text: "Being corrupt or morally wrong", scores: { 1: 3, 6: 1 } },
      { text: "Being unloved or abandoned", scores: { 2: 3, 4: 1 } },
      { text: "Being worthless or a failure", scores: { 3: 3, 8: 1 } },
      { text: "Having no identity or being forgotten", scores: { 4: 3, 2: 1 } },
      { text: "Being useless or incompetent", scores: { 5: 3, 6: 1 } }
    ]
  },
  {
    id: 25,
    text: "I get energized by...",
    options: [
      { text: "Improving things and making them better", scores: { 1: 3, 3: 1 } },
      { text: "Being needed and helpful", scores: { 2: 3, 9: 1 } },
      { text: "Crushing goals and winning", scores: { 3: 3, 8: 1 } },
      { text: "Creative self-expression", scores: { 4: 3, 7: 1 } },
      { text: "Deep thinking and learning", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 26,
    text: "My blind spot is...",
    options: [
      { text: "My own anger (what anger?)", scores: { 1: 3, 6: 1 } },
      { text: "My own needs and feelings", scores: { 2: 3, 9: 1 } },
      { text: "My real feelings vs. my image", scores: { 3: 3, 8: 1 } },
      { text: "The good stuff in life", scores: { 4: 3, 5: 1 } },
      { text: "My emotional needs", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 27,
    text: "I'm attracted to...",
    options: [
      { text: "Excellence and quality", scores: { 1: 3, 3: 1 } },
      { text: "Warmth and genuine connection", scores: { 2: 3, 9: 1 } },
      { text: "Success and status", scores: { 3: 3, 8: 1 } },
      { text: "Depth and authenticity", scores: { 4: 3, 2: 1 } },
      { text: "Intelligence and expertise", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 28,
    text: "When I'm relaxed, I...",
    options: [
      { text: "Can actually be spontaneous and fun", scores: { 1: 3, 7: 1 } },
      { text: "Focus on my own needs for once", scores: { 2: 3, 4: 1 } },
      { text: "Can drop the performance and be real", scores: { 3: 3, 6: 1 } },
      { text: "Feel more balanced and grounded", scores: { 4: 3, 1: 1 } },
      { text: "Actually engage with people", scores: { 5: 3, 8: 1 } }
    ]
  },
  {
    id: 29,
    text: "What I bring to others is...",
    options: [
      { text: "Integrity and wisdom", scores: { 1: 3, 9: 1 } },
      { text: "Care and support", scores: { 2: 3, 4: 1 } },
      { text: "Motivation and inspiration", scores: { 3: 3, 6: 1 } },
      { text: "Depth and creativity", scores: { 4: 3, 1: 1 } },
      { text: "Insight and knowledge", scores: { 5: 3, 8: 1 } }
    ]
  },
  {
    id: 30,
    text: "I'm working toward...",
    options: [
      { text: "Being more accepting and less judgmental", scores: { 1: 3, 9: 1 } },
      { text: "Loving myself as much as I love others", scores: { 2: 3, 4: 1 } },
      { text: "Being authentic, not just successful", scores: { 3: 3, 6: 1 } },
      { text: "Finding balance and contentment", scores: { 4: 3, 1: 1 } },
      { text: "Connecting with my heart", scores: { 5: 3, 8: 1 } }
    ]
  },
  {
    id: 31,
    text: "I strongly believe in...",
    options: [
      { text: "Doing the right thing, always", scores: { 1: 3, 6: 1 } },
      { text: "The power of love and kindness", scores: { 2: 3, 9: 1 } },
      { text: "Hard work and achievement", scores: { 3: 3, 8: 1 } },
      { text: "Being true to yourself", scores: { 4: 3, 7: 1 } },
      { text: "The importance of understanding", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 32,
    text: "My inner critic says...",
    options: [
      { text: "You must be perfect", scores: { 1: 3, 6: 1 } },
      { text: "You must be needed", scores: { 2: 3, 9: 1 } },
      { text: "You must be successful", scores: { 3: 3, 8: 1 } },
      { text: "You must be special", scores: { 4: 3, 2: 1 } },
      { text: "You must be competent", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 33,
    text: "I'm learning to...",
    options: [
      { text: "Accept that 'good enough' is actually good enough", scores: { 1: 3, 9: 1 } },
      { text: "Receive as well as give", scores: { 2: 3, 4: 1 } },
      { text: "Value being over doing", scores: { 3: 3, 6: 1 } },
      { text: "Appreciate what I have", scores: { 4: 3, 1: 1 } },
      { text: "Trust my feelings", scores: { 5: 3, 8: 1 } }
    ]
  },
  {
    id: 34,
    text: "My defense mechanism is...",
    options: [
      { text: "Being overly good and proper", scores: { 1: 3, 6: 1 } },
      { text: "Ignoring my own needs", scores: { 2: 3, 9: 1 } },
      { text: "Becoming my role/image", scores: { 3: 3, 8: 1 } },
      { text: "Taking everything personally", scores: { 4: 3, 5: 1 } },
      { text: "Detaching from feelings", scores: { 5: 3, 4: 1 } }
    ]
  },
  {
    id: 35,
    text: "At my core, I want to be...",
    options: [
      { text: "Good and right", scores: { 1: 3, 6: 1 } },
      { text: "Loved and appreciated", scores: { 2: 3, 9: 1 } },
      { text: "Valuable and admired", scores: { 3: 3, 8: 1 } },
      { text: "Unique and understood", scores: { 4: 3, 2: 1 } },
      { text: "Capable and knowledgeable", scores: { 5: 3, 1: 1 } }
    ]
  },
  {
    id: 36,
    text: "My life lesson is about...",
    options: [
      { text: "Accepting reality as it is", scores: { 1: 3, 9: 1 } },
      { text: "Recognizing my own worth", scores: { 2: 3, 4: 1 } },
      { text: "Being authentic vs. performing", scores: { 3: 3, 6: 1 } },
      { text: "Finding contentment", scores: { 4: 3, 1: 1 } },
      { text: "Engaging with life fully", scores: { 5: 3, 8: 1 } }
    ]
  }
];
