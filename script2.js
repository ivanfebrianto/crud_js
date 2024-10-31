let users = [];
let currentIndex = -1;

//function add data
document.querySelector("#form-data").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const inputEmail = form.inputEmail.value;
  const inputPassword = form.inputPassword.value;
  if (currentIndex === -1) {
    users.push({ inputEmail, inputPassword });
  } else {
    users[currentIndex] = { inputEmail, inputPassword };
    currentIndex = -1;
  }

  //panggil function display
  displayForm();
});

const displayForm = () => {
  const dataList = document.querySelector("#data-list");
  dataList.innerHTML = users
    .map(
      (user, index) =>
        `<tr id = ${index}>
        <td scope="col" name = "email">${user.inputEmail}</td>
        <td scope="col" name = "pw">${user.inputPassword}</td>
        <td scope="col">
            <button type = "button" class="btn btn-warning" onclick = "editBtn(${index})" >Edit</button>
            <button type = "button" class="btn btn-danger" onclick = "delBtn(${index})">Delete</button>
        </td>
  </tr> `
    )
    .join("");
};

//function Show/hide
const toggleBtn = () => {
  const dataTables = document.querySelector("#table-data");
  if (dataTables.classList.contains("hidden")) {
    dataTables.classList.remove("hidden");
  } else {
    dataTables.classList.add("hidden");
  }
};

//function delete data

const delBtn = (index) => {
  users.splice(index, 1);
  displayForm();
};

//function edit data

const editBtn = (index) => {
  const user = users[index];
  const form = document.querySelector("#form-data");
  form.inputEmail.value = user.inputEmail; // Populate the email field
  form.inputPassword.value = user.inputPassword; // Populate the password field
  currentIndex = index; // Set the current index for updating
};
