import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
	databaseURL: "https://development-kgr-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, updateShoppingListEl())
	clearInputFieldEl()
    updateShoppingListEl(inputValue)
})

function clearInputFieldEl() {
	inputFieldEl.value = ""
}

function updateShoppingListEl(itemValue) {
	shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}