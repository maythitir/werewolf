import React from 'react';
import { Shuffle } from 'lucide-react';
import { Player, Role } from '../types/game';
import { findOptimalRoleAssignment, validateRoleBalance } from '../utils/roleAssignment';

type RandomizeButtonProps = {
  players: Player[];
  availableRoles: Role[];
  onAssignRoles: (assignments: Map<string, Role>) => void;
};

export default function RandomizeButton({ 
  players, 
  availableRoles, 
  onAssignRoles 
}: RandomizeButtonProps) {
  const handleRandomize = () => {
    if (players.length === 0) {
      alert('Add some players first!');
      return;
    }

    const assignments = findOptimalRoleAssignment(players, availableRoles);
    const { isBalanced, totalPoints, teamCounts } = validateRoleBalance(assignments);

    // Show result message
    const message = `
Roles assigned! 
Total points: ${totalPoints}
Team distribution:
${Object.entries(teamCounts)
  .map(([team, count]) => `${team}: ${count} players`)
  .join('\n')}
    `;
    alert(message);

    onAssignRoles(assignments);
  };

  return (
    <button
      onClick={handleRandomize}
      className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
      title="Randomly assign balanced roles"
    >
      <Shuffle className="w-5 h-5" />
      Randomize Roles
    </button>
  );
}