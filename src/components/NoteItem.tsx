import {showFormattedDate} from "../utils/data.ts";

export default function NoteItem({id, title, body, createdAt}: {id: string, title: string, body: string, createdAt: string}) {
    return (
        <article className="note-item">
            <h3 className='note-item__title'>
                <a href={`/notes/${id}`}>{title}</a>
            </h3>
            <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
        </article>
    )
}