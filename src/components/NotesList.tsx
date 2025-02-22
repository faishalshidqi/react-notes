export default function NotesList({notes}: {notes: {id: string, title: string, body: string, createdAt: string, archived: boolean}[]}) {
    return (
        <section className="notes-list">
            {
                notes.map((note) => {
                    return (
                        <li key={note.id}></li>
                    )
                })
            }
        </section>
    )
}