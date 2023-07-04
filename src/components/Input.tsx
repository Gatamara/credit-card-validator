import { useField } from "formik"
import '../App.css'

interface Props {
    label: string
    name: string
    validate?: (value: string) => string


}

export const Input = ({ name, label, ...props }: Props) => {

    const [field, meta] = useField({ ...props, name })

    return (
        <div>
            <label> {label} </label>
            <input {...field} {...props} className='input' />

            {meta.touched && meta.error ? <div className="error-menssage">{meta.error}</div> : null}
        </div>
    )
}
