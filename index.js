#!/usr/bin/env node
import { unified } from 'unified';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkGFM from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeDocument from 'rehype-document';
import { program } from 'commander';
import { readFile, writeFile } from 'fs/promises';
import { urlToHttpOptions } from 'url';

program.option('-o, --out <string>');
program.parse();

const proc = unified()
  .use(remarkParse)
  .use(remarkGFM)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeDocument, { css: ['katex/styles/katex.css'] })
  .use(rehypeStringify);

const files = [];
for (const path of program.args) {
  files.push(readFile(path, 'utf-8'));
}

const awaitedFiles = await Promise.all(files);
const strings = awaitedFiles.join('\n\n');
const result = String(await proc.process(strings));

if (program.opts().out) {
  await writeFile(program.opts().out, result);
} else {
  console.log(result);
}
