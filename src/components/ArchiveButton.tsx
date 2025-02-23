import {MdOutlineArchive, MdOutlineUnarchive} from "react-icons/md";

export default function ArchiveButton({id, archived}: {id: string, archived: boolean}) {
    return (
        <button type="button" className='action' title='Archive'>{archived ? <MdOutlineArchive/> : <MdOutlineUnarchive/>}</button>
    )
}