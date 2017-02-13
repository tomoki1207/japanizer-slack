function getValue(obj, key) {
  const keys = key.split('.');
  const length = keys.length;
  let val = obj;
  let index = 0;
  while (obj !== null && index < length) {
    val = val[keys[index++]];
  }
  return val;
}

/**
 * Translating.
 * @param json - translation definition JSON object.
 */
export function translate(json) {
  Array.prototype.forEach.call(document.querySelectorAll('[data-translate]'), (node) => {
    const word = getValue(json, node.getAttribute('data-translate'));
    if (node.children.length <= 0) {
      node.textContent = word;
    } else if (Array.isArray(word)) {
      let index = 0;
      Array.prototype.forEach.call(node.childNodes, (child) => {
        if (child.nodeName === '#text') {
          child.textContent = word[index++];
        }
      });
    }
    node.removeAttribute('data-translate');
  });
}

/**
 * Set specific attribute to DOM for translating.
 * @param elem - target DOM element
 * @param key - JSON key for translate combined by '.'
 *        ex) {
 *              "foo": {
 *                "bar": "val1"
 *              }
 *            }
 *         => foo.bar
 */
export function setAttr(elem, key) {
  if (elem) {
    elem.setAttribute('data-translate', key);
  }
}

/**
 * Watch DOM chenges by MutationObserver.
 * @param elem - target DOM element.
 * @param cb - callback function for perform when detected DOM changes.
 * @return observer objects. You can stop observing via it.
 */
export function observe(elem, cb, option) {
  const config = option || { childList: true };
  const observer = new MutationObserver(cb);
  observer.observe(elem, config);
  return observer;
}