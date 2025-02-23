import NotesList from "../components/NotesList.tsx"
import {Component} from "react"
import {deleteNote, getArchivedNotes, unarchiveNote} from "../utils/data.ts"

export default class ArchivePage extends Component<unknown, {notes: {id: string, title: string, body: string, createdAt: string, archived: boolean}[]}> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            notes: getArchivedNotes()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
    }
    onDeleteHandler(id: string){
        deleteNote(id)
        this.setState(() => {
            return {
                notes: getArchivedNotes()
            }
        })
    }
    onArchiveHandler(id: string){
        unarchiveNote(id)
        this.setState(() => {
            return {
                notes: getArchivedNotes()
            }
        })
    }

    render() {
        return (
            <section className="archives-page">
                <h2>Archived Notes</h2>
                <NotesList notes={this.state.notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}