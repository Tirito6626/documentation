---
title: Core
---
There is no actual "core", bash2json has simple system

`bash2json` file contains all functions:
- `error <message>`: self-explanatory, error message
- `json_trim <json>`: trim JSON
- `json_append <json> <key> <value?> <don't return?>`: append JSON
- `json_list <json> <don't return?>`: list JSON object/array keys
- `json_validate <json>`: validate JSON
- `json_query <json> <raw?>  <don't return?>`: query JSON
- `arr_to_json <array name> <don't return?>`: bash array to JSON
- `json_to_arr <json> <output array name?> <parent key name?> <don't return?>`: JSON to bash array
- `bash2json <all arguments>`: main CLI which covers arguments parsing, functions execution and output wrapping


## Reusing functions
You can reuse any function from bash2json, but:
- You can't copyright any separate function as own code
- Each function depends on other functions to properly work

## Function dependencies:
- `error`: none
- `json_trim`: none
- `json_append`: `json_trim`, `json_query`, `error`
- `json_list`: none
- `json_validate`: none
- `json_query`: `json_list`
- `arr_to_json`: `json_append`
- `json_to_arr`: `json_list`
- `bash2json`: `error`, `json_validate`, `json_append`, `json_query`, `json_to_arr`, `json_trim`, `arr_to_json`

