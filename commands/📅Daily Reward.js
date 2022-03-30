/*CMD
  command: 📅Daily Reward
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

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 0 * 0
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 0)
          next -= wait_hours * 0
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 0)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let coins = Libs.ResourcesLib.userRes("coins")
coins.add(1000000)
var earned = Libs.ResourcesLib.userRes("coinsEarned")
earned.add(1000000)
var coinsToday = Libs.ResourcesLib.userRes("coinsToday")
coinsToday.add(1000000)
Bot.sendMessage("🎁You Successfully Received *🪙150 Coins!* from Daily Login")
