export interface EnneagramResult {
  type: number;
  title: string;
  nickname: string;
  emoji: string;
  description: string;
  coreMotivation: string;
  coreFear: string;
  strengths: string[];
  challenges: string[];
  growthPath: string;
}

export const enneagramResults: Record<number, EnneagramResult> = {
  1: {
    type: 1,
    title: "The Reformer",
    nickname: "The Perfectionist",
    emoji: "⚖️",
    description: "You're the person who actually reads the instructions and color-codes their calendar. You have a strong moral compass and genuinely want to make the world better. While others are winging it, you're over here doing things the RIGHT way. Your integrity is inspiring, even if you're a bit hard on yourself (and okay, maybe others too).",
    coreMotivation: "To be good, balanced, and have integrity",
    coreFear: "Being corrupt, evil, or defective",
    strengths: [
      "You actually have your life together (or at least it looks that way)",
      "People trust you because you're reliable AF",
      "You see what needs fixing before anyone else does",
      "Your standards are high, and you deliver",
      "You're the voice of reason in chaos",
      "You make the world better just by being in it"
    ],
    challenges: [
      "That inner critic is LOUD (like, turn it down a notch)",
      "Perfectionism can lead to procrastination (ironic, right?)",
      "You forget that fun is allowed",
      "Anger? What anger? (Spoiler: it's there)",
      "Rigid thinking can make you miss the gray areas",
      "You take on way too much responsibility"
    ],
    growthPath: "Learn to chill and accept that 'good enough' is actually good enough. Practice self-compassion and remember that mistakes are how humans learn. Let yourself have fun without guilt—you've earned it!"
  },
  2: {
    type: 2,
    title: "The Helper",
    nickname: "The Giver",
    emoji: "❤️",
    description: "You're basically everyone's favorite person. You have a sixth sense for knowing what people need before they even ask. You're the friend who shows up with soup when someone's sick and remembers everyone's birthday. Your warmth is genuine, but real talk—when's the last time you put yourself first?",
    coreMotivation: "To be loved, needed, and appreciated",
    coreFear: "Being unwanted or unworthy of love",
    strengths: [
      "You make people feel seen and loved",
      "Your empathy game is unmatched",
      "You're generous with your time and energy",
      "You create the warmest, coziest vibes",
      "You know exactly what to say to make someone feel better",
      "You're the glue that holds your friend group together"
    ],
    challenges: [
      "You forget you have needs too (seriously, you do)",
      "Boundaries? Never heard of them",
      "You give to get love (even if you don't realize it)",
      "You can get possessive in relationships",
      "Your own feelings get buried under everyone else's",
      "Feeling unappreciated hits HARD"
    ],
    growthPath: "Learn to love yourself as much as you love others. Practice receiving without feeling guilty. Set boundaries—it's not selfish, it's self-care. Remember: you're worthy of love just for existing, not for what you do."
  },
  3: {
    type: 3,
    title: "The Achiever",
    nickname: "The Performer",
    emoji: "🏆",
    description: "You're the person crushing goals while everyone else is still hitting snooze. You're ambitious, confident, and you make things happen. You're basically a walking motivational poster, and people are inspired just watching you work. But here's the thing—who are you when you're not achieving?",
    coreMotivation: "To be valuable, successful, and admired",
    coreFear: "Being worthless or failing",
    strengths: [
      "You get stuff DONE (like, actually done)",
      "You adapt to any situation like a chameleon",
      "Your confidence is contagious",
      "You motivate others just by existing",
      "You're efficient and productive AF",
      "You're a natural leader who makes things happen"
    ],
    challenges: [
      "You ARE your achievements (but you're more than that)",
      "Authenticity vs. performance is a constant battle",
      "Workaholism is real and you're living it",
      "You compete even when there's no competition",
      "Feelings? We don't have time for those",
      "Failure feels like the end of the world"
    ],
    growthPath: "Learn to value yourself for who you are, not what you achieve. Practice being vulnerable and authentic. Slow down and connect with your real feelings. Remember: you're already valuable, even when you're doing nothing."
  },
  4: {
    type: 4,
    title: "The Individualist",
    nickname: "The Romantic",
    emoji: "🎨",
    description: "You're the deep, creative soul who feels everything intensely. You see beauty where others see ordinary, and you're not afraid to explore the full spectrum of human emotion. You're authentic, unique, and probably have great taste in music. But sometimes you get so lost in your feelings that you forget the world is still spinning.",
    coreMotivation: "To be unique, authentic, and understood",
    coreFear: "Having no identity or personal significance",
    strengths: [
      "Your emotional intelligence is off the charts",
      "You create beautiful, meaningful things",
      "You're authentic in a world of fake",
      "You understand pain and can hold space for others",
      "You appreciate beauty and depth",
      "You turn suffering into art"
    ],
    challenges: [
      "You focus on what's missing instead of what's here",
      "Feeling misunderstood is your default setting",
      "Mood swings are real",
      "Envy creeps in when you compare yourself to others",
      "You can get lost in your own world",
      "Ordinary tasks feel impossible"
    ],
    growthPath: "Learn to appreciate what you have instead of longing for what's missing. Practice gratitude daily. Balance your emotional depth with practical engagement. Remember: you're already special, you don't have to prove it."
  },
  5: {
    type: 5,
    title: "The Investigator",
    nickname: "The Observer",
    emoji: "🔍",
    description: "You're the person who knows random facts about everything and actually reads the terms and conditions. You have an insatiable curiosity and a need to understand how things work. You're the quiet genius in the corner, observing everything. But sometimes you forget that life is meant to be lived, not just analyzed.",
    coreMotivation: "To be capable, competent, and knowledgeable",
    coreFear: "Being useless, helpless, or incompetent",
    strengths: [
      "Your brain is basically a supercomputer",
      "You're independent and self-sufficient",
      "You can focus like nobody's business",
      "You solve problems others can't even see",
      "You're objective and unbiased",
      "You're an expert in whatever interests you"
    ],
    challenges: [
      "Emotions? We don't do those here",
      "You isolate yourself way too much",
      "Analysis paralysis is your middle name",
      "Social interaction feels like a foreign language",
      "You hoard your time and energy",
      "Physical and emotional needs get ignored"
    ],
    growthPath: "Learn to engage with your emotions and the physical world. Share your knowledge and connect with others. Trust that you have enough energy to participate in life. Remember: you don't have to know everything to be valuable."
  },
  6: {
    type: 6,
    title: "The Loyalist",
    nickname: "The Skeptic",
    emoji: "🛡️",
    description: "You're the person who thinks of every possible worst-case scenario (and has a backup plan for each one). You're loyal, responsible, and you've got everyone's back. You're the friend who remembers to bring a first aid kit on trips. But your anxiety is exhausting, and sometimes you need to trust that things will be okay.",
    coreMotivation: "To have security, support, and guidance",
    coreFear: "Being without support or guidance",
    strengths: [
      "Your loyalty is unmatched",
      "You're the best troubleshooter around",
      "You're responsible and reliable",
      "You have a strong sense of duty",
      "You're always prepared for anything",
      "You build strong, lasting relationships"
    ],
    challenges: [
      "Anxiety is your constant companion",
      "Trust issues are real",
      "You overthink EVERYTHING",
      "Worst-case scenarios play on repeat",
      "You need constant reassurance",
      "Decision-making feels impossible"
    ],
    growthPath: "Learn to trust yourself and your inner guidance. Practice courage by taking action despite fear. Recognize that security comes from within, not from external sources. Remember: you're stronger than you think."
  },
  7: {
    type: 7,
    title: "The Enthusiast",
    nickname: "The Adventurer",
    emoji: "🎉",
    description: "You're the fun friend who's always down for an adventure. You have an infectious enthusiasm for life and a talent for finding joy everywhere. You're spontaneous, creative, and you make everything more exciting. But sometimes you're running from pain instead of toward joy, and that's exhausting.",
    coreMotivation: "To be happy, satisfied, and avoid pain",
    coreFear: "Being deprived or trapped in pain",
    strengths: [
      "You bring the party wherever you go",
      "Your optimism is contagious",
      "You're creative and innovative",
      "You're spontaneous and adventurous",
      "You can reframe any negative into a positive",
      "You make life fun for everyone around you"
    ],
    challenges: [
      "You avoid difficult emotions like the plague",
      "You overcommit and your focus is scattered",
      "Impulsiveness leads to unfinished projects",
      "Commitment feels like a trap",
      "You escape instead of dealing with problems",
      "Your relationships can stay surface-level"
    ],
    growthPath: "Learn to sit with difficult emotions instead of running. Practice commitment and follow-through. Recognize that depth and meaning come from staying present with challenges. Remember: pain is part of life, and that's okay."
  },
  8: {
    type: 8,
    title: "The Challenger",
    nickname: "The Leader",
    emoji: "💪",
    description: "You're the person who takes charge and makes things happen. You're powerful, decisive, and you protect the people you love fiercely. You don't do anything halfway, and people respect your strength. But your intensity can be overwhelming, and vulnerability feels like weakness (spoiler: it's not).",
    coreMotivation: "To be strong, independent, and in control",
    coreFear: "Being weak, vulnerable, or controlled by others",
    strengths: [
      "You're a natural-born leader",
      "You make decisions and take action",
      "You protect the vulnerable",
      "You're direct and honest (no BS)",
      "You're confident and self-reliant",
      "You handle conflict like a boss"
    ],
    challenges: [
      "Vulnerability feels impossible",
      "You can be controlling and dominating",
      "Your intensity is A LOT",
      "Trust doesn't come easy",
      "You're impatient with weakness",
      "Your communication can be too confrontational"
    ],
    growthPath: "Learn to embrace vulnerability as strength, not weakness. Practice patience and gentleness with yourself and others. Recognize that true power includes the ability to be soft. Remember: you don't have to be strong all the time."
  },
  9: {
    type: 9,
    title: "The Peacemaker",
    nickname: "The Mediator",
    emoji: "☮️",
    description: "You're the chill friend who gets along with everyone. You have a natural ability to see all perspectives and create harmony. Your calm presence is like a warm hug, and you bring people together. But sometimes you're so busy keeping the peace that you forget you have opinions and needs too.",
    coreMotivation: "To have inner peace and harmony",
    coreFear: "Loss, separation, and conflict",
    strengths: [
      "You're the ultimate mediator",
      "You're accepting and non-judgmental",
      "Your calm presence is healing",
      "You see all sides of every situation",
      "You're patient and easygoing",
      "You create harmonious environments"
    ],
    challenges: [
      "Conflict avoidance is your superpower (and your kryptonite)",
      "Passive-aggressive behavior sneaks in",
      "You forget you have needs and opinions",
      "Procrastination is real",
      "You merge with others and lose yourself",
      "You numb out instead of dealing with problems"
    ],
    growthPath: "Learn to assert yourself and express your opinions. Practice engaging with conflict constructively. Recognize that your voice matters and true peace includes honoring yourself. Remember: you're important too."
  }
};
