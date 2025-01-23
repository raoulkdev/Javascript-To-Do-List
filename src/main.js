let allTasks = [];
const nameInput = document.querySelector('.taskName');
const urgencyInput = document.querySelector('.taskUrgencyDropdown');
const dueDateInput = document.querySelector('.taskDueDate');
const subtasksInput = document.querySelector('.subtasks');
const createBtn = document.querySelector('.createButton');

class Task
{
  constructor(taskName, urgencyLevel, dueDate, subTasks) {
    this.taskName = taskName;
    this.urgencyLevel  = 'Low';
    this.dueDate = dueDate
    this.subTasks = subTasks;
  }
}

function clearInputs()
{
  nameInput.value = '';
  urgencyInput.value = '';
  dueDateInput.value = '';
  subtasksInput.value = '';
}

createBtn.addEventListener('click', function()
{
    let taskName = nameInput.value;
    let urgencyLevel = urgencyInput.value;
    let dueDate = dueDateInput.value;
    let subTasks = subtasksInput.value.split(',' || ', ').map(item => item.trim());

    let newTask = new Task(taskName, urgencyLevel, dueDate, subTasks);
    allTasks.push(newTask);

    console.log(allTasks);
    clearInputs();
  
});

