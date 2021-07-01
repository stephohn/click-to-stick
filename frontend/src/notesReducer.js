export default function notesReducer(state = {notes: []}, action) {
    debugger
    switch (action.type) {
        case "ADD_NOTE":
            return {notes: [...state.notes, action.payload]}
        case "FETCH_NOTES":
            return {notes: action.payload}
        case "DELETE_NOTE":
            return {notes: state.notes.filter(note => note.id !== action.payload)}
        default:
            return state
    }
}