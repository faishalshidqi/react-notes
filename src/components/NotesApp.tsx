import NotesAppHeader from './NotesAppHeader.tsx'
import HomePage from '../pages/HomePage.tsx'
import {Route, Routes} from 'react-router-dom'
import ArchivePage from '../pages/ArchivePage.tsx'
import DetailPageWrapper from '../pages/NoteDetailPage.tsx'
import AddNotePage from '../pages/AddNotePage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'
import {useState, useEffect, useMemo} from 'react'
import LoginPage from '../pages/LoginPage.tsx'
import RegisterPage from '../pages/RegisterPage.tsx'
import {getUserLogged, putAccessToken} from '../utils/data.ts'
import UserAuthContext, {UserAuthProvider} from '../contexts/UserAuthContext.ts'

export default function NotesApp() {
    const [user, setUser] = useState<{id: string, name: string, email: string}>({id: '', name: '', email: ''})
    const userAuthContextValue = useMemo(() => {
        return {
            user
        }
    }, [user])
    async function onSuccessLogin({accessToken}: {accessToken: string}) {
        putAccessToken(accessToken)
        const {data} = await getUserLogged()
        setUser(data)
    }
    const onLogout = () => {
        setUser({id: '', name: '', email: ''})
        putAccessToken('')
    }

    useEffect(() => {
        getUserLogged().then(({error, data}) => {
            if (error) (setUser({id: '', name: '', email: ''}))
            if (!error) setUser(data)
        })
    }, [])

    const not_authed = (
        <UserAuthProvider value={userAuthContextValue.user}>
            <div className='app-container'>
                <NotesAppHeader onLogout={onLogout} />
                <main>
                    <Routes>
                        <Route path='/' element={<LoginPage onSuccessLogin={onSuccessLogin}/>} />
                        <Route path='/register' element={<RegisterPage/>} />
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </main>
            </div>
        </UserAuthProvider>
    )

    const authed = (
        <UserAuthContext.Provider value={user}>
            <div className='app-container'>
                <NotesAppHeader onLogout={onLogout} />
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
        </UserAuthContext.Provider>
    )

    return user.id === '' ? not_authed : authed
}