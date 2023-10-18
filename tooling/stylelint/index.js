module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    // FIXME: these need to be fixed
    'no-descending-specificity': null,
    'selector-class-pattern': null,
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
};
