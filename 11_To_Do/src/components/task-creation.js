export class TaskDetails {
  constructor(title, description, dueDate, priorityLevel) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priorityLevel;
    this._timeStamp = Date.now();
  }

  set title(newTitle) {
    this._title = newTitle;
  }
  set description(newDescription) {
    this._description = newDescription;
  }
  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  }
  set priorityLevel(newPriorityLevel) {
    this._priority = newPriorityLevel;
  }
  //FOR DEVELOPMENT PROCESS
  set timeStamp(newTimeStamp) {
    this._timeStamp = newTimeStamp;
  }

  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get dueDate() {
    return this._dueDate;
  }
  get priorityLevel() {
    return this._priority;
  }
  get timeStamp() {
    return this._timeStamp;
  }

  addTaskToLocalStorage() {
    localStorage.setItem(this._timeStamp, JSON.stringify(this));
  }
  removeTaskFromLocalStorage() {
    localStorage.removeItem(this._timeStamp);
  }
}