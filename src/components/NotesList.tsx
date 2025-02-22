import NoteItem from "./NoteItem.tsx";

export default function NotesList({notes}: {notes: {id: string, title: string, body: string, createdAt: string, archived: boolean}[]}) {
    return (
        <section className="notes-list">
            {
                notes.map((note) => {
                    return (
                        <NoteItem {...note} key={note.id}/>
                    )
                })
            }
        </section>
    )
}