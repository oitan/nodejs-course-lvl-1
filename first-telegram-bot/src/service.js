const fs = require("node:fs/promises");

async function saveMessage(messageData) {
  console.log("save by service");
}

module.exports = {
  saveMessage,
};
