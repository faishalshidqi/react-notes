import {Link} from 'react-router-dom'
import {FaArchive} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";

export default function Navigation({onLogout}: {onLogout: () => void}) {
    return <nav className='navigation'>
        <ul>
            <li>
                <Link to='/archives'><FaArchive/></Link>
            </li>
            <li>
                <Link to={'/'} onClick={onLogout}><FiLogOut/></Link>
            </li>
        </ul>
    </nav>
}