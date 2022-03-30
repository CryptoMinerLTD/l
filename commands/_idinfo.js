/*CMD
  command: /idinfo
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

var stat = Bot.getProperty("ban"+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌Your account has been terminated* by violating our *Terms & Condition Account Violations*");
return}
var button = [{ title : "Back" , command : "👤My Profile" }]
Bot.sendInlineKeyboard(button , "*CRMSCP ID* is a Profile Number to known fast by our clients. Getting an ID get a chance to get verified even faster. But this ID is currently temporary feature in this Bot. \n\n*How to Get ID?*\nTo get ID you fist you need to redeem an any *Rewards* from /rewardStore. After you received the *Reward* your *ID* will appear in your Profile.\n\n🤔My ID Info still not appeard in my profile..\n`Maybe your ID will appeared after 2days to 1 month please be patient. If the ID still not appeared please`  *☎️Contact Us /support*") 
