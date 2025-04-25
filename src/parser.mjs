
import { parse as babelParse } from '@babel/parser';
import { processTags } from './tags/index.mjs';

import commentParser from 'comment-parser';

/**
 * parseCode(source, options)
 *  - runs Babel to grab comment blocks
 *  - parses each block with comment-parser
 *  - hands off tag array to our tag‐module orchestrator
 */
export function parseCode(
  source,
  {
    babelPlugins    = ['typescript', 'jsx'],
    babelSourceType = 'module'
  } = {}
) {
  const ast = babelParse(source, {
    sourceType:  babelSourceType,
    plugins:     babelPlugins,
    ranges:      true,
    comments:    true
  });

  const blocks = (ast.comments || [])
    .filter(c => c.type === 'CommentBlock' && c.value.startsWith('*'))
    .map(c => {
      const raw = `/*${c.value}*/`;
      const parsed = commentParser(raw)[0] || { description: '', tags: [] };

      return {
        description: parsed.description.trim(),
        tags:        processTags(parsed.tags),
        source:      raw,
        loc:         { start: c.start, end: c.end }
      };
    });

  return blocks;
}