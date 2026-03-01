export const COMMAND_PERSONALITIES = [
  'cash-lick',
  'task-done',
  'neutral',
  // Aquí agregarás 'error', 'loading', etc. en el futuro
] as const; 

export type CommandPersonality = typeof COMMAND_PERSONALITIES[number];