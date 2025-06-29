---
title: Speed comparison (v3)
---
Below you can see a table with speed comparison of 3 parsers:
- bash2json v3.0.0
- bash2json v2.3.0
- jq v1.6

Each parser was tested with 7 different actions using `hyperfine` with 500 runs each

| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `./bash2json-v3 '{ "foo": "bar" }' 'foo'` | 6.6 ± 0.8 | 5.9 | 13.6 | 1.00 |
| `./bash2json-v2.3.0 '{ "foo": "bar" }' 'foo'` | 12.5 ± 1.4 | 10.6 | 28.0 | 1.89 ± 0.31 |
| `echo '{ "foo": "bar" }' \| jq-1.6 '.foo'` | 44.6 ± 2.3 | 42.1 | 75.7 | 6.74 ± 0.85 |
| `./bash2json-v3 '{ "foo": { "foo2": "bar" } }' 'foo.foo2' -r` | 8.5 ± 0.8 | 7.8 | 15.7 | 1.28 ± 0.19 |
| `./bash2json-v2.3.0 '{ "foo": { "foo2": "bar" } }' 'foo.foo2' -r` | 19.0 ± 1.1 | 17.5 | 28.5 | 2.87 ± 0.37 |
| `echo '{ "foo": { "foo2": "bar" } }' \| jq-1.6 '.foo.foo2' -r` | 46.4 ± 10.4 | 38.9 | 95.5 | 7.01 ± 1.76 |
| `./bash2json-v2.3.0 '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' 'foo[0].foo' -r` | 29.1 ± 1.8 | 26.3 | 48.3 | 4.40 ± 0.57 |
| `./bash2json-v3 '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' 'foo[0].foo' -r` | 11.9 ± 0.4 | 11.2 | 16.5 | 1.79 ± 0.21 |
| `echo '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' \| jq-1.6 '.foo[0].foo' -r` | 44.6 ± 2.1 | 42.6 | 73.3 | 6.74 ± 0.84 |
| `./bash2json-v3 '{ "foo": "bar" }' --append 'foo1' 'bar1'` | 10.1 ± 4.9 | 6.2 | 31.3 | 1.53 ± 0.76 |
| `./bash2json-v2.3.0 '{ "foo": "bar" }' --append 'foo1' 'bar1'` | 14.5 ± 2.0 | 12.0 | 26.0 | 2.18 ± 0.39 |
| `echo '{ "foo": "bar" }' \| jq-1.6 '. += { "foo1": "bar1" }'` | 44.9 ± 1.7 | 43.1 | 60.7 | 6.78 ± 0.82 |
| `./bash2json-v3 '{ "foo": { "foo1": "bar" } }' --append 'foo.foo2' 'bar1'` | 9.9 ± 0.7 | 9.2 | 22.7 | 1.50 ± 0.20 |
| `./bash2json-v2.3.0 '{ "foo": { "foo1": "bar" } }' --append 'foo.foo2' 'bar1'` | 22.7 ± 1.3 | 20.4 | 35.9 | 3.43 ± 0.44 |
| `echo '{ "foo": { "foo1": "bar" } }' \| jq-1.6 '.foo += { "foo2": "bar1" }'` | 47.4 ± 10.9 | 40.6 | 101.5 | 7.16 ± 1.84 |
| `./bash2json-v3 '{ "foo": [{ "foo1": "bar" }] }' --append 'foo[]' 'bar1'` | 10.2 ± 1.0 | 9.2 | 16.7 | 1.54 ± 0.24 |
| `./bash2json-v2.3.0 '{ "foo": [{ "foo1": "bar" }] }' --append 'foo[]' 'bar1'` | 21.1 ± 2.5 | 18.1 | 47.6 | 3.19 ± 0.53 |
| `echo '{ "foo": [{ "foo1": "bar" }] }' \| jq-1.6 '.foo += [ "bar1" ]'` | 43.9 ± 2.2 | 40.9 | 64.0 | 6.64 ± 0.83 |
| `./bash2json-v3 '{ "foo": [{ "foo1": "bar" },{ "foo2" :"bar" }] }' --append 'foo[0].foo' 'bar1'` | 18.9 ± 7.7 | 14.1 | 56.1 | 2.86 ± 1.21 |
| `./bash2json-v2.3.0 '{ "foo": [{ "foo1": "bar" },{ "foo2" :"bar" }] }' --append 'foo[0].foo' 'bar1'` | 39.6 ± 2.5 | 35.7 | 63.7 | 5.98 ± 0.78 |
| `echo '{ "foo": [{ "foo1": "bar" },{ "foo2" :"bar" }] }' \| jq-1.6 '.foo[0] += { "foo": "bar1" }'` | 45.3 ± 2.4 | 42.2 | 60.7 | 6.85 ± 0.86 |

