import {Component} from "react"

export default class SearchBar extends Component<{ searchNotes: ({keyword}: { keyword: string }) => void }, {keyword: string}> {
    constructor(props: { searchNotes: ({ keyword }: { keyword: string }) => void }) {
        super(props)
        this.state = {
            keyword: '',
        }
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }
    onSearchHandler(event: { target: { value: string } }) {
        this.setState(() => ({keyword: event.target.value}))
        this.props.searchNotes({keyword: event.target.value})
    }
    render() {
        console.log(this.state.keyword)
        return (
            <section className="search-bar">
                <input type='text' placeholder='Search by Title' required value={this.state.keyword} onChange={this.onSearchHandler}/>
            </section>
        )
    }
}