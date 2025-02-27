import Navigation from './Navigation.tsx'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import UserAuthContext from '../contexts/UserAuthContext.ts'

export default function NotesAppHeader({onLogout}: {onLogout: () => void}) {
    const userContext = useContext(UserAuthContext);
    const not_authed = (
        <header>
            <h1>
                <Link to='/'>Notes App</Link>
            </h1>
        </header>
    )
    const authed = (
        <header>
            <h1>
                <Link to='/'>Notes App</Link>
            </h1>
            <Navigation onLogout={onLogout} />
        </header>
    )
    return userContext.id === '' ? not_authed : authed
}