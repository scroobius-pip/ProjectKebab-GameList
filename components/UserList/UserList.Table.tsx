import { Table } from 'react-bootstrap'
import UserListTableHead from './UserList.Table.Head'
import UserListRow from './UserList.Table.Row'
import { Props as ListRowProps } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import { useState } from 'react'

const compare = (invert: boolean) => (a: ListRowProps, b: ListRowProps) => {
    const nameA = a.name
    const nameB = b.name

    let comparison = 0

    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return invert ? comparison * -1 : comparison;
}


export default ({ data }: { data: ListRowProps[] }) => {


    const [filterValues, setFilterValues] = useState({ tradeType: [], consoleType: [] } as FilterValue)
    const [sortValue, setSortValue] = useState('')

    const sortChange: (value: string) => any = (value) => {
        console.log(value)
        setSortValue(value)

    }

    const filterChange: (filterValue: FilterValue) => any = (filterValue) => {
        console.log(filterValue)
        setFilterValues(filterValue)
    }

    const filteredData = data
        .filter(data => filterValues.consoleType.length ? filterValues.consoleType.includes(data.consoleType) : true)
        .filter(data => filterValues.tradeType.length ? filterValues.tradeType.includes(data.tradeType) : true)


    const filteredAndSortedData = !sortValue.length ? filteredData : filteredData.sort(sortValue === 'Name - Asc' ? compare(true) : compare(false))

    return (
        <>
            <UserListCardHead
                initialFilterValue={{ consoleType: ['PS3', 'PS4', 'PS2', 'Nintendo Switch', 'Xone'], tradeType: ['Sale', 'Swap'] }}
                onFilterChange={filterChange}
                onSortChange={sortChange}
            />

            <Table style={{ backgroundColor: 'transparent' }} striped hover variant="dark">
                <thead style={{ backgroundColor: 'transparent' }}>
                    <UserListTableHead />

                </thead>
                <tbody>
                    {filteredAndSortedData.map(game => {
                        return <UserListRow key={game.name + game.consoleType} {...game} />
                    })}
                </tbody>
            </Table>
        </>
    )
}