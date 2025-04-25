/**
 * Handle @example tags
 */
export default function exampleTag(raw) {
    return {
      tag:         'example',
      code:        raw.description,  // we treat the description field as code
    };
  }