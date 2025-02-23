import DeleteButton from "./DeleteButton.tsx"
import ArchiveButton from "./ArchiveButton.tsx"
import {showFormattedDate} from "../utils/data.ts"

export default function NoteDetail({id, title, body, createdAt, archived, onDelete, onArchive}: {id: string, title: string, body: string, createdAt: string, archived: boolean, onDelete: (id: string) => void, onArchive: (id: string) => void}) {
    return (
        <>
            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </>
    )
}