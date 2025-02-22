import NotesList from "./NotesList.tsx";
import {Component} from "react";
import {getArchivedNotes} from "../utils/data.ts";

export default class ArchivePage extends Component<unknown, {notes: {id: string, title: string, body: string, createdAt: string, archived: boolean}[]}> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            notes: getArchivedNotes()
        }
    }
    render() {
        return (
            <section className="archives-page">
                <h2>Archived Notes</h2>
                <NotesList notes={this.state.notes}/>
            </section>
        )
    }
}