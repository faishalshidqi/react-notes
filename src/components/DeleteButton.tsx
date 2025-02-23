import {FaTrash} from "react-icons/fa";

export default function DeleteButton({id}: {id: string}) {
    return (
        <button type="button" className='action' title='Delete'><FaTrash/></button>
    )
}