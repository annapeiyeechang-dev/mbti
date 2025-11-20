type RelationshipType = 'couple' | 'friends' | 'family' | 'coworker' | 'boss';

interface CompatibilityResult {
  score: number;
  summary: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
}

// Compatibility matrix based on MBTI cognitive functions and interaction patterns
const compatibilityScores: Record<string, Record<string, number>> = {
  // INTJ compatibility
  INTJ: { INTJ: 85, INTP: 90, ENTJ: 88, ENTP: 92, INFJ: 95, INFP: 85, ENFJ: 80, ENFP: 88, ISTJ: 75, ISFJ: 65, ESTJ: 70, ESFJ: 60, ISTP: 78, ISFP: 70, ESTP: 72, ESFP: 65 },
  INTP: { INTJ: 90, INTP: 88, ENTJ: 85, ENTP: 95, INFJ: 92, INFP: 88, ENFJ: 82, ENFP: 90, ISTJ: 72, ISFJ: 68, ESTJ: 70, ESFJ: 65, ISTP: 85, ISFP: 75, ESTP: 78, ESFP: 70 },
  ENTJ: { INTJ: 88, INTP: 85, ENTJ: 82, ENTP: 90, INFJ: 85, INFP: 78, ENFJ: 88, ENFP: 85, ISTJ: 80, ISFJ: 70, ESTJ: 85, ESFJ: 72, ISTP: 75, ISFP: 68, ESTP: 82, ESFP: 75 },
  ENTP: { INTJ: 92, INTP: 95, ENTJ: 90, ENTP: 85, INFJ: 90, INFP: 92, ENFJ: 88, ENFP: 90, ISTJ: 70, ISFJ: 65, ESTJ: 72, ESFJ: 68, ISTP: 80, ISFP: 78, ESTP: 85, ESFP: 80 },
  
  // INFJ compatibility
  INFJ: { INTJ: 95, INTP: 92, ENTJ: 85, ENTP: 90, INFJ: 88, INFP: 90, ENFJ: 92, ENFP: 95, ISTJ: 72, ISFJ: 80, ESTJ: 68, ESFJ: 75, ISTP: 70, ISFP: 85, ESTP: 72, ESFP: 78 },
  INFP: { INTJ: 85, INTP: 88, ENTJ: 78, ENTP: 92, INFJ: 90, INFP: 85, ENFJ: 90, ENFP: 92, ISTJ: 68, ISFJ: 78, ESTJ: 65, ESFJ: 72, ISTP: 75, ISFP: 88, ESTP: 70, ESFP: 82 },
  ENFJ: { INTJ: 80, INTP: 82, ENTJ: 88, ENTP: 88, INFJ: 92, INFP: 90, ENFJ: 85, ENFP: 90, ISTJ: 70, ISFJ: 82, ESTJ: 75, ESFJ: 88, ISTP: 68, ISFP: 80, ESTP: 75, ESFP: 85 },
  ENFP: { INTJ: 88, INTP: 90, ENTJ: 85, ENTP: 90, INFJ: 95, INFP: 92, ENFJ: 90, ENFP: 88, ISTJ: 68, ISFJ: 75, ESTJ: 70, ESFJ: 80, ISTP: 72, ISFP: 85, ESTP: 78, ESFP: 88 },
  
  // ISTJ compatibility
  ISTJ: { INTJ: 75, INTP: 72, ENTJ: 80, ENTP: 70, INFJ: 72, INFP: 68, ENFJ: 70, ENFP: 68, ISTJ: 85, ISFJ: 88, ESTJ: 90, ESFJ: 85, ISTP: 80, ISFP: 75, ESTP: 82, ESFP: 78 },
  ISFJ: { INTJ: 65, INTP: 68, ENTJ: 70, ENTP: 65, INFJ: 80, INFP: 78, ENFJ: 82, ENFP: 75, ISTJ: 88, ISFJ: 85, ESTJ: 85, ESFJ: 90, ISTP: 75, ISFP: 82, ESTP: 78, ESFP: 85 },
  ESTJ: { INTJ: 70, INTP: 70, ENTJ: 85, ENTP: 72, INFJ: 68, INFP: 65, ENFJ: 75, ENFP: 70, ISTJ: 90, ISFJ: 85, ESTJ: 88, ESFJ: 85, ISTP: 82, ISFP: 75, ESTP: 88, ESFP: 80 },
  ESFJ: { INTJ: 60, INTP: 65, ENTJ: 72, ENTP: 68, INFJ: 75, INFP: 72, ENFJ: 88, ENFP: 80, ISTJ: 85, ISFJ: 90, ESTJ: 85, ESFJ: 88, ISTP: 75, ISFP: 80, ESTP: 82, ESFP: 90 },
  
  // ISTP compatibility
  ISTP: { INTJ: 78, INTP: 85, ENTJ: 75, ENTP: 80, INFJ: 70, INFP: 75, ENFJ: 68, ENFP: 72, ISTJ: 80, ISFJ: 75, ESTJ: 82, ESFJ: 75, ISTP: 88, ISFP: 85, ESTP: 92, ESFP: 88 },
  ISFP: { INTJ: 70, INTP: 75, ENTJ: 68, ENTP: 78, INFJ: 85, INFP: 88, ENFJ: 80, ENFP: 85, ISTJ: 75, ISFJ: 82, ESTJ: 75, ESFJ: 80, ISTP: 85, ISFP: 88, ESTP: 85, ESFP: 92 },
  ESTP: { INTJ: 72, INTP: 78, ENTJ: 82, ENTP: 85, INFJ: 72, INFP: 70, ENFJ: 75, ENFP: 78, ISTJ: 82, ISFJ: 78, ESTJ: 88, ESFJ: 82, ISTP: 92, ISFP: 85, ESTP: 90, ESFP: 92 },
  ESFP: { INTJ: 65, INTP: 70, ENTJ: 75, ENTP: 80, INFJ: 78, INFP: 82, ENFJ: 85, ENFP: 88, ISTJ: 78, ISFJ: 85, ESTJ: 80, ESFJ: 90, ISTP: 88, ISFP: 92, ESTP: 92, ESFP: 90 }
};

