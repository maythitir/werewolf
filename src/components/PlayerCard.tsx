import React from 'react';
import { UserCircle, Trash2 } from 'lucide-react';
import { Player, Role } from '../types/game';

type PlayerCardProps = {
  player: Player;
  availableRoles: Role[];
  onRemovePlayer: (id: string) => void;
  onAssignRole: (playerId: string, role: Role) => void;
};

export default function PlayerCard({ 
  player, 
  availableRoles, 
  onRemovePlayer, 
  onAssignRole 
}: PlayerCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <UserCircle className="w-5 h-5 text-gray-500" />
        <span className="font-medium">{player.name}</span>
        {player.role && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              ({player.role.name})
            </span>
            <span className={`text-sm font-medium ${
              player.role.points > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {player.role.points > 0 ? '+' : ''}{player.role.points}
            </span>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <select
          className="px-3 py-2 border rounded-md bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
          value={player.role?.name || ''}
          onChange={(e) => {
            const role = availableRoles.find(r => r.name === e.target.value);
            if (role) onAssignRole(player.id, role);
          }}
        >
          <option value="">Assign Role</option>
          {availableRoles.map((role) => (
            <option key={role.name} value={role.name}>
              {role.name} ({role.points > 0 ? '+' : ''}{role.points})
            </option>
          ))}
        </select>
        
        <button
          onClick={() => onRemovePlayer(player.id)}
          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
          title="Remove player"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}