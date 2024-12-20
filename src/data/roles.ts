import { Role } from '../types/game';

export const defaultRoles: Role[] = [
  {
    name: 'Werewolf',
    description: 'Kill one villager each night',
    team: 'Werewolf',
    points: -6
  },
  {
    name: 'Alpha Werewolf',
    description: 'Leader of the werewolves with enhanced abilities',
    team: 'Werewolf',
    points: -9
  },
  {
    name: 'Lone Wolf',
    description: 'Only win if the last player',
    team: 'Werewolf',
    points: -5
  }, 
  {
    name: 'Wolf Cub',
    description: 'If u die, werewolf kill 2',
    team: 'Werewolf',
    points: -8
  },
  {
    name: 'Sorceress',
    description: 'look for seer',
    team: 'Werewolf',
    points: -3
  },
  {
    name: 'Minion',
    description: 'know werewolf but werewolf cant know/ werewolf can kill u',
    team: 'Werewolf',
    points: -3
  },
  {
    name: 'Tanner',
    description: 'Only win if eliminated/people must think u re werewolf',
    team: 'Only',
    points: -2
  }
  ,
  {
    name: 'Cult Leader',
    description: 'choos one people per night join your cult/ win when you cult > rest people',
    team: 'Only',
    points: 1
  },
  {
    name: 'Hoodlum',
    description: 'choose 2 peple to eliminate to win',
    team: 'Only',
    points: 0
  },
  {
    name: 'Witch',
    description: 'Has one healing potion and one poison potion',
    team: 'Villager',
    points: 4
  },
  {
    name: 'Mad Bomber',
    description: 'if u eliminaed/bring 2 people both left and right',
    team: 'Villager',
    points: -2
  }
  ,
  {
    name: 'Ghost',
    description: 'if u die/ u can signal',
    team: 'Villager',
    points: 2
  }
    ,
  {
    name: 'Cupid',
    description: 'choose 2 pleple to lover/ if one die,another will',
    team: 'Villager',
    points: -3
  }
   ,
  {
    name: 'Revealer',
    description: 'each night can choose one/if one is werewolf that one will eliminated/if not, u are eliminated',
    team: 'Villager',
    points: 4
  }
  ,
  {
    name: 'Idiot',
    description: 'only vote eliminated',
    team: 'Villager',
    points:2
  } ,
  {
    name: 'Aura Seer',
    description: 'look for people that not both werewolf or villager',
    team: 'Villager',
    points:3
  },
  {
    name: 'Mystic Seer',
    description: 'know exact role in each night',
    team: 'Villager',
    points:9
  },
  {
    name: 'Mentalist',
    description: 'each night point 2 player check if they in same team or not',
    team: 'Villager',
    points:6
  },
  {
    name: 'SpellCaster',
    description: 'each night choose player to cant speak',
    team: 'Villager',
    points:1
  },
  {
    name: 'Prince',
    description: 'if u re vote eliminated,revealed and stay',
    team: 'Villager',
    points:3
  },
  {
    name: 'Bodyguard',
    description: 'protect people',
    team: 'Villager',
    points:3
  },
  {
    name: 'Hunter',
    description: 'if u re eliminated, eliminate another',
    team: 'Villager',
    points:3
  },
  {
    name: 'Lycan',
    description: 'seer see u as werewolf',
    team: 'Villager',
    points:-1
  },
  {
    name: 'PI',
    description: 'one night per game/choose people to tell that one are werewoldf or nit',
    team: 'Villager',
    points:3
  },
  {
    name: 'Apparentic Seer',
    description: 'if seer eliminated/u become seer',
    team: 'Villager',
    points:4
  },
  {
    name: 'Diseased',
    description: 'elimited by werewolf/next day werewolf can not kill',
    team: 'Villager',
    points:3
  },
  {
    name: 'Mayor',
    description: 'vote count twice',
    team: 'Villager',
    points:2
  },
  {
    name: 'Old hag',
    description: 'each night choose player to leave the village',
    team: 'Villager',
    points:1
  },
  {
    name: 'tough guy',
    description: 'werewolf kill u, u will die next day',
    team: 'Villager',
    points:3
  }
  ,
  {
    name: 'Seer',
    description: 'know player that village or werewolf',
    team: 'Villager',
    points:7
  } ,
  {
    name: 'Huntress',
    description: 'eliminate player in night once per game',
    team: 'Villager',
    points:3
  },
  {
    name: 'Doppelganger',
    description: 'choose player to take their role when they die',
    team: 'Villager',
    points:-2
  },
  {
    name: 'Cursed',
    description: 'u re village until werewolf kill u',
    team: 'Villager',
    points:-3
  }
];