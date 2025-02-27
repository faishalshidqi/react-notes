import NotesList from '../components/NotesList.tsx'
import {Component} from 'react'
import {deleteNote, getArchivedNotes, unarchiveNote} from '../utils/data.ts'
import SearchBar from '../components/SearchBar.tsx'

export default class ArchivePage extends Component<unknown, {notes: {id: string, title: string, body: string, createdAt: string, archived: boolean}[], keyword: string}> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            notes: [],
            keyword: '',
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }
    onSearchHandler({keyword}: { keyword: string }) {
        this.setState(() => ({keyword: keyword}))
    }
    async onDeleteHandler(id: string){
        await deleteNote(id)
        const {data} = await getArchivedNotes()
        this.setState(() => {
            return {
                notes: data
            }
        })
    }
    async onArchiveHandler(id: string){
        await unarchiveNote(id)
        const {data} = await getArchivedNotes()
        this.setState(() => {
            return {
                notes: data
            }
        })
    }

    async componentDidMount() {
        const {data} = await getArchivedNotes()
        this.setState(() => {
            return {
                notes: data
            }
        })
    }

    render() {
        const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()))
        return (
            <section className='archives-page'>
                <SearchBar searchNotes={this.onSearchHandler}/>
                <h2>Archived Notes</h2>
                <NotesList notes={notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}