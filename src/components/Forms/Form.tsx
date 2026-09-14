import { useId, type ReactElement, type FormEvent } from "react"

interface FormProps {
    contents: ReactElement[]
    id?: string
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

function Form({ contents, id, onSubmit }: FormProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
        <form id={inputId} onSubmit={onSubmit}>
            {contents.map((content, index) => (
                <div key={content.key ?? index}>{content}</div>
            ))}
        </form>
    )
}

export default Form