'use strict';

const table = document.querySelector('.field');

let rowsQuantity = table.querySelectorAll('tr').length;

const firstRow = table.querySelector('tr');
let columnsQuantity = firstRow ? firstRow.children.length : 0;

const buttons = document.querySelectorAll('.button');

function updateButtonsState() {
  buttons.forEach(button => {
    if (button.classList.contains('append-row')) {
      button.disabled = rowsQuantity >= 10;
    } else if (button.classList.contains('remove-row')) {
      button.disabled = rowsQuantity <= 2;
    } else if (button.classList.contains('append-column')) {
      button.disabled = columnsQuantity >= 10;
    } else if (button.classList.contains('remove-column')) {
      button.disabled = columnsQuantity <= 2;
    }
  });
}

buttons.forEach(but => {
  but.addEventListener('click', () => {
    const tr = document.querySelectorAll('table tr');

    if (but.classList.contains('append-row')) {
      if (rowsQuantity < 10) {
        const newRow = document.createElement('tr');

        for (let i = 0; i < columnsQuantity; i++) {
          const cell = document.createElement('td');
          newRow.appendChild(cell);
        }

        table.appendChild(newRow);

        rowsQuantity++;
    }
    } else if (but.classList.contains('remove-row')) {
      if (rowsQuantity > 2) {
        const lastRow = tr[tr.length - 1];
        lastRow.remove();

        rowsQuantity--;
      }
    } else if (but.classList.contains('append-column')) {
      if (columnsQuantity < 10) {
          tr.forEach(row => {
          const cell = document.createElement('td');
          row.appendChild(cell);
        });

        columnsQuantity++;
      }
    } else if (but.classList.contains('remove-column')) {
      if (columnsQuantity > 2) {
        tr.forEach(row => {
          row.lastElementChild?.remove();
        });

        columnsQuantity--;
      }
    }
    updateButtonsState();
  });
})

updateButtonsState();
