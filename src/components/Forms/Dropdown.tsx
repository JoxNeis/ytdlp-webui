import { useId } from "react"

interface DropdownOption {
    label: string
    value: string
}

interface DropdownProps {
    name: string
    options: DropdownOption[]
    label?: string
    id?: string
}

function Dropdown({ name, options, label, id }: DropdownProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
        <div className="form-part">
            <label htmlFor={inputId}>
                {label}
            </label>
            <select id={inputId} name={name}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown