/*CMD
  command: ☎️Support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Bot.sendMessage("*🤖 BOT*: Hi "+user.first_name+" Please send us a message if you want to ask a question and problem Thank You!")
Bot.runCommand("/support_run&2")
