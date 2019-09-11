import { Form } from 'react-bootstrap';
import { useState } from 'react';

interface Props {
    color?: string
    onChange: (value: boolean) => any
    value: string
    inline?: boolean

}

export default ({ value, inline = true, onChange }: Props) => {
    const [checked, setChecked] = useState(false)
    return (
        <Form.Check
            checked={checked}
            onChange={() => {
                setChecked(!checked)
                onChange(!checked)
            }}
            id={Math.random().toString()}
            custom
            inline={inline}
            label={value} />
    )
}