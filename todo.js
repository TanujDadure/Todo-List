let taskList = [];

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    
    if (task !== '') {
        taskList.push({ name: task, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    let taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    taskList.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskElement.addEventListener('click', () => toggleTask(index));
        taskListContainer.appendChild(taskElement);
    });
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

renderTasks();
