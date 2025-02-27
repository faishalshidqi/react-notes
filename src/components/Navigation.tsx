import {Link} from 'react-router-dom'
import {FaArchive} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import LocaleContext from '../contexts/LocaleContext.ts'
import {useContext} from 'react'
import {MdGTranslate} from "react-icons/md";

export default function Navigation({onLogout}: {onLogout: () => void}) {
    const locale = useContext(LocaleContext)
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <a onClick={locale.toggleLocale}><MdGTranslate/></a>
                </li>
                <li>
                    <Link to='/archives'><FaArchive/></Link>
                </li>
                <li>
                    <a onClick={onLogout}><FiLogOut/></a>
                </li>
            </ul>
        </nav>
    )
}