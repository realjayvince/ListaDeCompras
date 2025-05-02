const input = document.querySelector("input");
const ul = document.querySelector("ul");

function enterKey() {

    const li = document.createElement("li");
    li.textContent = input.value;
    ul.append(li);
    input.value = "";

}
function deleteLastItem() {
    const ul = document.querySelector("ul");
    const lastItem = ul.lastElementChild;

    if (lastItem) {
        lastItem.remove();
    }
}

function clearList() {
    ul.innerHTML = "";
}
