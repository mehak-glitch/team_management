// DOM Elements
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskPrioritySelect = document.getElementById('task-priority');
const taskDeadlineInput = document.getElementById('task-deadline');
const taskList = document.getElementById('tasks');

// Add Event Listener to Form
taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get Task Details
    const taskTitle = taskTitleInput.value.trim();
    const taskPriority = taskPrioritySelect.value;
    const taskDeadline = taskDeadlineInput.value;

    // Validate Inputs
    if (!taskTitle || !taskDeadline) {
        alert('Please fill in all fields.');
        return;
    }

    // Create New Task Element
    const taskItem = document.createElement('li');

    // Task Title
    const taskTitleElem = document.createElement('span');
    taskTitleElem.classList.add('task-title');
    taskTitleElem.innerText = `${taskTitle} (Due: ${taskDeadline})`;

    // Task Priority
    const taskPriorityElem = document.createElement('span');
    taskPriorityElem.classList.add('task-priority');
    taskPriorityElem.innerText = taskPriority;
    if (taskPriority === 'High') taskPriorityElem.classList.add('priority-high');
    else if (taskPriority === 'Medium') taskPriorityElem.classList.add('priority-medium');
    else if (taskPriority === 'Low') taskPriorityElem.classList.add('priority-low');

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.backgroundColor = '#d9534f'; // Bootstrap Danger Red
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '4px';
    deleteButton.style.padding = '0.5rem';
    deleteButton.style.cursor = 'pointer';

    // Delete Task on Click
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    // Append Elements to Task Item
    taskItem.appendChild(taskTitleElem);
    taskItem.appendChild(taskPriorityElem);
    taskItem.appendChild(deleteButton);

    // Add Task to Task List
    taskList.appendChild(taskItem);

    // Clear Form Inputs
    taskForm.reset();
});
