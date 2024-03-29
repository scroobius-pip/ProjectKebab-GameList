import CheckBox from '../CheckBox'
import { useState } from 'react'

interface Props {
    inline?: boolean
    initialValues: string[]
    onChange: (values: string[]) => any
    id: string

}


export default ({ initialValues, inline = true, onChange, id }: Props) => {
    const [values, setValues] = useState(new Set<string>())

    function toggleValue(value: string) {
        const newSet = new Set(values)

        values.has(value) ? newSet.delete(value) : newSet.add(value)

        setValues(newSet)
        onChange(Array.from(newSet))
    }

    return (
        <>
            {
                initialValues.map(value => {
                    return <>
                        <CheckBox

                            key={value}
                            id={id + value}
                            inline={inline}
                            value={value}
                            onChange={() => toggleValue(value)} />

                    </>
                }
                )
            }

        </>
    )

}