---
title: channel_crossport-message_send 
---
Crosspost a message in an Announcement Channel to following channels. This endpoint requires the SEND_MESSAGES permission, if the current user sent the message, or additionally the MANAGE_MESSAGES permission, for all other messages, to be present for the current user.

 Arguments | Name | Type | Required        
 ----|----|----|----
 1 | channel_id | Snowflake | True
 2 | message_id | Snowflake | True
