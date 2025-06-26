---
title: Installation
---

## Requirements
- [jq](https://jqlang.github.io/jq/download/)
- [nodejs](https://github.com/nodesource/distributions) 
- [bash](https://www.gnu.org/software/bash/)
- [curl](https://curl.se/download.html)
## Installation
To install code, run this:

```php
git clone https://github.com/Tirito6626/bashcord.git
```

Now, lets create `main.sh` file:
```bash filename="main.sh" showLineNumbers
#!/bin/bash
source /path/to/bashcord/src/bashcord
clientBuilder;
 addToken "YOUR TOKEN HERE" # adding token  
 addIntents "GuildMembers" "GuildMessages" "MessageContent" # adding required intents so our bot receives all important messages
  
presenceBuilder;
 addStatus <status, e.g. "online"> # let us know that bot is online

 #lets create startup command!
 function startup {
  messageBuilder; # creating message object
      embedBuilder; # adding embed array
        addDescription "Im alive!" # adding description to embed
channel_message_send <put your channel id here> "$message_json" # sending our message object which is saved in $message_json
 }
 function pong {
    messageBuilder;
      addContent "pong"
    channel_message_send "$channel_id" "$message_json"
 }
event on "ready" startup # letting bashcord now which function what function should be executed on startup
startClient # start client 
```

Note: if you want to run bashcord on Pterodactyl or on any environment, that doesn't have required tools, you should change these lines in `/src/bashcord`
```bash
jq_binary="/path/to/jq"
nodejs_binary="/path/to/node"
npm_binary="/path/to/npm"
```

