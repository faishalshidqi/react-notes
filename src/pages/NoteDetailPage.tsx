import NoteDetail from "../components/NoteDetail.tsx";
import {Component} from "react";
import {getNote} from "../utils/data.ts"
import {useParams} from "react-router-dom";

export default function DetailPageWrapper() {
    const {id} = useParams()
    return <DetailPage id={id ?? ''}/>
}

class DetailPage extends Component<{id: string}, {note: {id: string, title: string, body: string, createdAt: string, archived: boolean}|undefined}> {
    constructor(props: {id: string}) {
        super(props)
        this.state = {
            note: getNote(props.id)
        }
    }
    render() {
        return (
            <section className="detail-page">
                <NoteDetail id={this.state.note?.id ?? ''} title={this.state.note?.title ?? ''} body={this.state.note?.body ?? ''} createdAt={this.state.note?.createdAt ?? ''} />
            </section>
        )
    }
}