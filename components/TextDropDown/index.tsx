import { Dropdown } from 'react-bootstrap'
import { useState } from 'react'
import { colors } from 'styles'

interface Props {
    values: string[],
    onSelect?: (currentValue: string) => any
    initialValue?: string
}

export default ({ values, onSelect, initialValue }: Props) => {
    const [currentDrop, setDrop] = useState(initialValue || values[0])

    return (<Dropdown style={{ display: 'inline', verticalAlign: 'text-top' }} onClick={(e) => { e.stopPropagation() }} onSelect={(eventKey: string) => {
        setDrop(eventKey)
        if (onSelect) {
            onSelect(eventKey)
        }
    }}>
        <Dropdown.Toggle as='span' variant="secondary" id="dropdown-basic">
            <span style={{ fontWeight: 600, cursor: 'pointer', color: colors.primary }}>{currentDrop}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {
                values.map(value => <Dropdown.Item key={value} eventKey={value}>{value}</Dropdown.Item>)
            }
        </Dropdown.Menu>
    </Dropdown>)

}