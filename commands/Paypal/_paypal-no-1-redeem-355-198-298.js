/*CMD
  command: /paypal-no-1-redeem-355-198-298
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Paypal
  answer: *📤Enter Your Paypal Email*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (validateEmail(message)) {
  User.setProperty("email", message, "string")

 var paypalEmail= User.getProperty("paypalEmail")
var paypalEmail= User.setProperty("paypalEmail", message, "string")
Bot.runCommand("paypal-auto-no-1-19764")
} else {
Bot.sendMessage("*❌ Email is not valid!*\n\nexample:`example@example.com`")
}


