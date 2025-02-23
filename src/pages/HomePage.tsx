import NotesList from "../components/NotesList.tsx"
import {Component} from "react"
import AddNoteButton from "../components/AddNoteButton.tsx"
import {archiveNote, deleteNote, getActiveNotes} from "../utils/data.ts"
import SearchBar from "../components/SearchBar.tsx";

export default class HomePage extends Component<unknown, { notes: { id: string, title: string, body: string, createdAt: string, archived: boolean }[], keyword: string }> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            notes: getActiveNotes(),
            keyword: '',
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }
    onSearchHandler({keyword}: { keyword: string }) {
        this.setState(() => ({keyword: keyword}))
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
        const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()))
        return (
            <section className="homepage">
                <h2>Active Notes</h2>
                <SearchBar searchNotes={this.onSearchHandler}/>
                <NotesList notes={notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
                <div className="homepage__action">
                    <AddNoteButton/>
                </div>
            </section>
        )
    }
}