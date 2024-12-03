// script.js
const newNoteButton = document.getElementById('new-note');
const noteArea = document.querySelector('.note-area');

// Create and Add a New Note
function createNote(content = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  
  note.innerHTML = `
    <textarea>${content}</textarea>
    <button class="delete">×</button>
  `;

  // Delete note functionality
  const deleteButton = note.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    note.style.animation = 'fadeOut 0.4s';
    note.addEventListener('animationend', () => note.remove());
  });

  noteArea.appendChild(note);
}

// Handle "New Note" Button Click
newNoteButton.addEventListener('click', () => {
  createNote();
});
