module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-standard-scss",
  ],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  rules: {
    "at-rule-no-unknown": true,
    "at-rule-empty-line-before": ["always", { except: ["first-nested"] }],
    "block-no-empty": [true, { ignore: ["comments"] }],
    "color-no-invalid-hex": true,
    "color-no-hex": true,
    "color-hex-length": null,
    "color-named": "never",
    "comment-empty-line-before": [
      "always",
      { ignore: ["stylelint-commands", "after-comment"] },
    ],
    "alpha-value-notation": null,
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "custom-property-no-missing-var-function": true,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-no-important": [true, { severity: "warning" }],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": null,
    "function-disallowed-list": ["rgb", "rgba", "hsl", "hsla"],
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-url-no-scheme-relative": true,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 2,
    "max-nesting-depth": [2, { severity: "warning" }],
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "named-grid-areas-no-invalid": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always", { except: ["first-nested"] }],
    "shorthand-property-no-redundant-values": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": [
      "lower",
      {
        ignoreTypes: ["/^\\$\\w+/"],
      },
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["/^\\$\\w+/||/-styled-mixin/"],
      },
    ],
    "string-no-newline": true,
    "string-quotes": "double",
    "unit-allowed-list": ["em", "rem", "%", "vh", "vw", "fr", "s", "ms", "deg"],
    "no-extra-semicolons": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": null,
    "no-invalid-position-at-import-rule": true,
    "no-invalid-double-slash-comments": true,
    "no-irregular-whitespace": true,
    "number-max-precision": 2,
    "unit-case": "lower",
    "value-no-vendor-prefix": true,
    "value-keyword-case": ["lower", { ignoreKeywords: ["dummyValue"] }],
    "value-list-comma-newline-after": null,
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "no-eol-whitespace": [true, { ignore: ["empty-lines"] }],
    "declaration-colon-newline-after": null,
    "declaration-block-semicolon-newline-after": null,
    "declaration-empty-line-before": null,
    "selector-class-pattern": null,
    indentation: null,
    "no-descending-specificity": null,
  },
};
