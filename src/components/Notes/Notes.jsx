import React, {useState} from 'react';
import {addNote} from "../../redux/product-reducer";
import './Notes.css';
import {Button} from "antd";

const Notes = (props) => {
    let [notes, setNotes] = useState(props.notes)
    let newNote = React.createRef()

    const addNewNote = () => {
        let noteText = newNote.current.value
        setNotes([...notes, {id: 8, text: noteText}])
        // props.dispatch(addNote(noteText))
    }

    return <div className="notes">
        <div>
            <textarea ref={newNote}/>
            <Button type="primary" onClick={addNewNote}>+</Button>
        </div>
        {notes.map(note => <div>{note.text}</div>)}
    </div>
};

export default Notes;
