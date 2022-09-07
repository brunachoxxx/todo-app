require("colors");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/* const showMenu = () => {
  

  console.log(`${"1.".blue} Add task`);
  console.log(`${"2.".blue} List task`);
  console.log(`${"3.".blue} List completed task`);
  console.log(`${"4.".blue} List to-do task`);
  console.log(`${"5.".blue} Complete task`);
  console.log(`${"5.".blue} Delete task`);
  console.log(`${"5.".blue} Exit\n`);
}; */

readline.question("Select an option", (opt) => {
  console.log(`You selected option number`, opt.blue);
  readline.close();
});

module.exports = {
  showMenu,
};
