/*jshint esversion: 6 */
const task = document.querySelector('.task');

task.addEventListener('dragstart', dragStart);
task.addEventListener('dragend', dragEnd);

const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop);
}

const taskFormBtn = document.querySelector('.add-task__form-btn');
const addTaskForm = document.querySelector('.add-task__form-container');

taskFormBtn.addEventListener('click', () => {
    addTaskForm.classList.toggle('add-task__form_hide');
});

const addTaskBtn = document.querySelector('.add-task__btn');
const newTasks = document.querySelector('.placeholder-new');
var newTask =  document.createElement('div');
var inputTextTask = document.querySelector('.add-task__text');


addTaskBtn.addEventListener('click', (event) => {
    newTask.classList.add('placeholder__task', 'task');
    newTask.innerHTML = inputTextTask.value;
    newTasks.prepend(newTask);
    addTaskForm.classList.toggle('add-task__form_hide');
    event.preventDefault();
});

function dragStart(event) {
    event.target.classList.add('task_hold');
    setTimeout(() => {
        event.target.classList.add('task_hide');
    }, 0);
}

function dragEnd(event) {
    event.target.classList.remove('task_hold', 'task_hide');
}

function dragOver(event) {
    event.preventDefault();

}

function dragEnter(event) {
    event.target.classList.add('placeholder_hovered');
    
}

function dragLeave(event) {
    event.target.classList.remove('placeholder_hovered');
}

function dragDrop(event) {
    event.target.append(task);
    event.target.classList.remove('placeholder_hovered');
    
}