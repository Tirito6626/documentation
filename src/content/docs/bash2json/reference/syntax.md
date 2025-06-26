---
title: Actions and syntax
---
- `--from-json`: 
> Arguments: `<JSON input>` `<array name>`
> Supported options: --output=`<array name>`, --no-validate

- `--to-json`:
> Arguments: `<array name>`
> Notes: requires bash2json to be sourced and executed as function

- `--query`:
> Arguments `<JSON input>` `query`
> `query` syntax:
```
<key name>([index])?(.<subkey name>([index])?)?...
```
> Supported options: -r|--raw, --no-validate

- `--append`:
> Arguments: `<JSON input>` `key` `value?`
> `key` syntax:
```
<key name>([index]?)(.<subkey name>([index]?)?)?...
```
> Supported options: --no-validate
> Notes: If input is an array, `key` can be JSON object and value is optional. If both key & value are present, they will be added as `{ key: value }`

- `--trim`:
> Arguments `<JSON input>`
> Supported options: --no-validate

- `--validate`
> Arguments `<JSON input>`