import Navigation from "./Navigation.tsx";
import {Link} from "react-router-dom";

export default function NotesAppHeader() {
    return (
        <header>
            <h1>
                <Link to='/'>Notes App</Link>
            </h1>
            <Navigation/>
        </header>
    )
}