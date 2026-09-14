import { useId, type ReactNode } from "react"

interface FormRegionProps {
    name: string
    children: ReactNode
    id?: string
}

function FormRegion({ name, children, id }: FormRegionProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
        <div id={inputId} className="form-region" data-name={name}>
            {children}
        </div>
    )
}

export default FormRegion
