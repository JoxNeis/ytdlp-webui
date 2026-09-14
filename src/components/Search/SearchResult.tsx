import './SearchResult.css'

interface SearchResultProps {
    title: string
    channel: string
    length: string
    uploadedAt: string
    thumbnailUrl: string
}

function SearchResult({ title, channel, length, uploadedAt, thumbnailUrl }: SearchResultProps) {
    return (
        <div className="search-result">
            <img src={thumbnailUrl} alt={title} />
            <div>
                <p>{title}</p>
                <p>{channel}</p>
                <p>{length}</p>
                <p>{uploadedAt}</p>
            </div>
        </div>
    )
}

export default SearchResult