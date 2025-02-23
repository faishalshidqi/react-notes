import {IoMdCheckmark} from "react-icons/io"

export default function SendButton() {
    return (
        <button type="button" className='action' title='Send'>
            <IoMdCheckmark/>
        </button>
    )
}