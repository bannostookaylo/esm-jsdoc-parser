/**
 * Handle @param tags
 * raw = { tag:'param', name, type, optional, description }
 * we return whatever shape we want downstream
 */
export default function paramTag(raw) {
    return {
      tag:         'param',
      name:        raw.name,
      type:        raw.type,
      optional:    raw.optional,
      description: raw.description
    };
  }