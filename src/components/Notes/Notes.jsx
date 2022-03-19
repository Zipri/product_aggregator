import React, {useEffect, useState} from 'react';
import {Button, Input, List} from "antd";
import s from './Notes.module.css';
import Preloader from "../common/Preloader/Preloader";

const Notes = (props) => {
    let [writingNote, setWritingNote] = useState(null)

    const addNewNote = () => {
        props.addNewNote(writingNote)
        setWritingNote(null)
    }

    return <div className={s.notes}>
        <div className={s.form}>
            <Input value={writingNote}
                   placeholder="Введите текст заметки..."
                   onPressEnter={addNewNote}
                   onChange={(e) => setWritingNote(e.target.value)}/>
            <Button type="primary" onClick={addNewNote}>Добавить</Button>
        </div>
        {props.notes
            ? <List dataSource={props.notes.map(note => note.text).reverse()}
                    size="small"
                    bordered
                    renderItem={item => <List.Item>{item}</List.Item>}/>
            : <Preloader/>
        }
    </div>
};

export default Notes;
