import SendButton from './SendButton.tsx'
import {Component} from 'react'

export default class NoteInput extends Component<{addNote: ({title, body}: {title: string, body: string}) => void}, {id: string, title: string, body: string, createdAt: string, archived: boolean}> {
    constructor(props: { addNote: ({ title, body }: { title: string, body: string }) => void }) {
        super(props)
        this.state = {
            id: '',
            title: '',
            body: '',
            createdAt: '',
            archived: false,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onTitleChangeEventHandler = (event: { target: { value: string} }) => {
        if (event.target.value.length <= 50) {
            this.setState(() => ({title: event.target.value}))
        }
    }
    onBodyChangeEventHandler = (event: { target: { value: string } } ) => {
        this.setState(() => ({body: event.target.value}))
    }
    onSubmit = (event: {preventDefault: () => void}) => {
        event.preventDefault()
        this.props.addNote(this.state)
        this.setState(() => ({id: '', title: '', body: '', createdAt: '', archived: false}))
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='add-new-page__input'>
                    <input className='add-new-page__input__title' placeholder='Judul Catatan' required value={this.state.title} onChange={this.onTitleChangeEventHandler} type='text' />
                    <textarea className='add-new-page__input__body' placeholder='Konten Catatan' required value={this.state.body} onChange={this.onBodyChangeEventHandler} typeof='text'></textarea>
                    <div className='add-new-page__action'>
                        <SendButton/>
                    </div>
                </div>
            </form>
        )
    }
}