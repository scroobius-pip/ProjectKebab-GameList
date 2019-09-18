import { Table } from 'react-bootstrap'
import { unionBy, differenceWith, isEqual } from 'lodash'
import UserListTableHead from './UserList.Table.Head'
import UserListRow from './UserList.Table.Row'
import { Game } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import { useState } from 'react'
import SearchBox from '../SearchBox'

export interface Props {
    initialGames: Game[]
    id: string
    editable: boolean
    onChange: (changeType: 'delete' | 'add' | 'update', data: { id: string, value?: Game }) => any
}

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


export default ({ initialGames, id, editable = false, onChange }: Props) => {

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


    return (
        <>
            {editable ? <SearchBox id={id} /> : null}
            <UserListCardHead
                id={id}
                initialFilterValue={{ consoleType: Array.from((new Set(initialGames.map(game => game.consoleType)))), tradeType: Array.from((new Set(initialGames.map(game => game.tradeType)))) }}
                onFilterChange={filterChange}
                onSortChange={sortChange}
                editable={editable}
            />
            <Table style={{ backgroundColor: 'transparent' }} striped hover variant="dark">
                <thead style={{ backgroundColor: 'transparent' }}>
                    <UserListTableHead
                        editable={editable}
                    />
                </thead>
                <tbody>
                    {filteredAndSortedData.map(game => {
                        return <UserListRow
                            onDelete={handleDelete}
                            onDescriptionChange={handleDescriptionChange}
                            onTradeTypeChange={handleTradeTypeChange}
                            editable={editable}
                            key={game.name + game.consoleType}
                            {...game}
                        />
                    })}
                </tbody>
            </Table>
        </>
    )
}