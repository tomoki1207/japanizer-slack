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

function replaceToTranslatedWord(node, word) {
  if (Object.prototype.hasOwnProperty.call(word, 'reg')) {
    node.textContent = node.textContent.replace(new RegExp(word.reg), word.text);
  } else {
    node.textContent = word;
  }
}

/**
 * Translating.
 * @param json - translation definition JSON object.
 */
export function translate(json) {
  Array.prototype.forEach.call(document.querySelectorAll('[data-translate]'), (node) => {
    const word = getValue(json, node.getAttribute('data-translate'));
    if (node.children.length <= 0) {
      replaceToTranslatedWord(node, word);
    } else if (Array.isArray(word)) {
      let index = 0;
      Array.prototype.forEach.call(node.childNodes, (child) => {
        if (child.nodeName === '#text') {
          replaceToTranslatedWord(child, word[index++] || '');
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