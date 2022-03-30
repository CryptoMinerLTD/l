/*CMD
  command: Paypal
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

Api.sendPhoto({photo: "https://www.linkpicture.com/q/LPic6243da4218cfc2035439183.png"})
Bot.sendMessage("_Paypal is the world most popular e-wallet app worldwide, We will processed your request to your Paypal account_\n\n*Value*     *Currency*     *Cost*       *No.*\n10.00         USD     🪙10000      *1*\n20.00         USD     🪙20000      *2*\n25.00         USD     🪙25000      *3*\n30.00         USD     🪙30000      *4*\n50.00         USD     🪙50000      *5*\n100.00       USD    🪙100000     *6*\n\nEnter item *No.* to choose your Reward.")
Bot.runCommand("paypal-selection-no-item-1986654313")
