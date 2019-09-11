import { Table } from 'react-bootstrap'
import UserListTableHead from './UserList.Table.Head'
import UserListRow from './UserList.Table.Row'
import { Props as ListRowProps } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import { useState } from 'react'



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
                initialFilterValue={{ consoleType: [], tradeType: [] }}
                onFilterChange={filterChange}
                onSortChange={sortChange}
            />

            <Table style={{ backgroundColor: 'transparent' }} striped hover variant="dark">
                <thead style={{ backgroundColor: 'transparent' }}>
                    <UserListTableHead />

                </thead>
                <tbody>
                    {
                        filteredAndSortedData.map(game => {
                            return <UserListRow {...game} />
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}