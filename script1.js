document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const prioritySelect = document.getElementById('priority-select');
    const categoryInput = document.getElementById('category-input');
    const dueDateInput = document.getElementById('due-date');

    const todoText = todoInput.value.trim();
    const priority = prioritySelect.value;
    const category = categoryInput.value.trim();
    const dueDate = dueDateInput.value;

    if (todoText !== '' && dueDate !== '') {
        const todoList = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.className = `priority-${priority}`;

        const span = document.createElement('span');
        span.textContent = `${todoText} [${category}] - Due: ${dueDate}`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-button';
        completeButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(span);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = '';
        categoryInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
        todoInput.focus();
    } else {
        alert("Please fill out both the task and due date.");
    }
}
