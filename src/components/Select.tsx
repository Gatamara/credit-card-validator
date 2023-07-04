import { useField } from 'formik'

interface Props {
    label: string
    name: string
    children: React.ReactNode | React.ReactNode[]
}

export const Select = ({ label, ...props }: Props) => {
    const [field] = useField(props)


    return (
        <div>
            <label htmlFor="">{label} </label>
            <select {...field} {...props} className='input' ></select>

        </div>
    )
}
