/*CMD
  command: yes
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

Bot.setProperty("deleted"+user.telegramid+", string")
Bot.sendMessage(""+user.first_name+" "+user.last_name+" *❌Your account has successfully deleted.*");

