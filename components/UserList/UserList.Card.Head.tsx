import { Button, Dropdown, Form } from 'react-bootstrap';
import Reveal from '../Reveal';
import { useState } from 'react';
import TextDropDown from '../TextDropDown';
import CheckBox from '../CheckBox';
import CheckBoxGroup from '../CheckBoxGroup';

export interface FilterValue {
    tradeType: string[]
    consoleType: string[]
}


interface Props {
    onFilterChange: (filterValue: FilterValue) => any
    onSortChange: (sortValue: string) => any
    initialFilterValue: FilterValue
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




export default ({ onFilterChange, onSortChange, }: Props) => {
    const [open, setOpen] = useState(false)
    const [tradeType, setTradeType] = useState([])
    const [consoleType, setConsoleType] = useState([])

    const MainSection = (
        <div style={{ marginBottom: 20, display: 'flex' }} >
            <span style={{ flexGrow: 1 }}>
                <FilterButton active={open} onClick={() => setOpen(!open)} />
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <TextDropDown values={['Name - Asc', 'Name - Desc']} onSelect={(sortValue) => {
                    onSortChange(sortValue)
                }} />
            </span>
        </div>
    )


    const HiddenSection = (
        <div>
            <div style={{ marginBottom: 20 }}>
                <h6>Trade Type</h6>
                <div>
                    <CheckBoxGroup initialValues={['Sale', 'Swap']} onChange={(values) => setTradeType(values)} />
                </div>
            </div>
            <div style={{ marginBottom: 20 }}>
                <h6>Console</h6>
                <div>
                    <CheckBoxGroup initialValues={['PS3', 'PS4', 'PS2', 'Nintendo Switch', 'Xone']} onChange={(values) => setConsoleType(values)} />
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
        />
    )
}