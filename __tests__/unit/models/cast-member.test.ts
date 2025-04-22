import response from './response.json';
import { expect, describe, it } from '@jest/globals';

describe('CastMember Model', () => {
  it('should have characterName and actorName properties', () => {
    const containers = response.containers;
    expect(Array.isArray(containers)).toBe(true);

    const firstContainer = containers[0];
    expect(firstContainer).toHaveProperty('items');

    const firstMovie = firstContainer.items[0];
    expect(firstMovie).toHaveProperty('cast');

    const firstCastMember = firstMovie.cast[0];
    expect(firstCastMember).toHaveProperty('characterName');
    expect(firstCastMember).toHaveProperty('actorName');

    expect(typeof firstCastMember.characterName).toBe('string');
    expect(typeof firstCastMember.actorName).toBe('string');
  });
});
