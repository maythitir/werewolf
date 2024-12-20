import { Player, Role } from '../types/game';

export const getRoleStats = (players: Player[]) => {
  const assignedPlayers = players.filter(p => p.role).length;
  const unassignedPlayers = players.filter(p => !p.role).length;
  const totalPoints = calculateTotalPoints(players);
  const teamPoints = calculateTeamPoints(players);
  
  return {
    totalPlayers: players.length,
    assignedPlayers,
    unassignedPlayers,
    totalPoints,
    teamPoints,
  };
};

export const calculateTotalPoints = (players: Player[]): number => {
  return players.reduce((sum, player) => {
    return sum + (player.role?.points || 0);
  }, 0);
};

export const calculateTeamPoints = (players: Player[]) => {
  return players.reduce((teams, player) => {
    if (player.role) {
      const team = player.role.team;
      teams[team] = (teams[team] || 0) + player.role.points;
    }
    return teams;
  }, {} as Record<string, number>);
};