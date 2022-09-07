import Tasks from "./models/tasks.js";
import {
  inquirerMenu,
  pause,
  readInput,
  deleteMenu,
  forSure,
  complete,
} from "./helpers/inquirer.js";
import { saveFile, loadFile } from "./helpers/saveFile.js";

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const taskInDb = loadFile();

  if (taskInDb) {
    tasks.loadTaskfromArray(taskInDb);
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput("Description: ");
        tasks.addTask(desc);
        break;
      case "2":
        tasks.finalList();
        break;
      case "3":
        tasks.completedList();
        break;
      case "4":
        tasks.todoList();
        break;
      case "5":
        const ids = await complete(tasks.arrayList);
        const checkit = await forSure(
          "You're going to complete all the checked tasks, continue?"
        );
        if (checkit) {
          tasks.completeTask(ids);
          console.log("Completed");
        }

        break;
      case "6":
        const id = await deleteMenu(tasks.arrayList);
        if (id !== "0") {
          const confirm = await forSure(
            "You're going to delete this task, continue?"
          );
          if (confirm) {
            tasks.deleteTask(id);
            console.log("Task Deleted");
          }
        }

        break;
    }
    saveFile(tasks.arrayList);
    await pause();
  } while (opt !== "0");
};

main();
