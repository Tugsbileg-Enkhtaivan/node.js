// import chalk from "chalk";

// const log = console.log;

// log(chalk.red("chalk"));

// log(chalk.blue("chalk"));

// log(chalk.yellow("chalk"));

// log(chalk.cyan("chalk"));

// log(chalk.green("chalk"));

// log(chalk.blue("Hello") + " World" + chalk.red("!"));

// log(chalk.blue.bgRed.bold("Hello world!"));

// log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// log(
//   chalk.green(
//     "I am a green line " +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// );

// log(`
//     CPU: ${chalk.red("90%")}
//     RAM: ${chalk.green("40%")}
//     DISK: ${chalk.yellow("70%")}
//     `);

// log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
// log(chalk.hex("#DEADED").bold("Bold gray!"));

// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));

// import chalk from "chalk";
// import fs from "fs";
// import data from "./hello.json" assert [type: '.json']
// import { assert } from "console";
// import { json } from "stream/consumers";

// fs.writeFile("./hello.html", "Hello", (err) => {
//   if (!err) {
//     console.log(chalk.green("Амжилттай үүслээ"));
//   } else {
//     console.log(chalk.red(err));
//   }
// });

import chalk from "chalk";
import fs from "fs";

const data = fs.writeFile("./text.txt", "Hello", (err) => {
  if (err) {
    console.log(chalk.green(err));
  } else {
  }
});

import data from "./text.txt";

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// file systemimport chalk from 'chalk'import fs from 'fs'//
// create text filefor (let i = 0; i < 10; i++) {
//    fs.writeFile(`./hello${i}.txt`, String(i), (err, info) => {
//   if (!err)
// {            console.log(chalk.yellow(info))        }    })}
