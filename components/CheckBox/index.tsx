import FormCheck from 'react-bootstrap/FormCheck';
import { useState } from 'react';

interface Props {
    color?: string
    onChange: (value: boolean) => any
    value: string
    inline?: boolean
    id: string

}

export default ({ value, inline = true, onChange, id }: Props) => {
    const [checked, setChecked] = useState(false)
    return (
        <>
            <FormCheck

                id={id}
                custom
                inline={inline}
                label={value}
            >
                <FormCheck.Input type='checkbox' onChange={() => {
                    setChecked(!checked)
                    onChange(!checked)
                }} checked={checked} id={id} />
                <FormCheck.Label htmlFor={id} >{value}</FormCheck.Label>
            </FormCheck>



        </>
    )
}