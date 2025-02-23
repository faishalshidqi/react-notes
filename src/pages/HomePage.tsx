import NotesList from "../components/NotesList.tsx";
import {Component} from "react";
import {archiveNote, deleteNote, getActiveNotes} from "../utils/data.ts";
import AddNoteButton from "../components/AddNoteButton.tsx";

export default class HomePage extends Component<unknown, { notes: { id: string, title: string, body: string, createdAt: string, archived: boolean }[] }> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            notes: getActiveNotes()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }
    onDeleteHandler(id: string){
        deleteNote(id)
        this.setState(() => {
            return {
                notes: getActiveNotes()
            }
        })
    }
    onArchiveHandler(id: string){
        archiveNote(id)
        this.setState(() => {
            return {
                notes: getActiveNotes()
            }
        })
    }
    render() {
        return (
            <section className="homepage">
                <h2>Active Notes</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                <div className="homepage__action">
                    <AddNoteButton/>
                </div>
            </section>
        )
    }
}