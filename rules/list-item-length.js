import {lintRule} from 'unified-lint-rule';
import {visit} from 'unist-util-visit';

const MAX_LENGTH = 150;

/**
 * Check if a list item starts with a link (awesome list entry format).
 */
function startsWithLink(listItem) {
  const paragraph = listItem.children?.[0];
  if (!paragraph || paragraph.type !== 'paragraph') return false;

  const firstChild = paragraph.children?.[0];
  return firstChild?.type === 'link';
}

/**
 * Get the raw source length of a list item from its position in the file.
 */
function getSourceLength(listItem, file) {
  const start = listItem.position?.start;
  const end = listItem.position?.end;
  if (!start || !end) return 0;

  const lines = file.toString().split('\n');
  const line = lines[start.line - 1];
  if (!line) return 0;

  return line.length;
}

const listItemLength = lintRule(
  'awesome-openspec:list-item-length',
  function (tree, file) {
    visit(tree, 'listItem', function (node) {
      if (!startsWithLink(node)) return;

      const length = getSourceLength(node, file);
      if (length > MAX_LENGTH) {
        file.message(
          `List item is ${length} characters, exceeds maximum of ${MAX_LENGTH}`,
          node
        );
      }
    });
  }
);

export default listItemLength;
