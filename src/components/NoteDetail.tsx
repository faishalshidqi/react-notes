import DeleteButton from "./DeleteButton.tsx";
import ArchiveButton from "./ArchiveButton.tsx";

export default function NoteDetail({id, title, body, createdAt, archived}: {id: string, title: string, body: string, createdAt: string, archived: boolean}) {
    return (
        <>
            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{createdAt}</p>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                <ArchiveButton id={id} archived={archived} />
                <DeleteButton id={id}/>
            </div>
        </>
    )
}