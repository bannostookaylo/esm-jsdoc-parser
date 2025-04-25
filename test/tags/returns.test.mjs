import { it }     from 'node:test';
import { strict as assert } from 'node:assert';
import returnsTag  from '../../src/tags/returns.mjs';

it('@returns handler shapes correctly', () => {
  const raw = {
    tag: 'returns',
    type: 'number',
    description: 'the result'
  };
  const out = returnsTag(raw);
  assert.equal(out.tag, 'returns');
  assert.equal(out.type, 'number');
  assert.equal(out.description, 'the result');
});