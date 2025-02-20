import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/model/NoteModel";
import NoteForm from "../components/note";
import "../styles/home.css"


function Home(){

    const [notes, setNotes] = useState<Note[]>([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")


    let GET_NOTES_ENDPOINT = import.meta.env.VITE_GET_NOTE_ENDPOINT;
    let DELETE_NOTE_ENDPOINT = import.meta.env.VITE_DELETE_NOTE_ENDPOINT;

    useEffect(() => {
        getNote();
    },[])

    const getNote = () => {
        api.get(GET_NOTES_ENDPOINT)
            .then((resp) => resp.data)
            .then((data) => {setNotes(data); console.log(data)})
            .catch((err) => alert(err))
    }

    const deleteNote = (id:string)  =>{
        api.delete(DELETE_NOTE_ENDPOINT+`${id}/`)
        .then((res) => {
            if(res.status === 204) alert("Note Was Deleted");
            else alert("Failed To Delete Note");
            getNote()
            })
        .catch((err) => alert(err))
    }

    const createNote = (e:any) =>{
        e.preventDefault()
        api.post(GET_NOTES_ENDPOINT, {content,title})
        .then((res) =>{
            if(res.status === 201) alert("NOTE ADDED SUCCESSFULLY");
            else alert("SOMETHING FAILED");
            getNote()
            }).
        catch((err) => alert("ERR: " + err))
    }
    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <NoteForm note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );

}

export default Home;