import NotesAppHeader from './NotesAppHeader.tsx'
import HomePage from '../pages/HomePage.tsx'
import {Route, Routes} from 'react-router-dom'
import ArchivePage from '../pages/ArchivePage.tsx'
import DetailPageWrapper from '../pages/NoteDetailPage.tsx'
import AddNotePage from '../pages/AddNotePage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'
import {useState} from 'react'
import LoginPage from '../pages/LoginPage.tsx'
import RegisterPage from '../pages/RegisterPage.tsx'

export default function NotesApp() {
    const [user, setUser] = useState<{id: string, name: string, email: string}>({id: '', name: '', email: ''})

    if (user.id === '') {
        return (
            <div className='app-container'>
                <NotesAppHeader />
                <main>
                    <Routes>
                        <Route path='/' element={<LoginPage/>} />
                        <Route path='/register' element={<RegisterPage/>} />
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </main>
            </div>
        )
    }

    return (
        <div className='app-container'>
            <NotesAppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/archives' element={<ArchivePage/>} />
                    <Route path='/notes/:id' element={<DetailPageWrapper/>} />
                    <Route path='/notes/new' element={<AddNotePage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </main>
        </div>
    )
}