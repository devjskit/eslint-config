<div>
  <h1 align="center">eslint-config-devjskit</h1>
  <strong>
    Reasonable ESLint, and TypeScript configs for JavaScript/TypeScript devs
  </strong>
  <p>
    This makes assumptions about the way you prefer to develop software and gives you configurations that will actually help you in your development.
  </p>
</div>

```
npm install -D eslint-config-devjskit
```

## The problem

You're a professional, but you're mature enough to know that even professionals
can make mistakes and you value your time enough to not want to waste time
configuring code quality tools or babysitting them.

## This solution

This is a set of configurations you can use in your web projects to avoid
wasting time.

## Usage

### TypeScript

Create a `tsconfig.json` file in your project root with the following content:

```json
{
  "extends": "eslint-config-devjskit/typescript",
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
}
```

<details>
  <summary>Customizing TypeScript</summary>

Learn more from
[the TypeScript docs here](https://www.typescriptlang.org/tsconfig/#extends).

</details>

### ESLint

Create a `eslint.config.js` file in your project root with the following
content:

```js
import defaultConfig from "eslint-config-devjskit";

/** @type {import("eslint").Linter.Config} */
export default [...defaultConfig];
```

<details>
  <summary>Customizing ESLint</summary>

Learn more from
[the Eslint docs here](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs).

</details>

There are endless rules we could enable. However, we want to keep our
configurations minimal and only enable rules that catch real problems (the kind
that are likely to happen). This keeps our linting faster and reduces the number
of false positives.

## License

MIT
