let allTasks = [];
const nameInput = document.querySelector('.taskName');
const urgencyInput = document.querySelector('.taskUrgencyDropdown');
const dueDateInput = document.querySelector('.taskDueDate');
const subtasksInput = document.querySelector('.subtasks');
const createBtn = document.querySelector('.createButton');
const taskList = document.querySelector('.taskList');

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

    let div = document.createElement('div');
    div.className = 'taskItem';
    taskList.appendChild(div);

    let taskTitle = document.createElement('h2');
    taskTitle.textContent = `${taskName}`;
    div.appendChild(taskTitle);

    let taskUrgencyText = document.createElement('h2');
    taskUrgencyText.textContent = `Urgency: ${urgencyLevel}`;
    div.appendChild(taskUrgencyText);

    let dueDateText = document.createElement('h2');
    dueDateText.textContent = `Due: ${dueDate}`;
    div.appendChild(dueDateText);

    let subtasksList = document.createElement('ul');
    subTasks.forEach(subtask => {
      let subtaskItem = document.createElement('li');
      subtaskItem.textContent = subtask;
      subtasksList.appendChild(subtaskItem);
    });
    div.appendChild(subtasksList);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function()
    {
      taskList.removeChild(div);
      allTasks = allTasks.filter(task => task.taskName!== taskName);
    });
    div.appendChild(deleteBtn);
    console.log(allTasks);
    clearInputs();
  
});

