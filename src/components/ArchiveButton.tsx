import {MdOutlineArchive, MdOutlineUnarchive} from 'react-icons/md'

export default function ArchiveButton({id, onArchive, archived}: {id: string, onArchive: (id: string) => void, archived: boolean}) {
    return (
        <button type='button' className='action' title='Archive' onClick={() => onArchive(id)}>{!archived ? <MdOutlineArchive/> : <MdOutlineUnarchive/>}</button>
    )
}