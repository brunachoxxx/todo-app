import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(desc) {
    this.desc = desc;
    this.id = uuidv4();
    this.completedDate = null;
  }
}
