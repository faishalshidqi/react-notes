export default function NoteInput() {
    return (
        <>
            <div className='add-new-page__input'>
                <input className='add-new-page__input__title' placeholder='Judul Catatan' />
                <div className='add-new-page__input__body' data-placeholder='Judul Catatan' contentEditable>
                </div>
            </div>
        </>
    )
}