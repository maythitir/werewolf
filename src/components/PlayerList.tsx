import { Player, Role } from '../types/game';
import PlayerCard from './PlayerCard';

type PlayerListProps = {
  players: Player[];
  onRemovePlayer: (id: string) => void;
  onAssignRole: (playerId: string, role: Role) => void;
  availableRoles: Role[];
};

export default function PlayerList({ 
  players, 
  onRemovePlayer, 
  onAssignRole, 
  availableRoles 
}: PlayerListProps) {
  if (players.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No players added yet
      </div>
    );
  }

  return (
    <div className="max-h-64 overflow-y-auto space-y-4 border rounded-lg p-4 bg-white shadow-sm">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          availableRoles={availableRoles}
          onRemovePlayer={onRemovePlayer}
          onAssignRole={onAssignRole}
        />
      ))}
    </div>
  );
}
