let employees = [];
let count = 0;

function addUser() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message");

  if (!name || !profession || !age) {
    message.textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    message.className = "message error";
    return;
  }

  const newEmployee = {
    id: Date.now(),
    name,
    profession,
    age,
  };

  employees.push(newEmployee);
  count++;

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  message.textContent = "Success : Employee Added!";
  message.className = "message success";

  renderEmployees();
}

function deleteUser(id) {
  employees = employees.filter((emp) => emp.id !== id);
  count--;
  renderEmployees();
}

function renderEmployees() {
  const list = document.getElementById("employeeList");
  const countText = document.getElementById("employeeCount");

  list.innerHTML = "";
  if (employees.length === 0) {
    countText.textContent = "You have 0 Employees.";
    countText.className = "gray";
    return;
  }

  countText.textContent = "";

  employees.forEach((emp, index) => {
    const div = document.createElement("div");
    div.className = "employee";
    div.innerHTML = `
      <span class="index">${index + 1}.</span>
      <span>Name : ${emp.name}</span>
      <span>Profession: ${emp.profession}</span>
      <span>Age:${emp.age}</span>
      <button onclick="deleteUser(${emp.id})">Delete User</button>
    `;
    list.appendChild(div);
  });
}
