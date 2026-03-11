/**
 * Available command icon personalities.
 */
export const COMMAND_PERSONALITIES = [
  'cash-lick',
  'task-done',
  'neutral',
] as const;

/**
 * Type representing valid command personalities.
 */
export type CommandPersonality = typeof COMMAND_PERSONALITIES[number];