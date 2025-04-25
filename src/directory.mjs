/**
 * parseDirectory(dir, options)
 *  - dir: root folder to scan
 *  - options: passed to parseFile / parseCode
 * Returns: Promise<{ [relativePath]: JSDocBlocks[] }>
 */
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { parseFile } from './file.mjs';

const JS_EXT = /\.(js|jsx|ts|tsx|mjs)$/;

export async function parseDirectory(dir, options) {
  const result = {};

  async function walk(current) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const e of entries) {
      const fullPath = path.join(current, e.name);
      if (e.isDirectory()) {
        await walk(fullPath);
      } else if (JS_EXT.test(e.name)) {
        const rel = path.relative(dir, fullPath);
        result[rel] = await parseFile(fullPath, options);
      }
    }
  }

  await walk(dir);
  return result;
}