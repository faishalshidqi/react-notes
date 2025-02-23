export default function NoteDetail({title, body, createdAt}: {title: string, body: string, createdAt: string}) {
    return (
        <>
            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{createdAt}</p>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                <DeleteButton id={id}/>
            </div>
        </>
    )
}