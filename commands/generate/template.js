const camelcase = require('lodash.camelcase');
const fs = require('fs');
const path = require('path');
const { getArgs } = require('../../utils/args');

const args = getArgs({
  alias: {
    o: 'output-dir',
  },
  default: {
    outputDir: process.cwd(),
  },
});

const CODE_SNIPPET_FILENAME = 'template.mjml';

module.exports = function generateTemplate() {
  const newTemplateName = args._[2];

  if (!newTemplateName) {
    console.error('Error: No codeSnippet name supplied.');
  }

  const formattedNewTemplateName = camelcase(newTemplateName);
  const codeSnippet = fs.readFileSync(path.resolve(__dirname, CODE_SNIPPET_FILENAME));
  const codeSnippetFileType = CODE_SNIPPET_FILENAME.split('.').slice(-1)[0];
  const outputDir = resolveOutputDir();
  const outputFilename = `${formattedNewTemplateName}.${codeSnippetFileType}`;
  const outputFilePath = path.join(outputDir, outputFilename);
  fs.writeFileSync(outputFilePath, codeSnippet);
};

function resolveOutputDir() {
  const dir = args.o || args.outputDir;
  return path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir);
}
