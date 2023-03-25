const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    renderLeads()
})


function renderLeads() {
    let li;
    for (let i = 0; i < myLeads.length; i++) {
        li = document.createElement("li")
        li.textContent = myLeads[i]
    }
    ulEl.appendChild(li)
}


