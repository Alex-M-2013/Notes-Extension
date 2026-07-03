const body = document.querySelector("body")
const user_input = document.getElementById("user-input")
const add_note_button = document.getElementById("add-note-button")

function add_note() {
    const user_input_value = user_input.value
    
    const user_note = document.createElement("p")
    const user_note_text = document.createTextNode(user_input_value)
    user_note.append(user_note_text)

    const remove_button = document.createElement("button")
    const remove_button_text = document.createTextNode("Remove")
    remove_button.append(remove_button_text)

    function remove_note() {
        body.removeChild(user_note)
        body.removeChild(remove_button)
    }

    remove_button.addEventListener("click", remove_note)

    body.append(user_note, remove_button)
}

add_note_button.addEventListener("click", add_note)