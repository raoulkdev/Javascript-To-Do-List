class Task
{
  constructor(taskName, urgencyLevel, dueDate, subTasks) {
    this.taskName = taskName;
    this.urgencyLevel  = ['Low', 'Medium', 'High'];
    this.dueDate = new Date();
    this.subTasks = [];
  }
}