import React from 'react';
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
    <div className="space-y-4">
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