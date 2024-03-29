import { Button, Dropdown, Form } from 'react-bootstrap';
import Reveal from '../Reveal';
import { useState } from 'react';
import TextDropDown from '../TextDropDown';
import CheckBox from '../CheckBox';
import CheckBoxGroup from '../CheckBoxGroup';
import { colors } from 'styles';

export interface FilterValue {
    tradeType: string[]
    consoleType: string[]
}


interface Props {
    onFilterChange: (filterValue: FilterValue) => any
    onSortChange: (sortValue: string) => any
    initialFilterValue: FilterValue
    id: string
    editable?: boolean
}


const FilterButton = ({ active, onClick }: { active: boolean, onClick: () => any }) => {
    return (
        <Button variant={active ? 'primary' : 'secondary'} onClick={onClick} >
            <div>
                <span style={{ fontWeight: 600 }}>Filter</span>
                <span style={{ marginLeft: 10, }} ><img style={{ width: '2em' }} src={require('../../assets/icons/filter.svg')} /></span>
            </div>
        </Button>
    )
}




export default ({ onFilterChange, onSortChange, initialFilterValue, id, editable = false }: Props) => {
    const [open, setOpen] = useState(false)
    const [tradeType, setTradeType] = useState([])
    const [consoleType, setConsoleType] = useState([])

    const MainSection = (
        <div>
            <div style={{ marginBottom: 20, display: 'flex' }} >
                <span style={{ flexGrow: 1 }}>
                    <FilterButton active={open} onClick={() => setOpen(!open)} />
                </span>
                <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <TextDropDown values={['Name - Asc', 'Name - Desc']} onSelect={(sortValue) => {
                        onSortChange(sortValue)
                    }} />
                </span>
            </div>

        </div>
    )


    const HiddenSection = (

        <div style={{ backgroundColor: colors.overlay, padding: 20, marginLeft: -20, paddingLeft: 20, marginRight: -20, paddingRight: 20 }}>
            <div style={{ marginBottom: 20 }}>
                <h6 style={{ fontWeight: 500 }}>Trade Type</h6>
                <div>
                    <CheckBoxGroup id={'trade-type' + id} initialValues={initialFilterValue.tradeType} onChange={(values) => setTradeType(values)} />
                </div>
            </div>
            <div style={{ marginBottom: 20 }}>
                <h6>Console</h6>
                <div>
                    <CheckBoxGroup id={'console-type' + id} initialValues={initialFilterValue.consoleType} onChange={(values) => setConsoleType(values)} />
                </div>
            </div>

            <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='secondary' onClick={() => {
                    onFilterChange({
                        consoleType,
                        tradeType
                    })
                    setOpen(!open)
                }}>Apply</Button>
            </div>

        </div>
    )

    return (
        <Reveal
            MainSection={MainSection}
            HiddenSection={HiddenSection}
            open={open}
            style={{ width: '100%', marginBottom: 20, }}
        />
    )
}