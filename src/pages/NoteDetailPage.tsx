import NoteDetail from "../components/NoteDetail.tsx";
import {Component} from "react";
import {archiveNote, deleteNote, getNote, unarchiveNote} from "../utils/data.ts"
import {useNavigate, useParams} from "react-router-dom";

export default function DetailPageWrapper() {
    const {id} = useParams()
    const navigate = useNavigate()
    function onDeleteHandler() {
        if (id != null) {
            deleteNote(id)
        }
        navigate('/')
    }
    function onArchiveHandler() {
        if (id != null) {
            const note = getNote(id)
            if (!note!.archived) {
                archiveNote(id)
            } else {
                unarchiveNote(id)
            }
        }
        navigate('/')
    }
    return <DetailPage id={id ?? ''} onDelete={onDeleteHandler} onArchive={onArchiveHandler}/>
}

class DetailPage extends Component<{id: string, onDelete: (id: string) => void, onArchive: (id: string) => void}, {note: {id: string, title: string, body: string, createdAt: string, archived: boolean}|undefined}> {
    constructor(props: {id: string, onDelete: (id: string) => void, onArchive: (id: string) => void}) {
        super(props)
        this.state = {
            note: getNote(props.id)
        }
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }
    onArchiveHandler(id: string) {
        this.props.onArchive(id);
    }
    onDeleteHandler(id: string) {
        this.props.onDelete(id)
    }
    render() {
        return (
            <section className="detail-page">
                <NoteDetail onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} id={this.state.note?.id ?? ''} title={this.state.note?.title ?? ''} body={this.state.note?.body ?? ''} createdAt={this.state.note?.createdAt ?? ''} archived={this.state.note?.archived ?? false} />
            </section>
        )
    }
}