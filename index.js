module.exports = {
    extends: "eslint:recommended",
    rules: {
        "arrow-parens": ["error", "always"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "comma-dangle": ["error", "always-multiline"],
        "complexity": ["warn", { "max": 3 }],
        "curly": ["error", "all"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "global-require": "warn",
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "no-await-in-loop": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-var": "error",
        "one-var": ["error", "never"],
        "prefer-const": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-spread": "error",
        "prefer-template": "warn",
        "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "require-await": "error",
        "semi": ["error", "never"],
        "yoda": "error",
    },
    env: {
        "browser": true,
        "es6": true,
        "node": true
      },
};
