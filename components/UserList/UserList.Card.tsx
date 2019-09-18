import { Game } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import UserListRow from './UserList.Card.Row'
import { useState } from 'react'
import { Props as UserListProps } from './UserList.Table'

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

export default ({ initialGames, id, editable = false, onChange }: UserListProps) => {
    const [filterValues, setFilterValues] = useState({ tradeType: [], consoleType: [] } as FilterValue)
    const [sortValue, setSortValue] = useState('')
    const [data, setData] = useState(initialGames)

    const sortChange: (value: string) => any = (value) => {
        setSortValue(value)
    }

    const filterChange: (filterValue: FilterValue) => any = (filterValue) => {
        setFilterValues(filterValue)
    }

    const filteredData = data
        .filter(data => filterValues.consoleType.length ? filterValues.consoleType.includes(data.consoleType) : true)
        .filter(data => filterValues.tradeType.length ? filterValues.tradeType.includes(data.tradeType) : true)


    const filteredAndSortedData = !sortValue.length ? filteredData : filteredData.sort(sortValue === 'Name - Asc' ? compare(true) : compare(false))

    const handleDelete = (id: string) => {
        setData([...data.filter(game => game.id !== id)])
        onChange('delete', { id })
    }

    const handleDescriptionChange = (id: string, description: string) => {
        setData(data.map(game => {
            if (game.id === id) {
                const changedGame = { ...game, description }
                onChange('update', changedGame)
                return changedGame
            }
            return { ...game }
        }))


    }

    const handleTradeTypeChange = (id: string, tradeType: string) => {
        setData(data.map(game => {
            if (game.id === id) {
                const changedGame = { ...game, tradeType }
                onChange('update', changedGame)
                return changedGame
            }
            return { ...game }
        }))
    }


    return <>
        <UserListCardHead
            id={id}
            initialFilterValue={{ consoleType: Array.from((new Set(initialGames.map(game => game.consoleType)))), tradeType: Array.from((new Set(initialGames.map(game => game.tradeType)))) }}
            onFilterChange={filterChange}
            onSortChange={sortChange}
            editable={editable}
        />
        {
            filteredAndSortedData.length ?
                filteredAndSortedData.map(game => {
                    return <UserListRow
                        onDelete={handleDelete}
                        onDescriptionChange={handleDescriptionChange}
                        onTradeTypeChange={handleTradeTypeChange}

                        key={game.name + game.consoleType}
                        {...game}
                    />
                }) :
                <img src={require('../../assets/icons/empty.jpg')} />
        }
    </>

}