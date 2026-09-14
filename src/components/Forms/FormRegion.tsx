import { useId, type ReactElement, type FormEvent } from "react"

interface FormRegionProps {
    name: string
    contents: ReactElement[]
    id?: string
    onSubmitData?: (data: Record<string, string>) => void
}

function FormRegion({ name, contents, id, onSubmitData }: FormRegionProps) {
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
        <div id={inputId} className="form-region">
            <form name={name} onSubmit={handleSubmit}>
                {contents.map((content, index) => (
                    <div key={content.key ?? index}>{content}</div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormRegion