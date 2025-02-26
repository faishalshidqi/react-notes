import NoteInput from '../components/NoteInput.tsx'
import {addNote} from '../utils/data.ts'
import {useNavigate} from 'react-router-dom'

export default function AddNotePage() {
    const navigate = useNavigate()
    const onAddNoteHandler = ({title, body}: {title: string, body: string}): void => {
        addNote({title, body})
        navigate('/')
    }
    return (
        <div className='add-new-page'>
            <h2>Add Note</h2>
            <NoteInput addNote={onAddNoteHandler} />
        </div>
    )
}