import { useId, type ReactNode, type FormEvent } from "react"

interface FormProps {
    children: ReactNode
    id?: string
    submitLabel?: string
    onSubmitData?: (data: Record<string, string>) => void
}

function Form({ children, id, submitLabel = "Submit", onSubmitData }: FormProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data: Record<string, string> = {}
        formData.forEach((value, key) => {
            data[key] = value.toString()
        })
        console.log(JSON.stringify(data, null, 2))
        onSubmitData?.(data)
    }

    return (
        <form id={inputId} onSubmit={handleSubmit}>
            {children}
            <button type="submit">{submitLabel}</button>
        </form>
    )
}

export default Form