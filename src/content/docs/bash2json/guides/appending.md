---
title: Appending JSON
---

Sometimes you need to add/overwrite key value inside JSON and, bash2json supports that too!

## Appending object
```bash
bash2json '{ "foo": "bar" }' --append 'foo1' 'bar1'
# {"foo":"bar","foo1":"bar1"}
```
## Appending child object
```bash
bash2json '{ "foo": { "foo1": "bar" } }' --append 'foo.foo2' 'bar1'
# {"foo":{"foo1":"bar","foo2":"bar1"}}
```
## Appending array
You must include `[]` to key name to add item to it's array.
```bash
bash2json '{ "foo": [{ "foo1": "bar" }] }' --append 'foo[]' 'bar1'
# {"foo":[{"foo1":"bar"},"bar1"]}
```

## Appending object inside array
If you want to access object inside array, you have to include `[<index>]`
```bash
bash2json '{ "foo": [{ "foo1": "bar" },{ "foo2" :"bar" }] }' --append 'foo[0].foo' 'bar1' 
# {"foo":[{"foo1":"bar","foo":"bar1"},{"foo2":"bar"}]}
```

## Appending array inside array
Just combine two things from below
```bash
bash2json '{ "foo": [{ "foo1": [] },{"foo2": "bar" }] }' --append 'foo[0].foo1[]' 'bar1'
# {"foo":[{"foo1":["bar1"]},{"foo2":"bar"}]}
```