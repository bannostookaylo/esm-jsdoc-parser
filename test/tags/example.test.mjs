import { it }      from 'node:test';
import { strict as assert } from 'node:assert';
import exampleTag  from '../../src/tags/example.mjs';

it('@example handler shapes correctly', () => {
  const raw = {
    tag: 'example',
    name: '',
    type: '',
    optional: false,
    description: 'foo();'
  };
  const out = exampleTag(raw);
  assert.equal(out.tag, 'example');
  assert.equal(out.code, 'foo();');
});