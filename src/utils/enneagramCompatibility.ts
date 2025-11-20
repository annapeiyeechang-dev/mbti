type RelationshipType = 'couple' | 'friends' | 'family' | 'coworker' | 'boss';

interface CompatibilityResult {
  score: number;
  summary: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
}

// Enneagram compatibility matrix based on core motivations, fears, and interaction patterns
const enneagramCompatibilityScores: Record<number, Record<number, number>> = {
  1: { 1: 75, 2: 85, 3: 70, 4: 65, 5: 72, 6: 80, 7: 68, 8: 75, 9: 88 },
  2: { 1: 85, 2: 70, 3: 82, 4: 88, 5: 65, 6: 78, 7: 85, 8: 90, 9: 80 },
  3: { 1: 70, 2: 82, 3: 75, 4: 68, 5: 72, 6: 75, 7: 88, 8: 85, 9: 78 },
  4: { 1: 65, 2: 88, 3: 68, 4: 72, 5: 85, 6: 70, 7: 75, 8: 80, 9: 90 },
  5: { 1: 72, 2: 65, 3: 72, 4: 85, 5: 78, 6: 75, 7: 82, 8: 70, 9: 88 },
  6: { 1: 80, 2: 78, 3: 75, 4: 70, 5: 75, 6: 72, 7: 80, 8: 85, 9: 90 },
  7: { 1: 68, 2: 85, 3: 88, 4: 75, 5: 82, 6: 80, 7: 75, 8: 82, 9: 85 },
  8: { 1: 75, 2: 90, 3: 85, 4: 80, 5: 70, 6: 85, 7: 82, 8: 78, 9: 92 },
  9: { 1: 88, 2: 80, 3: 78, 4: 90, 5: 88, 6: 90, 7: 85, 8: 92, 9: 80 }
};

function getBaseCompatibility(type1: number, type2: number): number {
  return enneagramCompatibilityScores[type1]?.[type2] || 70;
}

