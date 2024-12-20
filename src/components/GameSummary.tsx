import React from 'react';
import { Player } from '../types/game';
import { getRoleStats } from '../utils/roleUtils';
import { ClipboardList, Scale } from 'lucide-react';

type GameSummaryProps = {
  players: Player[];
};

export default function GameSummary({ players }: GameSummaryProps) {
  const { totalPlayers, assignedPlayers, unassignedPlayers, totalPoints, teamPoints } = getRoleStats(players);

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <ClipboardList className="w-5 h-5 text-gray-600" />
        <h2 className="text-xl font-semibold">Game Summary</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Players</h3>
          <p>Total Players: {totalPlayers}</p>
          <p>Assigned Roles: {assignedPlayers}</p>
          <p>Unassigned Players: {unassignedPlayers}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-gray-600" />
            <h3 className="font-semibold text-gray-700">Points</h3>
          </div>
          <p>Total Points: {totalPoints}</p>
          {Object.entries(teamPoints).map(([team, points]) => (
            <p key={team}>
              {team} Points: {points}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}