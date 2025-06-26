---
title: Converting arrays
---

One of bash2json's key features is bash arrays to JSON convertion

## Converting JSON object/array to bash array
`--from-json` action returns executable array command, because bash arrays are not exportable 
```bash
bash2json '{ "foo": "bar" }' --from-json 
# declare -Ag array_8762=([foo]="bar")
```
If you need specific array name, just add '--output=' parameter
```bash
bash2json '{ "foo": "bar" }' --from-json --output="arr"
# declare -Ag arr=([foo]="bar")
```

If input's key values contain object, they are parsed as `[<key>.<subkey>]="value"`:
```bash
bash2json '{ "foo": "bar", "foo1": { "foo2": "bar" } }' --from-json --output="arr"
# declare -Ag arr=([foo]="bar" [foo1.foo2]="bar")
```

JSON arrays don't need extra arguments and are converted into indexed arrays
```bash
bash2json '["foo","bar"]' --from-json
# declare -ag array_27431=('foo' 'bar')
```

You can use custom names as well
```bash
bash2json '["foo","bar"]' --from-json --output="arr"
# declare -ag arr=('foo' 'bar')
```

Now because bash arrays are one-dimensional, you can't build nested arrays, which means child objects are saved in their original form
```bash
bash2json '["foo",{ "hello": "world" }]' --from-json --output="arr" 
# declare -ag arr=('foo' '{"hello":"world"}')
```
## Converting bash array to JSON object/array
That's where comes the tricky part: You can't pass array as an argument. So instead of passing literal array, you pass the name of array as argument, but any script that is executed via `bash` doesn't have access to shell's arrays. The only option is to source the script 
```bash
source /path/to/bash2json
```
prepare our array 
```bash
declare -A arr=([foo]="bar" [foo1.foo2]="bar") # or declare -Ag
```
and execute it as function (bash2json)
```bash
bash2json --to-json "arr"
```

If you did everything right, you should see this as result
```json
{"foo1":{"foo2":"bar"},"foo":"bar"}
```

It works the same way with indexed arrays:
```bash
declare -a arr=("foo" "bar");
bash2json --to-json "arr"
# ["foo","bar"]
```
