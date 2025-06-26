---
title: Basic Usage
---
In most cases you would use bash2json for simple JSON queries
```bash
bash2json '{ "foo": "bar" }' 'foo'
# `"bar"
```

If you don't need `"` when querying strings, just use `-r` parameter
```bash
bash2json '{ "foo": "bar" }' 'foo' -r 
# bar
```

Also you might need to get child key inside another object
```bash
bash2json '{ "foo": { "foo2": "bar" } }' 'foo.foo2' -r 
# bar
```

... or it's inside an array
```bash
bash2json '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' 'foo[0].foo' -r 
# bar
```

You can also validate JSON using `--validate`:
```bash
bash2json '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' --validate
# returns nothing on success
```
If object is missing any character, bash2json will return error:
```bash
bash2json '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" } ' --validate 
# error: missing 1 `}`
# error: missing 1 `]`
```
Or if you forgot to quote some string:
```bash
bash2json '{ "foo": [{ "foo": "bar" },{ "foo": othervalue }] }' --validate
# error: unquoted characters: othervalue 
```

`json_validate` function is being executed each time you do any action with JSON (except for --to-json). Because `json_validate` reads each character, it can make processing big objects very slow. In case that you're sure, that your object is valid, you can skip validation using `--no-validate` option:
```bash 
bash2json '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' 'foo[0].foo' -r --validate