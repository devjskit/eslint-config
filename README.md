# `eslint-config-devjskit`

## Usage

**Install**:

```bash
$ yarn add --dev eslint eslint-config-devjskit
```

**Edit `package.json`**:

```jsonc
{
  "eslintConfig": {
    "extends": ["devjskit/typescript"],
    "ignorePatterns": ["*.mjs", "lib/*", "dist/*", "build/*", "coverage/*", "fixtures/*", "examples/**/*", "tests/**/*"],
  },
}
```
