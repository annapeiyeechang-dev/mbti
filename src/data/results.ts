import { PersonalityResult } from '../types/quiz';

export const personalityResults: Record<string, PersonalityResult> = {
  INTJ: {
    type: 'INTJ',
    title: 'The Mastermind Architect',
    description: "You're a strategic thinker with a natural gift for planning and innovation. You see patterns others miss and always have a plan B (and C, and D...).",
    strengths: ['Strategic thinking', 'Independent', 'Determined', 'Innovative'],
    weaknesses: ['Can be overly critical', 'Sometimes dismissive of emotions', 'Perfectionist tendencies'],
    careers: ['Software Engineer', 'Scientist', 'Strategist', 'Architect'],
    emoji: '🧠',
    color: 'from-purple-500 to-indigo-600',
    funFact: "You probably have a 10-year plan... and a backup plan for that plan!"
  },
  INTP: {
    type: 'INTP',
    title: 'The Logical Philosopher',
    description: "You're an innovative thinker who loves exploring theories and abstract concepts. Your mind is like a Swiss Army knife of ideas!",
    strengths: ['Analytical', 'Creative problem-solver', 'Open-minded', 'Objective'],
    weaknesses: ['Can overthink', 'May neglect practical matters', 'Socially reserved'],
    careers: ['Researcher', 'Programmer', 'Philosopher', 'Mathematician'],
    emoji: '🤔',
    color: 'from-blue-500 to-cyan-600',
    funFact: "You've probably spent hours in Wikipedia rabbit holes at 3 AM!"
  },
  ENTJ: {
    type: 'ENTJ',
    title: 'The Commander Leader',
    description: "You're a natural-born leader with a gift for strategy and organization. When you walk into a room, things get done!",
    strengths: ['Leadership', 'Strategic', 'Confident', 'Efficient'],
    weaknesses: ['Can be domineering', 'Impatient', 'Stubborn'],
    careers: ['CEO', 'Entrepreneur', 'Manager', 'Lawyer'],
    emoji: '👑',
    color: 'from-red-500 to-orange-600',
    funFact: "You've probably reorganized your friend group's plans more than once!"
  },
  ENTP: {
    type: 'ENTP',
    title: 'The Visionary Debater',
    description: "You're a quick-witted innovator who loves intellectual challenges and playing devil's advocate. Life is one big brainstorming session!",
    strengths: ['Innovative', 'Enthusiastic', 'Quick thinker', 'Charismatic'],
    weaknesses: ['Can be argumentative', 'Difficulty following through', 'Insensitive at times'],
    careers: ['Entrepreneur', 'Inventor', 'Marketing Specialist', 'Consultant'],
    emoji: '💡',
    color: 'from-yellow-500 to-orange-600',
    funFact: "You could debate about literally anything... and probably have!"
  },
  INFJ: {
    type: 'INFJ',
    title: 'The Mystical Counselor',
    description: "You're a rare gem with deep insights into human nature. You're the friend everyone comes to for advice and understanding.",
    strengths: ['Insightful', 'Idealistic', 'Compassionate', 'Creative'],
    weaknesses: ['Perfectionist', 'Can be too private', 'Sensitive to criticism'],
    careers: ['Counselor', 'Writer', 'Psychologist', 'Teacher'],
    emoji: '🌟',
    color: 'from-teal-500 to-green-600',
    funFact: "You're the rarest personality type - only 1-2% of the population!"
  },
  INFP: {
    type: 'INFP',
    title: 'The Dreamy Idealist',
    description: "You're a creative soul with strong values and a rich inner world. You see beauty and meaning where others see ordinary.",
    strengths: ['Empathetic', 'Creative', 'Passionate', 'Open-minded'],
    weaknesses: ['Overly idealistic', 'Can be impractical', 'Takes things personally'],
    careers: ['Writer', 'Artist', 'Counselor', 'Designer'],
    emoji: '🎨',
    color: 'from-pink-500 to-purple-600',
    funFact: "You probably have 10 unfinished creative projects right now!"
  },
  ENFJ: {
    type: 'ENFJ',
    title: 'The Charismatic Mentor',
    description: "You're a natural teacher and motivator who brings out the best in others. Your enthusiasm is absolutely contagious!",
    strengths: ['Charismatic', 'Altruistic', 'Natural leader', 'Reliable'],
    weaknesses: ['Overly idealistic', 'Too selfless', 'Can be manipulative'],
    careers: ['Teacher', 'HR Manager', 'Coach', 'Politician'],
    emoji: '✨',
    color: 'from-green-500 to-emerald-600',
    funFact: "You're basically everyone's personal cheerleader and life coach!"
  },
  ENFP: {
    type: 'ENFP',
    title: 'The Enthusiastic Champion',
    description: "You're a free spirit bursting with creativity and enthusiasm. Life is an adventure, and you're here for all of it!",
    strengths: ['Enthusiastic', 'Creative', 'Sociable', 'Energetic'],
    weaknesses: ['Can be unfocused', 'Overthinks', 'Gets stressed easily'],
    careers: ['Actor', 'Entrepreneur', 'Journalist', 'Social Worker'],
    emoji: '🎉',
    color: 'from-orange-500 to-pink-600',
    funFact: "You have 47 hobbies and counting... and you're passionate about all of them!"
  },
  ISTJ: {
    type: 'ISTJ',
    title: 'The Reliable Inspector',
    description: "You're the backbone of society - dependable, organized, and detail-oriented. If something needs to be done right, you're the person!",
    strengths: ['Responsible', 'Organized', 'Practical', 'Honest'],
    weaknesses: ['Can be inflexible', 'Judgmental', 'Insensitive'],
    careers: ['Accountant', 'Administrator', 'Military Officer', 'Auditor'],
    emoji: '📋',
    color: 'from-slate-500 to-gray-600',
    funFact: "Your to-do lists have to-do lists, and they're color-coded!"
  },
  ISFJ: {
    type: 'ISFJ',
    title: 'The Nurturing Protector',
    description: "You're a warm-hearted guardian who remembers everyone's birthday and favorite snack. The world needs more people like you!",
    strengths: ['Supportive', 'Reliable', 'Patient', 'Practical'],
    weaknesses: ['Too selfless', 'Reluctant to change', 'Takes things personally'],
    careers: ['Nurse', 'Teacher', 'Social Worker', 'Librarian'],
    emoji: '🤗',
    color: 'from-rose-500 to-pink-600',
    funFact: "You remember details about people that they've forgotten about themselves!"
  },
  ESTJ: {
    type: 'ESTJ',
    title: 'The Executive Director',
    description: "You're a natural organizer who gets things done efficiently. You're the person who actually reads the instruction manual!",
    strengths: ['Organized', 'Practical', 'Honest', 'Dedicated'],
    weaknesses: ['Inflexible', 'Judgmental', 'Uncomfortable with unconventional'],
    careers: ['Manager', 'Judge', 'Police Officer', 'Business Administrator'],
    emoji: '📊',
    color: 'from-blue-600 to-indigo-700',
    funFact: "You've probably created a spreadsheet for something unusual this week!"
  },
  ESFJ: {
    type: 'ESFJ',
    title: 'The Caring Provider',
    description: "You're the social glue that holds groups together. You remember everyone's coffee order and make sure no one feels left out!",
    strengths: ['Caring', 'Social', 'Organized', 'Loyal'],
    weaknesses: ['Needs approval', 'Inflexible', 'Reluctant to innovate'],
    careers: ['Event Coordinator', 'Nurse', 'Teacher', 'PR Specialist'],
    emoji: '💝',
    color: 'from-pink-600 to-rose-700',
    funFact: "You're the friend who organizes all the group hangouts and remembers everyone's allergies!"
  },
  ISTP: {
    type: 'ISTP',
    title: 'The Virtuoso Craftsperson',
    description: "You're a hands-on problem solver who loves taking things apart to see how they work. You're basically a real-life MacGyver!",
    strengths: ['Practical', 'Flexible', 'Logical', 'Spontaneous'],
    weaknesses: ['Private', 'Insensitive', 'Risk-prone'],
    careers: ['Mechanic', 'Engineer', 'Pilot', 'Forensic Scientist'],
    emoji: '🔧',
    color: 'from-amber-500 to-yellow-600',
    funFact: "You can fix almost anything with duct tape and creative thinking!"
  },
  ISFP: {
    type: 'ISFP',
    title: 'The Adventurous Artist',
    description: "You're a gentle free spirit who lives in the moment and appreciates beauty in all forms. You make the world more colorful!",
    strengths: ['Artistic', 'Passionate', 'Curious', 'Charming'],
    weaknesses: ['Unpredictable', 'Overly competitive', 'Easily stressed'],
    careers: ['Artist', 'Musician', 'Designer', 'Chef'],
    emoji: '🎭',
    color: 'from-violet-500 to-purple-600',
    funFact: "You probably have an aesthetic for everything, including your grocery shopping!"
  },
  ESTP: {
    type: 'ESTP',
    title: 'The Energetic Entrepreneur',
    description: "You're a bold risk-taker who lives for excitement and action. Life's too short to be boring, and you make sure it never is!",
    strengths: ['Energetic', 'Perceptive', 'Direct', 'Sociable'],
    weaknesses: ['Impatient', 'Risk-prone', 'Unstructured'],
    careers: ['Entrepreneur', 'Sales Rep', 'Paramedic', 'Marketing Director'],
    emoji: '⚡',
    color: 'from-red-600 to-orange-700',
    funFact: "You've probably tried every extreme sport at least once!"
  },
  ESFP: {
    type: 'ESFP',
    title: 'The Entertaining Performer',
    description: "You're the life of the party with infectious energy and spontaneity. When you're around, everyone's having a good time!",
    strengths: ['Enthusiastic', 'Friendly', 'Spontaneous', 'Practical'],
    weaknesses: ['Easily bored', 'Poor long-term planning', 'Sensitive to criticism'],
    careers: ['Entertainer', 'Event Planner', 'Flight Attendant', 'Tour Guide'],
    emoji: '🎪',
    color: 'from-fuchsia-500 to-pink-600',
    funFact: "You turn mundane activities into parties - grocery shopping has never been so fun!"
  }
};
