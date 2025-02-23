import {FiTrash} from "react-icons/fi";

export default function DeleteButton({id}: {id: string}) {
    return (
        <button type="button" className='action' title='Delete'><FiTrash/></button>
    )
}