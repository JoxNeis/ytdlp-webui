import Form from "./components/Forms/Form"
import Textbox from "./components/Forms/Textbox"
import './Search.css'

function Search() {
    return (
        <div className="search-bar">
            <p>Put your youtube url here:</p>
            <Form id="searchbar">
                <Textbox
                    key="query"
                    name="query"
                    placeholder="Search..."
                />
            </Form>
        </div>
    )
}

export default Search
