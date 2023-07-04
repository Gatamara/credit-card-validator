import { useState } from "react"

const useFormulario = (inicial: any) => {
    const [formulario, setFormulario] = useState(inicial)

    const handleChange = (e: any) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value

        })
    }
    return [formulario, handleChange]
}
export default useFormulario