import NotesAppHeader from "./NotesAppHeader.tsx";
import HomePage from "../pages/HomePage.tsx";

export default function NotesApp() {
    return (
        <div className='app-container'>
            <NotesAppHeader />
            <main>
                <HomePage/>
            </main>
        </div>
    )
}