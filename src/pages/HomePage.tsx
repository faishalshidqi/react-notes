import NotesList from "../components/NotesList.tsx";
import {Component} from "react";
import {getActiveNotes} from "../utils/data.ts";
import AddNoteButton from "../components/AddNoteButton.tsx";

export default class HomePage extends Component<unknown, { notes: { id: string, title: string, body: string, createdAt: string, archived: boolean }[] }> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            notes: getActiveNotes()
        }
    }

    render() {
        return (
            <section className="homepage">
                <h2>Active Notes</h2>
                <NotesList notes={this.state.notes}/>
                <div className="homepage__action">
                    <AddNoteButton/>
                </div>
            </section>
        )
    }
}