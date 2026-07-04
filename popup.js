const body = document.querySelector("body")
const user_input = document.getElementById("user-input")
const add_note_button = document.getElementById("add-note-button")

function save_notes() {
    const notes = [] 

    const all_notes = document.querySelectorAll("p") 

    for (let i = 0; i < all_notes.length; i++) { 
        notes.push(all_notes[i].textContent) 
    }

    localStorage.setItem("notes", JSON.stringify(notes))
}

function add_note() {
    const user_input_value = user_input.value
    if (!user_input_value) {
        return
    }

    const user_note = document.createElement("p")
    const user_note_text = document.createTextNode(user_input_value)
    user_note.append(user_note_text)

    const remove_button = document.createElement("button")
    const remove_button_text = document.createTextNode("Remove")
    remove_button.append(remove_button_text)

    function remove_note() {
        body.removeChild(user_note)
        body.removeChild(remove_button)
        save_notes() 
    }

    remove_button.addEventListener("click", remove_note)

    body.append(user_note, remove_button)

    save_notes() 
    user_input.value = "" 
}

function load_notes() {
    const saved_notes = localStorage.getItem("notes") 

    const notes = saved_notes ? JSON.parse(saved_notes) : []

    for (let i = 0; i < notes.length; i++) { 
        user_input.value = notes[i] 
        add_note() 
    }

    user_input.value = "" 
}

add_note_button.addEventListener("click", add_note)
load_notes() 