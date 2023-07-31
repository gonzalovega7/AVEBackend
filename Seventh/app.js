document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskTable = document.getElementById("taskTable");
    const clearButton = document.getElementById("clearButton");
  
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const taskName = document.getElementById("taskName").value;
      const taskDate = document.getElementById("taskDate").value;
      const taskPriority = document.getElementById("taskPriority").value;
      const taskDescription = document.getElementById("taskDescription").value;
  
      const newRow = taskTable.insertRow(-1);
  
      const nameCell = newRow.insertCell(0);
      const dateCell = newRow.insertCell(1);
      const priorityCell = newRow.insertCell(2);
      const descriptionCell = newRow.insertCell(3);
      const actionsCell = newRow.insertCell(4);
  
      nameCell.innerHTML = taskName;
      dateCell.innerHTML = taskDate;
      priorityCell.innerHTML = taskPriority;
      descriptionCell.innerHTML = taskDescription;
      actionsCell.innerHTML = `
        <div class="actions">
          <button onclick="editRow(this)">Editar</button>
          <button onclick="deleteRow(this)">Borrar</button>
        </div>
      `;
  
      taskForm.reset();
    });
  
    clearButton.addEventListener("click", () => {
      taskForm.reset();
    });
  });
  
  function editRow(button) {
    const row = button.parentNode.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");
  
    const taskName = cells[0].innerText;
    const taskDate = cells[1].innerText;
    const taskPriority = cells[2].innerText;
    const taskDescription = cells[3].innerText;
  
    document.getElementById("taskName").value = taskName;
    document.getElementById("taskDate").value = taskDate;
    document.getElementById("taskPriority").value = taskPriority;
    document.getElementById("taskDescription").value = taskDescription;
  
    row.remove();
  }
  
  function deleteRow(button) {
    const row = button.parentNode.parentNode.parentNode;
    row.remove();
  }