function getBaseCompatibility(type1: string, type2: string): number {
  return compatibilityScores[type1]?.[type2] || 70;
}

function calculateGroupCompatibility(types: string[]): number {
  if (types.length === 2) {
    return getBaseCompatibility(types[0], types[1]);
  }
  
  // For groups, calculate average pairwise compatibility
  let totalScore = 0;
  let pairCount = 0;
  
  for (let i = 0; i < types.length; i++) {
    for (let j = i + 1; j < types.length; j++) {
      totalScore += getBaseCompatibility(types[i], types[j]);
      pairCount++;
    }
  }
  
  return Math.round(totalScore / pairCount);
}

function getRelationshipInsights(types: string[], relationshipType: RelationshipType, score: number): {
  summary: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
} {
  const isHighCompatibility = score >= 85;
  const isMediumCompatibility = score >= 70 && score < 85;
  
  // Analyze cognitive functions
  const hasIntuitives = types.some(t => t.includes('N'));
  const hasSensors = types.some(t => t.includes('S'));
  const hasThinkers = types.some(t => t.includes('T'));
  const hasFeelers = types.some(t => t.includes('F'));
  const hasJudgers = types.some(t => t.includes('J'));
  const hasPerceivers = types.some(t => t.includes('P'));
  const hasIntroverts = types.some(t => t.startsWith('I'));
  const hasExtraverts = types.some(t => t.startsWith('E'));
  
  const insights = {
    couple: {
      summary: isHighCompatibility 
        ? "You two are a match made in heaven! Your personalities complement each other beautifully, creating a balanced and harmonious relationship."
        : isMediumCompatibility
        ? "You have a solid foundation for a great relationship! With understanding and effort, you can build something truly special together."
        : "Your relationship will require extra work and understanding, but different personalities can create exciting dynamics and growth opportunities!",
      strengths: [
        hasIntuitives && hasSensors ? "Balance between big-picture thinking and practical details" : "Shared perspective on life and future",
        hasThinkers && hasFeelers ? "Logical problem-solving meets emotional intelligence" : "Similar approach to decision-making",
        hasJudgers && hasPerceivers ? "Structure meets spontaneity for exciting adventures" : "Aligned lifestyle preferences",
        hasIntroverts && hasExtraverts ? "Perfect balance of social energy and quiet time" : "Shared social preferences",
        "Deep mutual understanding and respect",
        "Strong communication potential"
      ],
      challenges: [
        hasIntuitives && hasSensors ? "May need to bridge abstract vs. concrete thinking styles" : "Could fall into routine patterns",
        hasThinkers && hasFeelers ? "Balancing logic and emotions in conflicts" : "May struggle with expressing different needs",
        hasJudgers && hasPerceivers ? "Finding compromise between planning and spontaneity" : "Potential for stagnation without variety",
        "Different stress responses may cause friction"
      ],
      tips: [
        "Schedule regular date nights to maintain connection",
        "Practice active listening and validate each other's perspectives",
        "Celebrate your differences as strengths, not obstacles",
        "Create shared goals and dreams together",
        "Maintain individual hobbies and friend groups",
        "Learn each other's love languages and use them daily"
      ]
    },
    friends: {
      summary: isHighCompatibility
        ? "You're friendship soulmates! Your personalities click naturally, making for an effortless and fun friendship."
        : isMediumCompatibility
        ? "You make great friends! Your differences add spice to the friendship while your similarities create strong bonds."
        : "Your friendship might take more effort, but diverse friendships often lead to the most personal growth and interesting experiences!",
      strengths: [
        hasIntuitives && hasSensors ? "Great balance of philosophical talks and fun activities" : "Shared interests and conversation styles",
        hasExtraverts ? "Energetic social adventures together" : "Comfortable quiet hangouts",
        hasJudgers && hasPerceivers ? "Mix of planned outings and spontaneous fun" : "Similar approach to making plans",
        "Mutual respect and understanding",
        "Complementary strengths that help each other grow",
        "Shared sense of humor and values"
      ],
      challenges: [
        hasIntuitives && hasSensors ? "Different conversation preferences (abstract vs. concrete)" : "May need to actively seek new experiences",
        hasIntroverts && hasExtraverts ? "Balancing social energy levels" : "Risk of echo chamber without diverse input",
        "Different approaches to conflict resolution",
        "Varying needs for communication frequency"
      ],
      tips: [
        "Try each other's favorite activities to understand their world",
        "Be patient with different social needs and boundaries",
        "Celebrate each other's wins genuinely",
        "Address conflicts directly but kindly",
        "Make time for regular catch-ups",
        "Respect each other's other friendships and relationships"
      ]
    },
    family: {
      summary: isHighCompatibility
        ? "Your family dynamic is naturally harmonious! You understand each other intuitively and create a supportive environment."
        : isMediumCompatibility
        ? "You have a healthy family relationship! Your differences can be strengths when approached with love and understanding."
        : "Your family relationship may face challenges, but with patience and communication, you can build strong bonds and mutual respect.",
      strengths: [
        "Shared family values and traditions",
        hasIntuitives && hasSensors ? "Balanced approach to family planning and spontaneity" : "Similar family lifestyle preferences",
        hasThinkers && hasFeelers ? "Logical problem-solving with emotional support" : "Aligned emotional expression styles",
        "Natural understanding of each other's needs",
        "Complementary roles in family dynamics",
        "Strong foundation for long-term connection"
      ],
      challenges: [
        "Different communication styles may cause misunderstandings",
        hasJudgers && hasPerceivers ? "Conflicts over household organization and routines" : "May need to actively create variety",
        "Varying expectations for family time and involvement",
        "Different approaches to handling family stress"
      ],
      tips: [
        "Establish clear family communication norms",
        "Respect each other's personal space and boundaries",
        "Create family traditions that everyone enjoys",
        "Address issues promptly before they escalate",
        "Appreciate each person's unique contributions",
        "Practice forgiveness and let go of grudges"
      ]
    },
    coworker: {
      summary: isHighCompatibility
        ? "You're an unstoppable team! Your work styles complement each other perfectly, leading to high productivity and job satisfaction."
        : isMediumCompatibility
        ? "You work well together! Your different approaches can lead to innovative solutions when you collaborate effectively."
        : "Your working relationship requires clear communication and defined roles, but diverse work styles can lead to creative breakthroughs!",
      strengths: [
        hasIntuitives && hasSensors ? "Strategic vision meets practical execution" : "Aligned work approach and priorities",
        hasThinkers && hasFeelers ? "Analytical decisions with people-focused implementation" : "Similar decision-making process",
        hasJudgers && hasPerceivers ? "Structured planning with flexible adaptation" : "Shared work style preferences",
        "Complementary skills and perspectives",
        "Mutual professional respect",
        "Effective collaboration potential"
      ],
      challenges: [
        "Different work pace and priorities may clash",
        hasIntuitives && hasSensors ? "Bridging big-picture vs. detail-oriented approaches" : "May miss alternative perspectives",
        hasJudgers && hasPerceivers ? "Tension between deadlines and flexibility" : "Risk of groupthink",
        "Varying communication preferences in meetings"
      ],
      tips: [
        "Establish clear roles and responsibilities upfront",
        "Use project management tools to stay aligned",
        "Schedule regular check-ins to prevent miscommunication",
        "Leverage each other's strengths for better outcomes",
        "Give constructive feedback respectfully",
        "Celebrate team wins together"
      ]
    },
    boss: {
      summary: isHighCompatibility
        ? "This is an ideal boss-employee relationship! Your styles align naturally, creating a productive and satisfying work environment."
        : isMediumCompatibility
        ? "You have a functional working relationship! With clear communication and mutual respect, you can achieve great results together."
        : "This relationship may face challenges, but with clear expectations and open dialogue, you can build a professional and productive dynamic.",
      strengths: [
        hasIntuitives && hasSensors ? "Visionary leadership meets practical execution" : "Aligned work philosophy",
        hasThinkers && hasFeelers ? "Objective feedback with empathetic delivery" : "Similar communication style",
        hasJudgers ? "Clear structure and expectations" : "Flexible and adaptive approach",
        "Mutual professional respect",
        "Clear communication channels",
        "Complementary working styles"
      ],
      challenges: [
        "Different expectations for autonomy vs. guidance",
        hasIntuitives && hasSensors ? "Misalignment on priorities (innovation vs. stability)" : "May lack diverse perspectives",
        hasJudgers && hasPerceivers ? "Tension over deadlines and flexibility" : "Risk of complacency",
        "Varying preferences for feedback frequency and style"
      ],
      tips: [
        "Establish clear expectations and goals from the start",
        "Schedule regular one-on-ones for feedback and alignment",
        "Communicate preferred work and communication styles",
        "Be open about challenges before they become problems",
        "Respect professional boundaries",
        "Focus on results while accommodating different work approaches"
      ]
    }
  };
  
  return insights[relationshipType];
}

export function calculateCompatibility(types: string[], relationshipType: RelationshipType): CompatibilityResult {
  const score = calculateGroupCompatibility(types);
  const insights = getRelationshipInsights(types, relationshipType, score);
  
  return {
    score,
    ...insights
  };
}
