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