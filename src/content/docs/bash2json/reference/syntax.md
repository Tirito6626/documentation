---
title: Actions and syntax
---
- `--from-json`: 
> Function: `json_to_arr`
> Arguments: `<JSON input>` `<array name>`
> Supported options: --no-validate

- `--to-json`:
> Function: `arr_to_json`
> Arguments: `<array name>`
> Notes: requires bash2json to be sourced and executed as function

- `--query`:
> Function: `json_query`
> Arguments: `<JSON input>` `<query>`
> `<query>` syntax:
```
<key>.<subkey?>
```
When querying arrays:
```
<key[index]>.<subkey?> ...
```
Since v3.6.0, multiple indexes are supported. If indexes are split with `,`, they are put in one line, if `;` is used, output values are split through newline:
```
<key[index1,index2]>.<subkey?> ... 
# "value1" "value2"
OR
<key[index1;index2]>.<subkey?> ...
# "value1" 
# "value2"
```
Also since v3.6.0 multiqueries are fully supported. If queries are delimited with space, output values are split with space, if delimeter is `; `, output values are split with newline:
```
<key1> <key2> ... 
# "value1" "value2"
OR
<key1>; <key2> ... 
# "value1" 
# "value2"
```

> Supported options: -r|--raw, --no-validate

- `--append`:
> Function: `json_append`
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

- `--pretty`: 
> Arguments: `<JSON input>`
> Supported options: --no-validate

- `--validate`
> Arguments `<JSON input>`