function calculateGroupCompatibility(types: number[]): number {
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

function getRelationshipInsights(types: number[], relationshipType: RelationshipType, score: number): {
  summary: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
} {
  const isHighCompatibility = score >= 85;
  const isMediumCompatibility = score >= 70 && score < 85;
  
  // Analyze type patterns
  const hasReformers = types.includes(1);
  const hasHelpers = types.includes(2);
  const hasAchievers = types.includes(3);
  const hasIndividualists = types.includes(4);
  const hasInvestigators = types.includes(5);
  const hasLoyalists = types.includes(6);
  const hasEnthusiasts = types.includes(7);
  const hasChallengers = types.includes(8);
  const hasPeacemakers = types.includes(9);
  
  // Identify core patterns
  const hasHeartTypes = hasHelpers || hasAchievers || hasIndividualists; // 2, 3, 4
  const hasHeadTypes = hasInvestigators || hasLoyalists || hasEnthusiasts; // 5, 6, 7
  const hasBodyTypes = hasReformers || hasChallengers || hasPeacemakers; // 8, 9, 1
  
  const insights = {
    couple: {
      summary: isHighCompatibility 
        ? "Your Enneagram types create a beautiful, complementary dynamic! Your core motivations align in ways that foster deep understanding and mutual growth."
        : isMediumCompatibility
        ? "You have a solid foundation for a meaningful relationship! Your different motivations can create balance when approached with awareness and compassion."
        : "Your relationship will require conscious effort and understanding, but your differences can lead to profound personal growth and transformation!",
      strengths: [
        hasHeartTypes && hasHeadTypes ? "Emotional depth meets thoughtful analysis" : "Shared approach to processing life",
        hasBodyTypes && hasHeartTypes ? "Instinctive action balanced with emotional awareness" : "Aligned energy and motivation",
        hasReformers || hasLoyalists ? "Strong commitment and reliability" : "Flexible and adaptive partnership",
        hasHelpers || hasPeacemakers ? "Natural empathy and harmony-seeking" : "Direct and authentic communication",
        "Complementary strengths that support each other's growth",
        "Shared values create strong foundation"
      ],
      challenges: [
        hasReformers && hasEnthusiasts ? "Balancing structure with spontaneity" : "Different pacing in life",
        hasChallengers && hasPeacemakers ? "Navigating intensity vs. conflict avoidance" : "Communication style differences",
        hasIndividualists && hasAchievers ? "Authenticity vs. image management tensions" : "Different emotional expression styles",
        "Core fears may trigger each other's stress patterns"
      ],
      tips: [
        "Learn each other's core motivations and fears deeply",
        "Support each other's growth paths, not just comfort zones",
        "Practice recognizing when you're in stress vs. growth mode",
        "Create rituals that honor both your needs",
        "Use conflicts as opportunities to understand deeper patterns",
        "Celebrate how your differences make you stronger together"
      ]
    },
    friends: {
      summary: isHighCompatibility
        ? "You're natural friendship soulmates! Your Enneagram types complement each other beautifully, creating an effortless and enriching bond."
        : isMediumCompatibility
        ? "You make wonderful friends! Your different perspectives add depth to the friendship while your core values align."
        : "Your friendship requires understanding and patience, but diverse Enneagram types often create the most transformative friendships!",
      strengths: [
        hasEnthusiasts || hasAchievers ? "Fun, energetic adventures together" : "Deep, meaningful conversations",
        hasHelpers || hasPeacemakers ? "Supportive and nurturing dynamic" : "Honest and direct friendship",
        hasInvestigators || hasIndividualists ? "Intellectual and creative stimulation" : "Practical and grounded connection",
        "Mutual respect for each other's unique perspectives",
        "Growth-oriented friendship that challenges you both",
        "Authentic acceptance of each other's true selves"
      ],
      challenges: [
        hasReformers && hasEnthusiasts ? "Different ideas about responsibility and fun" : "Varying social energy levels",
        hasChallengers && hasLoyalists ? "Intensity vs. caution in decision-making" : "Different conflict styles",
        "Stress patterns may clash during difficult times",
        "Different needs for emotional expression and processing"
      ],
      tips: [
        "Honor each other's core needs without judgment",
        "Be patient with different stress responses",
        "Share your growth journeys and support each other",
        "Don't take personality differences personally",
        "Create space for both depth and lightness",
        "Appreciate how you help each other see blind spots"
      ]
    },
    family: {
      summary: isHighCompatibility
        ? "Your family dynamic is naturally harmonious! Your Enneagram types create a balanced and supportive family environment."
        : isMediumCompatibility
        ? "You have a healthy family relationship! Understanding each other's core motivations can deepen your family bonds."
        : "Your family relationship may face challenges, but awareness of Enneagram patterns can transform family dynamics!",
      strengths: [
        "Complementary roles in family system",
        hasHelpers || hasPeacemakers ? "Nurturing and harmonious atmosphere" : "Clear boundaries and expectations",
        hasReformers || hasLoyalists ? "Strong family values and traditions" : "Flexible and adaptive family culture",
        "Natural understanding of each other's needs",
        "Diverse perspectives enrich family life",
        "Shared commitment to family wellbeing"
      ],
      challenges: [
        "Childhood patterns may trigger old wounds",
        hasChallengers && hasPeacemakers ? "Power dynamics and conflict avoidance" : "Different communication preferences",
        "Stress patterns can create family tension",
        "Varying expectations for family involvement"
      ],
      tips: [
        "Recognize how family roles relate to Enneagram types",
        "Practice compassion for each other's core fears",
        "Create family rituals that honor everyone's needs",
        "Address conflicts with awareness of type patterns",
        "Support each other's individual growth paths",
        "Use Enneagram knowledge to heal family dynamics"
      ]
    },
    coworker: {
      summary: isHighCompatibility
        ? "You're an excellent work team! Your Enneagram types create a productive and balanced working relationship."
        : isMediumCompatibility
        ? "You work well together! Your different motivations can lead to innovative solutions when you collaborate effectively."
        : "Your working relationship requires clear communication, but diverse Enneagram types can create breakthrough results!",
      strengths: [
        hasAchievers || hasChallengers ? "Results-driven and goal-oriented" : "Process-focused and thorough",
        hasInvestigators || hasReformers ? "Analytical and detail-oriented" : "Big-picture and strategic thinking",
        hasHelpers || hasPeacemakers ? "Collaborative and team-focused" : "Independent and self-directed",
        "Complementary work styles and strengths",
        "Diverse problem-solving approaches",
        "Mutual professional respect"
      ],
      challenges: [
        hasReformers && hasEnthusiasts ? "Perfectionism vs. spontaneity in projects" : "Different work pacing",
        hasChallengers && hasLoyalists ? "Decisiveness vs. caution in decisions" : "Varying risk tolerance",
        "Stress patterns affect work performance differently",
        "Different needs for structure vs. flexibility"
      ],
      tips: [
        "Understand each other's work motivations and fears",
        "Leverage complementary strengths for better outcomes",
        "Communicate clearly about expectations and deadlines",
        "Respect different work styles and approaches",
        "Address conflicts professionally with type awareness",
        "Support each other during high-stress periods"
      ]
    },
    boss: {
      summary: isHighCompatibility
        ? "This is an ideal boss-employee dynamic! Your Enneagram types create a productive and mutually respectful relationship."
        : isMediumCompatibility
        ? "You have a functional working relationship! Understanding each other's core motivations can enhance collaboration."
        : "This relationship may face challenges, but Enneagram awareness can transform the boss-employee dynamic!",
      strengths: [
        hasChallengers || hasAchievers ? "Clear direction and high performance" : "Supportive and developmental approach",
        hasReformers || hasLoyalists ? "Structured and reliable expectations" : "Flexible and adaptive management",
        hasHelpers || hasPeacemakers ? "Empathetic and people-focused" : "Direct and results-oriented",
        "Complementary leadership and work styles",
        "Clear communication channels",
        "Mutual professional growth"
      ],
      challenges: [
        hasChallengers && hasPeacemakers ? "Intensity vs. conflict avoidance" : "Different communication styles",
        hasReformers && hasEnthusiasts ? "High standards vs. creative freedom" : "Varying work approaches",
        "Power dynamics may trigger core fears",
        "Different needs for autonomy vs. guidance"
      ],
      tips: [
        "Establish clear expectations aligned with motivations",
        "Provide feedback that respects type sensitivities",
        "Create growth opportunities suited to each type",
        "Address conflicts with awareness of type patterns",
        "Balance structure with flexibility based on needs",
        "Foster mutual respect and professional development"
      ]
    }
  };
  
  return insights[relationshipType];
}

export function calculateEnneagramCompatibility(types: number[], relationshipType: RelationshipType): CompatibilityResult {
  const score = calculateGroupCompatibility(types);
  const insights = getRelationshipInsights(types, relationshipType, score);
  
  return {
    score,
    ...insights
  };
}
