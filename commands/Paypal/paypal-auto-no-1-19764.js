/*CMD
  command: paypal-auto-no-1-19764
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Paypal

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var task = Libs.ResourcesLib.userRes("completedTask")
var paypalEmail = User.getProperty("paypalEmail")
var idInfo = User.getProperty("idInfo")
var coins = Libs.ResourcesLib.userRes("coins")
Bot.sendMessage("*✅ Withdrawal is on Processed!*\n\nYour withdrawal details\n*💌Paypal Email:* "+paypalEmail+"\n*💲Cashout:* Paypal $10\n\nYou will recieved your withdrawal in 24 to 48 hours, if you dont received your withdrawal please send us a *🎟️Support Ticket!*")
coins.add(-10000)
Api.sendMessage({ 
chat_id: "@hujvuufcu", 
text: ""+user.first_name+""+user.last_name+" Request for Paypal $10\n\nℹ️ Withdrawal Details\n💌Paypal Email: "+paypalEmail+"\n🆔CRMSCP ID: "+idInfo+"\n📝Completed Task: "+task.value().toFixed(0)+"\n👤Telegram ID: "+user.telegramid+"\n\nPlease verify the details before sending the request."})
Bot.runCommand("main_menu")

