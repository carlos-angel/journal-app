import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../journal.slice';

const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export default startNewNote;
