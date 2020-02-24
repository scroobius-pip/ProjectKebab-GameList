import FormCheck from 'react-bootstrap/FormCheck';
import { useState } from 'react';
import generateColorFromString from 'functions/utils/generateColorFromString';

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
                className={'form-check' + id + value}
            >
                <FormCheck.Input className={'input-check' + id + value} type='checkbox' onChange={() => {
                    setChecked(!checked)
                    onChange(!checked)
                }} checked={checked} id={id} />
                <style jsx>
                    {`
.custom-control-input:checked ~ .custom-control-label::before {
    color: #EAEBEB;
    border-color: orange !important;
    background-color: orange !important;
    box-shadow: none;
}

`}
                </style>
                <FormCheck.Label htmlFor={id} ><span style={{ fontSize: 14, color: generateColorFromString(value), fontWeight: 500 }}>{value}</span></FormCheck.Label>
            </FormCheck>



        </>
    )
}