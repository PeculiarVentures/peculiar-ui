import { ownerDocument } from './owner_document';

export function ownerWindow(node: Node | null | undefined): Window {
  const doc = ownerDocument(node);

  return doc.defaultView || window;
}
