#!/usr/bin/env node

import { createClient } from "@retconned/kick-js";
import chalk from "chalk";
import util from "util";
import { spawn } from 'child_process';

if (!process.stdin.isTTY) {
  // run script in a new terminal window if it was invoked outside of a tty
  spawn(process.env.TERMINAL, process.argv);
  process.exit(0);
}

let channel = process.argv[2]
const client = createClient(channel, { logger: false, readOnly: true });

client.on("ChatMessage", async (message) => {
  console.log(util.format("『%s 』", chalk.hex(message.sender.identity.color)(message.sender.username)))
  console.log(`${message.content}`);
  console.log()
});
