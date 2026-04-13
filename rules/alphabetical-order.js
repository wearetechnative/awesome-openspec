import {lintRule} from 'unified-lint-rule';
import {visit} from 'unist-util-visit';

/**
 * Extract the link text and URL from a list item node.
 * Returns null if the item doesn't start with a link (not an awesome list entry).
 */
function getLinkInfo(listItem) {
  const paragraph = listItem.children?.[0];
  if (!paragraph || paragraph.type !== 'paragraph') return null;

  const firstChild = paragraph.children?.[0];
  if (!firstChild || firstChild.type !== 'link') return null;

  const textNode = firstChild.children?.[0];
  if (!textNode || textNode.type !== 'text') return null;

  return {text: textNode.value, url: firstChild.url};
}

const alphabeticalOrder = lintRule(
  'awesome-openspec:alphabetical-order',
  function (tree, file) {
    visit(tree, 'list', function (node) {
      const entries = [];

      for (const item of node.children) {
        const info = getLinkInfo(item);
        if (info) {
          entries.push({text: info.text, url: info.url, node: item});
        }
      }

      // Skip lists where fewer than 2 items have links (not an awesome list section)
      if (entries.length < 2) return;

      // Skip TOC lists (all links point to anchor fragments)
      if (entries.every(e => e.url.startsWith('#'))) return;

      for (let i = 1; i < entries.length; i++) {
        const prev = entries[i - 1].text.toLowerCase();
        const curr = entries[i].text.toLowerCase();

        if (curr < prev) {
          file.message(
            `"${entries[i].text}" should be before "${entries[i - 1].text}" (alphabetical order)`,
            entries[i].node
          );
        }
      }
    });
  }
);

export default alphabeticalOrder;
