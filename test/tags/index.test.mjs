import { it }     from 'node:test';
import { strict as assert } from 'node:assert';
import { processTags } from '../../src/tags/index.mjs';

it('dispatches to correct handlers', () => {
  const rawTags = [
    { tag:'param', name:'x', type:'number', optional:false, description:'x val' },
    { tag:'returns', type:'void', description:'none' },
    { tag:'example', description:'demo()' }
  ];
  const processed = processTags(rawTags);

  assert.equal(processed[0].tag, 'param');
  assert.equal(processed[1].tag, 'returns');
  assert.equal(processed[2].tag, 'example');
});