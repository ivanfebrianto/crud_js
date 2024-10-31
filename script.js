let users = [];

const displayUser = () => {
  const dataList = document.querySelector("#data-list");
  dataList.innerHTML = users
    .map(
      (user, index) => `
        <tr>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>
        <button class = "btn btn-warning" type = "button"> Edit </button>
        <button class="btn btn-danger" type="button" onclick="DelBtn(${index})">Delete</button>
        </td>
        </tr>`
    )
    .join("");
};
//Function for add data to array users
document.querySelector("#form-data").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.inputEmail.value;
  const password = form.inputPassword.value;

  users.push({ email, password }); //push to array

  console.log(users);
  displayUser();
});

//Function for delete datas from array users
const DelBtn = (index) => {
  users.splice(index, 1);
  displayUser();
};

//function to show/hide layout
const toggleBtn = () => {
  const dataList = document.querySelector("#table-data");
  if (dataList.classList.contains("hidden")) {
    dataList.classList.remove("hidden");
  } else {
    dataList.classList.add("hidden");
  }
};
