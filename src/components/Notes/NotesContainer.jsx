import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

import Notes from "./Notes";
import Preloader from "../common/Preloader/Preloader";
import {Context} from "../../firebase/firebase";

const NotesContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [notes, loading] = useCollectionData(
        firestore.collection('notes').where('uid', '==', user.uid)
    )
    const addNewNote = (value, isDone) => {
        firestore.collection('notes').add({
            uid: user.uid,
            text: value,
            isDone: false,
            createdAt: firebaseApp.firestore.FieldValue.serverTimestamp(),
        })
    }

    if (props.loading) return <Preloader/>
    if (!props.user) return <Navigate to="/login"/>
    return <Notes notes={notes}
                  loading={loading}
                  addNewNote={addNewNote}/>
};

export default NotesContainer;