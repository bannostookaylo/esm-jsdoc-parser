import { it }     from 'node:test';
import { strict as assert } from 'node:assert';
import paramTag    from '../../src/tags/param.mjs';

it('@param handler shapes correctly', () => {
  const raw = {
    tag: 'param',
    name: 'foo',
    type: 'string',
    optional: true,
    description: 'the foo value'
  };
  const out = paramTag(raw);
  assert.equal(out.tag, 'param');
  assert.equal(out.name, 'foo');
  assert.equal(out.type, 'string');
  assert.equal(out.optional, true);
  assert.equal(out.description, 'the foo value');
});