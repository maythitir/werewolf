import { useState } from 'react';
import { Player, Role } from '../types/game';
import { defaultRoles } from '../data/roles';

export function useGameState() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [availableRoles] = useState<Role[]>(defaultRoles);

  const handleAddPlayer = (name: string) => {
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name,
    };
    setPlayers([...players, newPlayer]);
  };

  const handleRemovePlayer = (id: string) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const handleAssignRole = (playerId: string, role: Role) => {
    setPlayers(players.map(player =>
      player.id === playerId ? { ...player, role } : player
    ));
  };

  const handleRandomizeRoles = (assignments: Map<string, Role>) => {
    setPlayers(players.map(player => ({
      ...player,
      role: assignments.get(player.id)
    })));
  };

  return {
    players,
    availableRoles,
    handleAddPlayer,
    handleRemovePlayer,
    handleAssignRole,
    handleRandomizeRoles,
  };
}