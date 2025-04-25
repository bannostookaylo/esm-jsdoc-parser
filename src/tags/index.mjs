// imports each handler
import paramHandler   from './param.mjs';
import returnsHandler from './returns.mjs';
import exampleHandler from './example.mjs';

/**
 * A lookup table of handlers by tag name
 */
const handlers = {
  param:   paramHandler,
  returns: returnsHandler,
  example: exampleHandler
};

/**
 * processTags(rawTags)
 *  - rawTags: array of { tag, name, type, optional, description }
 *  - returns: array of processed tag objects
 */
export function processTags(rawTags) {
  return rawTags.map(raw => {
    const fn = handlers[raw.tag] || defaultHandler;
    return fn(raw);
  });
}

/**
 * defaultHandler: keeps the raw shape if no specific handler
 */
function defaultHandler(raw) {
  return { ...raw };
}