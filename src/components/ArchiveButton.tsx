import {MdOutlineArchive} from "react-icons/md";

export default function ArchiveButton({id}: {id: string}) {
    return (
        <button type="button" className='action' title='Archive'><MdOutlineArchive/></button>
    )
}