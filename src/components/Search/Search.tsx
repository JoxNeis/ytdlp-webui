import Form from "../Forms/Form"
import Textbox from "../Forms/Textbox"
import './Search.css'

function Search() {
    function onSubmit() {

    }
    return (
        <div className="search-bar">
            <p>Put your youtube url here:</p>
            <Form id="searchbar" onSubmitData={onSubmit}>
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
