import NotesAppHeader from "./NotesAppHeader.tsx";
import HomePage from "../pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import ArchivePage from "./ArchivePage.tsx";

export default function NotesApp() {
    return (
        <div className='app-container'>
            <NotesAppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/archives' element={<ArchivePage/>} />
                </Routes>
            </main>
        </div>
    )
}