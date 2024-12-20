import { Player, Role } from '../types/game';

export function findOptimalRoleAssignment(players: Player[], availableRoles: Role[]): Map<string, Role> {
  const assignments = new Map<string, Role>();
  const playerIds = players.map(p => p.id);
  let bestAssignment: Map<string, Role> = new Map();
  let bestScore = Infinity;

  // Try multiple random assignments to find the most balanced one
  for (let attempt = 0; attempt < 100; attempt++) {
    const currentAssignment = generateRandomAssignment(playerIds, availableRoles);
    const totalPoints = calculateAssignmentPoints(currentAssignment);
    const score = Math.abs(totalPoints); // How far from 0

    if (score < bestScore) {
      bestScore = score;
      bestAssignment = new Map(currentAssignment);
    }

    // If we found a perfect balance, stop searching
    if (score === 0) break;
  }

  return bestAssignment;
}

function generateRandomAssignment(playerIds: string[], roles: Role[]): Map<string, Role> {
  const assignments = new Map<string, Role>();
  const availableRoles = [...roles];
  const shuffledPlayerIds = [...playerIds].sort(() => Math.random() - 0.5);

  shuffledPlayerIds.forEach(playerId => {
    if (availableRoles.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableRoles.length);
      const role = availableRoles[randomIndex];
      assignments.set(playerId, role);
    }
  });

  return assignments;
}

function calculateAssignmentPoints(assignments: Map<string, Role>): number {
  return Array.from(assignments.values()).reduce((sum, role) => sum + role.points, 0);
}

export function validateRoleBalance(assignments: Map<string, Role>): {
  isBalanced: boolean;
  totalPoints: number;
  teamCounts: Record<string, number>;
} {
  const totalPoints = calculateAssignmentPoints(assignments);
  const teamCounts: Record<string, number> = {};

  assignments.forEach(role => {
    teamCounts[role.team] = (teamCounts[role.team] || 0) + 1;
  });

  // Consider balanced if total points are close to 0 (-2 to 2 range)
  const isBalanced = Math.abs(totalPoints) <= 2;

  return {
    isBalanced,
    totalPoints,
    teamCounts
  };
}