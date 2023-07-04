import { useField } from "formik"
import '../App.css'

interface Props {
    label: string
    name: string
    maxLength?: number
    type?: string
    validate?: (value: string) => string
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export const TextInput = ({ name, label, ...props }: Props) => {

    const [field, meta] = useField({ ...props, name })

    return (
        <div>
            <label> {label} </label>
            <input {...field} {...props} className='input' />

            {meta.touched && meta.error ? <div className="error-menssage">{meta.error}</div> : null}
        </div>
    )
}
