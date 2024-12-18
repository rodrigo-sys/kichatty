#!/usr/bin/env node

import { createClient } from "@retconned/kick-js";
import chalk from "chalk";
import util from "util";

let channel = process.argv[2]
const client = createClient(channel, { logger: false, readOnly: true });

client.on("ChatMessage", async (message) => {
  console.log(util.format("『%s 』", chalk.hex(message.sender.identity.color)(message.sender.username)))
  console.log(`${message.content}`);
  console.log()
});
