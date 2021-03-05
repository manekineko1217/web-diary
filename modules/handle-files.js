'use strict';

/**
 * ファイルの内容をデータ URL として取得する
 * @param {Object} file File オブジェクト
 * @return Promise オブジェクト
 */
function getAsDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => {
      resolve(event.target.result);
    }, false);
  });
}

/**
 * ファイルの内容をテキストとして取得する
 * @param {Object} file File オブジェクト
 * @return Promise オブジェクト
 */
 function getAsText(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener('load', (event) => {
      resolve(event.target.result);
    }, false);
  });
}

export { getAsDataURL, getAsDataURL };