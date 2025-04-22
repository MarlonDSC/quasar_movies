import response from './response.json';
import { expect, describe, it } from '@jest/globals';

describe('Classification Model', () => {
  it('should have id, name, and description properties', () => {
    const containers = response.containers;
    expect(Array.isArray(containers)).toBe(true); 

    const firstContainer = containers[0];
    expect(firstContainer).toHaveProperty('items');

    const firstMovie = firstContainer.items[0];
    expect(firstMovie).toHaveProperty('classification');

    const firstClassification = firstMovie.classification;
    expect(firstClassification).toHaveProperty('rating');
    expect(firstClassification).toHaveProperty('advisoryContent');

    expect(typeof firstClassification.rating).toBe('string');
    expect(Array.isArray(firstClassification.advisoryContent)).toBe(true);
  });
});


