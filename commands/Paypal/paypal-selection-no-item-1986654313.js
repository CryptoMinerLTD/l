/*CMD
  command: paypal-selection-no-item-1986654313
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Paypal

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message == 1)
Bot.runCommand("/paypal-no-1-step2-97-68-968")
if (message == 2)
Bot.runCommand("/paypal-no-2-step2-675-975-468")
if (message == 3)
Bot.runCommand("/paypal-no-3-step2-075-858-478")
if (message == 4)
Bot.runCommand("/paypal-no-4-step2-874-968-975")
if (message == 5)
Bot.runCommand("/paypal-no-5-step2-086-998-958")
if (message == 6)
Bot.runCommand("/paypal-no-6-step2-965-868-858")
if (message >= 7 && message<=999999999999999)
Bot.sendMessage("❌ *"+message+"* is not on the database.")
