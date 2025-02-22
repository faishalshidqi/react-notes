import NoteItem from "./NoteItem.tsx";

export default function NotesList({notes}: {notes: {id: string, title: string, body: string, createdAt: string, archived: boolean}[]}) {
    if (notes.length === 0) {
        return <section className='notes-list-empty'><p>There are no notes here!</p></section>
    }
    return (
        <section className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem {...note} key={note.id}/>
                ))
            }
        </section>
    )
}