/*CMD
  command: /email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: email

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

 var email= User.getProperty("email")
var email= User.setProperty("email", message, "string")
Bot.sendMessage("✅Email successfully saved.")
Bot.runCommand("👤My Profile")
} else {
Bot.sendMessage("*❌ Email is not valid!*\n\nexample:`example@domain.com`")
}
