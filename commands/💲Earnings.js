/*CMD
  command: 💲Earnings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /earnings
CMD*/

var balance = Libs.ResourcesLib.userRes("coins")
var coinsToday = 
Libs.ResourcesLib.userRes("coinsToday")
var coinsWeek = Libs.ResourcesLib.userRes("coinsWeek")
var coinsMonth = Libs.ResourcesLib.userRes("coinsMonth")
var email = User.getProperty("email")
var referearnings = Libs.ResourcesLib.userRes("refEarns")
var earned = Libs.ResourcesLib.userRes("coinsEarned")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*👤Profile:* "+user.first_name+"\n\*🪙Coins Earned:*  "+earned.value().toFixed(2)+" *Coins*\n\n*💲Earnings*\n\nℹ️General (/myprofile)\n💸Withdrawals (/withdrawals)\n\n*💲All Earnings*\n•🪙Coins Balance: "+balance.value().toFixed(2)+" Coins\n•👥Referral Earnings: "+referearnings.value().toFixed(2)+" Coins\n\n*📊Earnings Chart*\n\n*📊Todays Earned:* "+coinsToday.value().toFixed(2)+" Coins\n*📊Last Week Earned:* "+coinsWeek.value().toFixed(2)+" Coins\n*📊Last Month Earned:* "+coinsMonth.value().toFixed(2)+"  Coins ")