## Sourced command speed comparison

2 versions of bash2json are tested (v3 and v2.3.0). Both files are sourced and then executed as function.

### v2.3.0 
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `bash2json '{ "foo": "bar" }' 'foo'` | 7.4 ± 0.6 | 6.2 | 12.3 | 1.00 |
| `bash2json '{ "foo": { "foo2": "bar" } }' 'foo.foo2' -r` | 13.2 ± 1.0 | 11.3 | 26.0 | 1.79 ± 0.20 |
| `bash2json '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' 'foo[0].foo' -r` | 25.6 ± 8.0 | 19.9 | 58.0 | 3.47 ± 1.11 |
| `bash2json '{ "foo": "bar" }' --append 'foo1' 'bar1'` | 8.0 ± 1.1 | 6.6 | 19.6 | 1.08 ± 0.17 |
| `bash2json '{ "foo": { "foo1": "bar" } }' --append 'foo.foo2' 'bar1'` | 17.2 ± 1.2 | 15.4 | 24.7 | 2.32 ± 0.24 |
| `bash2json '{ "foo": [{ "foo1": "bar" }] }' --append 'foo[]' 'bar1'` | 15.4 ± 1.6 | 14.1 | 33.4 | 2.08 ± 0.28 |
| `bash2json '{ "foo": [{ "foo1": "bar" },{ "foo2" :"bar" }] }' --append 'foo[0].foo' 'bar1'` | 33.0 ± 1.4 | 29.9 | 44.8 | 4.48 ± 0.41 |
| `bash2json '{ "foo": "bar" }' --from-json --output="arr"` | 12.0 ± 5.9 | 8.2 | 30.6 | 1.63 ± 0.81 |
| `bash2json '{ "foo": "bar", "foo1": { "foo2": "bar" } }' --from-json --output="arr"` | 19.1 ± 1.8 | 17.2 | 32.6 | 2.59 ± 0.32 |
| `bash2json '["foo","bar"]' --from-json` | 9.6 ± 0.8 | 8.5 | 19.5 | 1.30 ± 0.16 |

### v3.0.0 
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `bash2json '{ "foo": "bar" }' 'foo'` | 1.8 ± 0.2 | 1.3 | 3.9 | 1.00 |
| `bash2json '{ "foo": { "foo2": "bar" } }' 'foo.foo2' -r` | 5.4 ± 3.7 | 2.8 | 16.4 | 3.05 ± 2.10 |
| `bash2json '{ "foo": [{ "foo": "bar" },{ "foo": "othervalue" }] }' 'foo[0].foo' -r` | 6.7 ± 0.8 | 6.1 | 16.1 | 3.78 ± 0.67 |
| `bash2json '{ "foo": "bar" }' --append 'foo1' 'bar1'` | 2.5 ± 0.6 | 2.0 | 7.2 | 1.42 ± 0.38 |
| `bash2json '{ "foo": { "foo1": "bar" } }' --append 'foo.foo2' 'bar1'` | 5.1 ± 1.1 | 4.0 | 15.8 | 2.88 ± 0.74 |
| `bash2json '{ "foo": [{ "foo1": "bar" }] }' --append 'foo[]' 'bar1'` | 4.8 ± 0.4 | 4.0 | 8.3 | 2.71 ± 0.42 |
| `bash2json '{ "foo": [{ "foo1": "bar" },{ "foo2" :"bar" }] }' --append 'foo[0].foo' 'bar1'` | 9.9 ± 0.9 | 8.7 | 20.7 | 5.55 ± 0.90 |
| `bash2json '{ "foo": "bar" }' --from-json --output="arr"` | 3.5 ± 0.6 | 2.9 | 13.2 | 1.95 ± 0.41 |
| `bash2json '{ "foo": "bar", "foo1": { "foo2": "bar" } }' --from-json --output="arr"` | 7.5 ± 1.1 | 6.3 | 22.1 | 4.20 ± 0.81 |
| `bash2json '["foo","bar"]' --from-json` | 3.3 ± 0.6 | 2.7 | 9.5 | 1.88 ± 0.44 |
