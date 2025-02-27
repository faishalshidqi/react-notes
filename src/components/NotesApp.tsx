import NotesAppHeader from './NotesAppHeader.tsx'
import HomePage from '../pages/HomePage.tsx'
import {Route, Routes} from 'react-router-dom'
import ArchivePage from '../pages/ArchivePage.tsx'
import DetailPageWrapper from '../pages/NoteDetailPage.tsx'
import AddNotePage from '../pages/AddNotePage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'
import {useState, useEffect} from 'react'
import LoginPage from '../pages/LoginPage.tsx'
import RegisterPage from '../pages/RegisterPage.tsx'
import {getUserLogged, putAccessToken} from "../utils/data.ts";

export default function NotesApp() {
    const [user, setUser] = useState<{id: string, name: string, email: string}>({id: '', name: '', email: ''})
    async function onSuccessLogin({accessToken}: {accessToken: string}) {
        putAccessToken(accessToken)
        const {data} = await getUserLogged()
        setUser(data)
    }
    useEffect(() => {
        getUserLogged().then(({error, data}) => {
            if (error) (setUser({id: '', name: '', email: ''}))
            if (!error) setUser(data)
        })
    }, [])

    const not_authed = (
        <div className='app-container'>
            <NotesAppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<LoginPage onSuccessLogin={onSuccessLogin}/>} />
                    <Route path='/register' element={<RegisterPage/>} />
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </main>
        </div>
    )

    const authed = (
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

    return user.id === '' ? not_authed : authed
}