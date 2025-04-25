import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { parseCode } from '../src/parser.mjs';

describe('parseCode()', () => {
  const sample = `
    /**
     * Adds two numbers.
     * @param {number} a - first
     * @param {number} b - second
     * @returns {number} sum
     * @example
     * add(1,2)
     */
    export function add(a, b) { return a + b; }
  `;

  it('finds exactly one JSDoc block', () => {
    const blocks = parseCode(sample);
    assert.equal(blocks.length, 1);
  });

  it('captures description text', () => {
    const [blk] = parseCode(sample);
    assert.ok(blk.description.includes('Adds two numbers.'));
  });

  it('parses tags via processTags()', () => {
    const [blk] = parseCode(sample);
    const tags = blk.tags.map(t => t.tag).sort();
    assert.deepEqual(tags, ['example', 'param', 'param', 'returns']);
  });

  it('preserves raw source and loc', () => {
    const [blk] = parseCode(sample);
    assert.ok(blk.source.startsWith('/**'));
    assert.ok(typeof blk.loc.start === 'number');
    assert.ok(typeof blk.loc.end   === 'number');
  });
});