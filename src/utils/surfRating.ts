export type SurfRating =
  | "Excellent"
  | "Good"
  | "Fair"
  | "Poor";

export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface SurfConditions {
  waveHeight: number;
  windSpeed: number;
}

export interface SurfAssessment {
  rating: SurfRating;
  skill: SkillLevel;
  recommendation: string;
}

export function getSurfAssessment(
  conditions: SurfConditions
): SurfAssessment {
  const { waveHeight, windSpeed } = conditions;

  // Excellent
  if (
    waveHeight >= 1.2 &&
    waveHeight <= 2.0 &&
    windSpeed <= 8
  ) {
    return {
      rating: "Excellent",
      skill: "Intermediate",
      recommendation:
        "Clean surf with ideal conditions for lessons and recreational surfing.",
    };
  }

  // Good
  if (
    waveHeight >= 0.8 &&
    waveHeight < 2.5 &&
    windSpeed <= 12
  ) {
    return {
      rating: "Good",
      skill:
        waveHeight < 1.5
          ? "Beginner"
          : "Intermediate",
      recommendation:
        "Good surfing conditions with manageable waves.",
    };
  }

  // Fair
  if (
    waveHeight >= 0.5 &&
    waveHeight < 3
  ) {
    return {
      rating: "Fair",
      skill: "Intermediate",
      recommendation:
        "Surfable conditions, but expect changing wave quality.",
    };
  }

  // Poor
  return {
    rating: "Poor",
    skill:
      waveHeight >= 3
        ? "Advanced"
        : "Beginner",
    recommendation:
      "Conditions are not ideal. Consider waiting for better surf.",
  };
      }
