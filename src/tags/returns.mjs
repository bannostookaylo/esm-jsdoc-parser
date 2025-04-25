/**
 * Handle @returns (or @return) tags
 */
export default function returnsTag(raw) {
    return {
      tag:         'returns',
      type:        raw.type,
      description: raw.description
    };
  }