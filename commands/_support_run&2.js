/*CMD
  command: /support_run&2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var coins = 
Libs.ResourcesLib.userRes("coins")
var earnedCoins = Libs.ResourcesLib.userRes("coinsEarned")
var task = Libs.ResourcesLib.userRes("completedTask")
var refered = Libs.ResourcesLib.userRes("refered")
var referearnings = Libs.ResourcesLib.userRes("refEarns")
var earnedCoinsToday = Libs.ResourcesLib.userRes("coinsToday")
let support = User.getProperty("support")
User.setProperty("support" ,message ,"string")
Bot.sendMessage("*Status: ✅Delivered*")
Bot.sendMessageToChatWithId(1329364654, "*🎟️New Support Ticket*\n\nℹ️Details\n👤User: *"+user.first_name+"* *"+user.last_name+"*\n🆔ID: "+user.telegramid+"\n🪙Coins Earned: "+earnedCoins.value().toFixed(2)+"\n📝Completed Task: "+task.value().toFixed(0)+"\n🔗Referral Earnings: "+referearnings.value().toFixed(2)+"\n\n📤Message: *"+message+"*\n\nDo not reply if user message is just a greeting! Thank You!")
