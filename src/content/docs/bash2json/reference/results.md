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
