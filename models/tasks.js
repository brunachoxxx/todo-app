import colors from "colors";
import Task from "./task.js";

export default class Tasks {
  get arrayList() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }
  constructor() {
    this._list = {};
  }

  loadTaskfromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  addTask(desc) {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
  finalList() {
    this.arrayList.forEach((task, i) => {
      const idx = `${i + 1}.`.magenta;
      const inc = `${idx} ` + task.desc + ` :: Incomplete`.red;
      const comp =
        `${idx} ` + task.desc + ` :: Completed on ${task.completedDate}`.green;
      task.completedDate ? console.log(comp) : console.log(inc);
    });
  }
  completedList() {
    this.arrayList.forEach((task, i) => {
      const idx = `${i + 1}.`.magenta;
      const comp =
        `${idx} ` + task.desc + ` :: Completed on ${task.completedDate}`.green;
      if (task.completedDate) {
        console.log(comp);
      }
    });
  }

  todoList() {
    this.arrayList.forEach((task, i) => {
      const idx = `${i + 1}.`.magenta;
      const inc = `${idx} ` + task.desc + ` :: Incomplete`.red;
      if (!task.completedDate) {
        console.log(inc);
      }
    });
  }

  completeTask(taskIds) {
    taskIds.forEach((id) => {
      const taskId = this._list[id];
      if (!taskId.completedDate) {
        taskId.completedDate = new Date().toISOString();
      }
    });

    this.arrayList.forEach((task) => {
      if (!taskIds.includes(task.id)) {
        this._list[task.id].completedDate = null;
      }
    });
  }

  deleteTask(id) {
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}
