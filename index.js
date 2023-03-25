const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})