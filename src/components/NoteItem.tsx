import {showFormattedDate} from "../utils/data.ts";
import {Link} from "react-router-dom";
import DeleteButton from "./DeleteButton.tsx";
import ArchiveButton from "./ArchiveButton.tsx";

export default function NoteItem({id, title, body, createdAt, archived, onDelete, onArchive}: {id: string, title: string, body: string, createdAt: string, archived: boolean, onDelete: (id: string) => void, onArchive: (id: string) => void}) {
    return (
        <article className="note-item">
            <h3 className='note-item__title'>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
            <div className='note-item__action'>
                <ArchiveButton onArchive={() => onArchive(id)} id={id} archived={archived}></ArchiveButton>
                <DeleteButton onDelete={() => onDelete(id)} id={id}></DeleteButton>
            </div>
        </article>
    )
}