import { useId } from "react"

interface TextboxProps {
    name: string
    placeholder: string
    label?: string
    type?: string
    id?: string
}

function Textbox({ name, placeholder, label, type = "text", id }: TextboxProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId
    return (
        <div className="form-part">
            <label htmlFor={inputId}>
                {label}
            </label>
            <input
                id={inputId}
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Textbox