import NoteInput from "../components/NoteInput.tsx"
import {Component} from "react"
import {addNote} from "../utils/data.ts";

export default class AddNotePage extends Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }
    onAddNoteHandler = ({title, body}: {title: string, body: string}): void => {
        this.setState(() => {
            addNote({title, body})
        })
    }
    render() {
        return (
            <div className='add-new-page'>
                <h2>Add Note</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
            </div>
        )
    }
}