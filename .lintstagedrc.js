module.exports = {
  '*.{html,js,jsx,ts,tsx,css,less,json,md}': ['prettier --check --ignore-unknown'],
  '*.{css,less}': ['stylelint --allow-empty-input'],
  '*.{js,jsx,ts,tsx}': ['eslint'],
  // FIXME: disabling type checking until we are ready
  // also this doesn't work with tsx
  /**
   *
   * @param {string} filenames
   * @returns {string}
   */
  // '*.{ts,tsx}': (filenames) =>
  //   ['tsc', '--skipLibCheck', '--noEmit', ...filenames].join(' '),
};
