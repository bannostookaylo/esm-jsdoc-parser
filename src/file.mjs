/**
 * parseFile(filePath, options)
 *  - filePath: path to a .js/.ts file on disk
 *  - options: passed down to parseCode
 * Returns: Promise<Array of JSDoc blocks>>
 */
import { readFile } from 'node:fs/promises';
import { parseCode } from './parser.mjs';

export async function parseFile(filePath, options) {
  const source = await readFile(filePath, 'utf8');
  return parseCode(source, options);
}