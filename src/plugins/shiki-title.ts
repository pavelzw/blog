import type { Element } from 'hast';
import type { ShikiTransformer } from 'shiki';

const copyIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

const checkIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function svgCopyIcon(): Element {
  return {
    type: 'element',
    tagName: 'svg',
    properties: {
      width: 16,
      height: 16,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    children: [
      {
        type: 'element',
        tagName: 'rect',
        properties: { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 },
        children: [],
      },
      {
        type: 'element',
        tagName: 'path',
        properties: { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' },
        children: [],
      },
    ],
  };
}

/**
 * Shiki transformer that adds a title bar and/or copy button to fenced code blocks.
 *
 * Copy button is added by default. Disable with `no-copy`:
 *   ```python no-copy
 *   def hello(): ...
 *   ```
 *
 * Add a title bar with `title="..."`:
 *   ```python title="utils.py"
 *   def hello(): ...
 *   ```
 */
export function shikiTitleTransformer(): ShikiTransformer {
  return {
    name: 'shiki-title',
    pre(node) {
      const raw = this.options.meta?.__raw ?? '';

      const titleMatch = raw.match(/title="([^"]+)"/);
      if (titleMatch) {
        node.properties['data-title'] = titleMatch[1];
      }

      if (!/\bno-copy\b/.test(raw)) {
        node.children.push({
          type: 'element',
          tagName: 'button',
          properties: {
            class: 'copy-btn',
            'aria-label': 'Copy code',
            'data-copy-icon': copyIcon,
            'data-check-icon': checkIcon,
          },
          children: [svgCopyIcon()],
        });
      }
    },
  };
}
