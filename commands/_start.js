/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: no
CMD*/

var deleted = Bot.getProperty("deleted"+user.telegramid+"")
if (deleted=="deleted"){
Bot.sendMessage("*❌`This account has been Deleted.`\nIf you didn't delete your account dont share your OTP Code when you login in telegram\n\nRecover My Account: https://telegra.ph/Recover-CRMSCP-Deleted-Account-03-29");
return}
Bot.runCommand("main_menu")
