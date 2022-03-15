import React, {useState} from 'react';
import {Button, Input, List} from "antd";
import s from './Notes.module.css';
import {Navigate} from "react-router-dom";

const Notes = (props) => {
    const initialState = [
        {id: 1, text: "Первая замтека самая лучшая"},
        {id: 2, text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь"},
        {id: 3, text: "Сложнее всего начать действовать, все остальное зависит только от упорства"},
        {id: 4, text: "Надо любить жизнь больше, чем смысл жизни"},
    ]
    let [notes, setNotes] = useState(initialState)
    let [writingNote, setWritingNote] = useState(null)

    const addNewNote = () => {
        setNotes([...notes, {id: 8, text: writingNote}])
        setWritingNote(null)
    }
    let data = notes.map(note => note.text).reverse()

    if (!props.isAuth.isAuth) return <Navigate to="/login"/>
    return <div className={s.notes}>
        <div className={s.form}>
            <Input value={writingNote}
                   placeholder="Введите текст заметки..."
                   onPressEnter={addNewNote}
                   onChange={(e) => setWritingNote(e.target.value)}/>
            <Button type="primary" onClick={addNewNote}>Добавить</Button>
        </div>
        <List dataSource={data}
              size="small"
              bordered
              renderItem={item => <List.Item>{item}</List.Item>}/>
    </div>
};

export default Notes;
