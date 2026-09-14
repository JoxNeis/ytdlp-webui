import { useId, useState } from "react"

interface SearchableDropdownOption {
    label: string
    value: string
}

interface SearchableDropdownProps {
    name: string
    options: SearchableDropdownOption[]
    label?: string
    id?: string
}

function SearchableDropdown({ name, options, label, id }: SearchableDropdownProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    const [keyword, setKeyword] = useState("")

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(keyword.toLowerCase())
    )

    return (
        <div className="form-part">
            <label htmlFor={inputId}>
                {label}
            </label>
            <input
                type="text"
                name="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
            />
            <select id={inputId} name={name}>
                {filteredOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SearchableDropdown