import { Table, Row, Col } from 'react-bootstrap'
import { unionBy, differenceWith, isEqual } from 'lodash'
import UserListTableHead from './UserList.Table.Head'
import UserListRow from './UserList.Table.Row'
import { UserGame } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import { useState } from 'react'
import SearchBox, { Game } from '../SearchBox'
// import nProgress from 'nprogress'
// import { Align } from 'react-grid-system'
const games: Game[] = [
    {
        name: 'Forza Horizon 4',
        consoleType: 'Xone',
        id: '1Forza',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: 'Ashen',
        consoleType: 'Xone',
        id: '1Ashen',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: "Uncharted 4: A Thief's End",
        consoleType: 'Playstation 4',
        id: '1Uncharted',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: 'Metro: Last Light',
        consoleType: 'Playstation 4',
        id: '1Metro',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: 'Ashen',
        consoleType: 'Playstation 4',
        id: '1Xone',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },


]

export interface Props {
    initialGames: UserGame[]
    id: string
    editable: boolean
    onChange: (changeType: 'delete' | 'add' | 'update', data: { id: string, value?: UserGame }) => any
}

const compare = (invert: boolean) => (a: UserGame, b: UserGame) => {
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

    const handleAdd = (game: Game) => {

        const userGame: UserGame = { ...game, description: '', tradeType: 'Swap' }
        setData(unionBy([userGame], data, 'id'))
        onChange('add', { id: userGame.id, value: userGame })
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

    const handleTradeTypeChange = (id: string, tradeType: UserGame['tradeType']) => {
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
            {editable ? <Row style={{ marginBottom: 20 }}>
                <Col xs={12} md={8} xl={4}>
                    <SearchBox onSelect={handleAdd} searchFunction={async () => games} id={id} />
                </Col>
            </Row> : null}
            <UserListCardHead
                id={id}
                initialFilterValue={{ consoleType: Array.from((new Set(data.map(game => game.consoleType)))), tradeType: Array.from((new Set(data.map(game => game.tradeType)))) }}
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