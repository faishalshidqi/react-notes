export default function NotesAppHeader() {
    return (
        <header>
            <h1>
                <a href='/'>Notes App</a>
            </h1>
            <nav className='navigation'>
                <ul>
                    <li>
                        <a href='/archives'>Archive</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}