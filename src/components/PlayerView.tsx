import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Player, Role } from '../types/game';

interface PlayerViewProps {
  players: Player[];
}

export default function PlayerView({ players }: PlayerViewProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');
  const [showRole, setShowRole] = useState(false);

  const player = players.find(p => p.id === selectedPlayer);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Player View</h2>
      
      <select
        value={selectedPlayer}
        onChange={(e) => {
          setSelectedPlayer(e.target.value);
          setShowRole(false);
        }}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Select your name</option>
        {players.map((player) => (
          <option key={player.id} value={player.id}>
            {player.name}
          </option>
        ))}
      </select>

      {player && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{player.name}</h3>
            <button
              onClick={() => setShowRole(!showRole)}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
            >
              {showRole ? <EyeOff size={20} /> : <Eye size={20} />}
              {showRole ? 'Hide Role' : 'Show Role'}
            </button>
          </div>
          
          {showRole && (
            <div className="mt-4">
              {player.role ? (
                <div>
                  <p className="text-lg font-medium">{player.role.name}</p>
                  <p className="text-gray-600">Points: {player.role.points}</p>
                  {player.role.description && (
                    <p className="mt-2 text-gray-700">{player.role.description}</p>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">No role assigned yet</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}