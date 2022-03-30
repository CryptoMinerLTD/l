/*CMD
  command: 👤My Profile
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /myprofile
CMD*/

var coins = 
Libs.ResourcesLib.userRes("coins")
var earnedCoins = Libs.ResourcesLib.userRes("coinsEarned")
var task = Libs.ResourcesLib.userRes("completedTask")
var refered = Libs.ResourcesLib.userRes("refered")
var referearnings = Libs.ResourcesLib.userRes("refEarns")
var earnedCoinsToday = Libs.ResourcesLib.userRes("coinsToday")
var earnedCoinsWeek = Libs.ResourcesLib.userRes("coinsWeek")
var earnedCoinsMonth = Libs.ResourcesLib.userRes("coinsMonth")
var idInfo = User.getProperty("idInfo")
var accountStatus = User.getProperty("accountStatus")
var email = User.getProperty("email")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*👤Profile:* "+user.first_name+"\n\*🪙Available Balance:* "+coins.value().toFixed(2)+" *Coins*\n*📝Completed Tasks:*" +task.value().toFixed(0)+"\n\n\n*ℹ️General*\n\n💲Earnings (/earnings)\n💸Withdrawals (/withdrawals)\n\n*ℹ️General Info*\n•🪙 Earned Coins: "+earnedCoins.value().toFixed(2)+" *Coins*\n•👥Referral Earnings: "+referearnings.value().toFixed(2)+" *Coins*\n•💌Email (/email): *"+email+"*\n•✅Verified (/verifiedinfo): "+accountStatus+"\n•🆔CRMSCP ID (/idinfo): "+idInfo+"")
