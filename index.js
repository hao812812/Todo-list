// 初始變數
const allList = document.querySelector("#list-area");
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式 新增事件todo
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}
//加入done
function addDone(text) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  allList.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (inputValue.length > 0) {
    addItem(inputValue);
  }
});

//按下enter鍵，可以新增到todo
input.addEventListener("keyup", function (event) {
  const inputValue = input.value.trim();
  if (event.key === "Enter" && inputValue.length > 0) {
    addItem(inputValue);
  }
});

//點擊清單，送進done，done內也需要可刪除
allList.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    if (!target.classList.contains("checked")) {
      addDone(target.innerText);
      parentElement.remove();
    }
  }
});