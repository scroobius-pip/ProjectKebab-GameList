import { Game } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import UserListRow from './UserList.Card.Row'
import { useState } from 'react'

const compare = (invert: boolean) => (a: Game, b: Game) => {
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

export default ({ data, id }: { data: Game[], id: string }) => {
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


    return <>
        <UserListCardHead
            id={id}
            initialFilterValue={{ consoleType: ['PS3', 'PS4', 'PS2', 'Nintendo Switch', 'Xone'], tradeType: ['Sale', 'Swap'] }}
            onFilterChange={filterChange}
            onSortChange={sortChange}
        />
        {
            filteredAndSortedData.length ?
                filteredAndSortedData.map(game => {
                    return <UserListRow key={game.name + game.consoleType} {...game} />
                }) :
                <img src={require('../../assets/icons/empty.jpg')} />
        }
    </>

}