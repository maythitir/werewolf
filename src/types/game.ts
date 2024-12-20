export type Role = {
  name: string;
  description: string;
  team: 'Villager' | 'Werewolf' | 'Only';
  points: number;
};

export type Player = {
  id: string;
  name: string;
  role?: Role;
};

export type GameState = {
  players: Player[];
  availableRoles: Role[];
};