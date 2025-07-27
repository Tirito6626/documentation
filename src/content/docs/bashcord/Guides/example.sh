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