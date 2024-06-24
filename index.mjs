import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";
import pluginHtml from "eslint-plugin-html";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  prettierRecommended,
  {
    ignores: [
      "**/package.json",
      "**/.cache/**",
      "**/node_modules/**",
      "**/build/**",
      "**/public/build/**",
      "**/playwright-report/**",
      "**/server-build/**",
      "**/coverage/**",
      "**/dist/**",
      "**/lib/**",
    ],
  },

  // all files
  {
    plugins: {
      html: pluginHtml,
      import: pluginImport,
      prettier: pluginPrettier,
      "react-hooks": pluginReactHooks,
      "@typescript-eslint": pluginTypescript,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "arrow-body-style": "off",
      "no-debugger": 0,
      "no-use-before-define": "off",
      "no-case-declarations": "off",
      "no-extra-semi": "off",
      "no-alert": 0,
      "no-await-in-loop": 0,
      "no-redeclare": "off",
      "no-return-assign": ["error", "except-parens"],
      "no-restricted-syntax": [2, "ForInStatement", "LabeledStatement", "WithStatement"],
      "no-unused-vars": [1, { ignoreRestSiblings: true, argsIgnorePattern: "res|next|ctx|^err|^_", varsIgnorePattern: "^_" }],
      "no-unused-expressions": ["error", { allowTaggedTemplates: true, allowShortCircuit: true, allowTernary: true }],
      "no-param-reassign": [2, { props: false }],
      "no-console": 0,
      "no-shadow": [2, { hoist: "all", allow: ["resolve", "reject", "done", "next", "err", "error"] }],
      "prefer-const": ["error", { destructuring: "all" }],
      quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
      import: 0,
      "import/prefer-default-export": 0,
      "import/no-cycle": "off",
      "func-names": 0,
      "space-before-function-paren": 0,
      "comma-dangle": 0,
      "max-len": 0,
      "import/extensions": 0,
      "no-underscore-dangle": 0,
      "consistent-return": 0,
      "react/no-array-index-key": 0,
      "react/react-in-jsx-scope": 0,
      "react/prefer-stateless-function": 0,
      "react/forbid-prop-types": 0,
      "react/no-unescaped-entities": 0,
      "react/function-component-definition": 0,
      "react/require-default-props": 0,
      "react/jsx-props-no-spreading": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/accessible-emoji": 0,
      "jsx-a11y/href-no-hash": "off",
      "@typescript-eslint/comma-dangle": ["off"],
      "prettier/prettier": [
        "error",
        {
          printWidth: 160,
          singleQuote: false,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          requirePragma: false,
          bracketSpacing: true,
          insertPragma: false,
          proseWrap: "preserve",
          arrowParens: "always",
          trailingComma: "es5",
          endOfLine: "auto",
        },
      ],
    },
  },

  // JS and JSX files
  {
    files: ["**/*.js?(x)"],
    rules: {
      // most of these rules are useful for JS but not TS because TS handles these better
      // if it weren't for https://github.com/import-js/eslint-plugin-import/issues/2132
      // we could enable this :(
      // 'import/no-unresolved': 'error',
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^(props|rest|next|req|ctx|res|err|_)",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^(ignored|props|next|req|ctx|res|err|_)",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },

  // TS and TSX files
  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        project: true,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypescript,
    },
    rules: {
      "import/consistent-type-specifier-style": ["warn", "prefer-inline"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^ignored",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-redeclare": ["warn", { ignoreDeclarationMerge: true }],
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      // this is covered by the typescript compiler, so we don't need it
      "no-undef": "off",
      "no-shadow": "off", // TS does it
    },
  },

  // TSX-only files
  {
    files: ["**/*.tsx"],
    languageOptions: {
      parserOptions: {
        jsx: true,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
