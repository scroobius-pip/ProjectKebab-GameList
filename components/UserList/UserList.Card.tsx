import { UserGame } from './UserList'
import UserListCardHead, { FilterValue } from './UserList.Card.Head'
import UserListRow from './UserList.Card.Row'
import { useState, useContext } from 'react'
import { Props as UserListProps } from './UserList.Table'
import SearchBox, { Game } from '../SearchBox'
import { Row, Col, Button } from 'react-bootstrap'
import { unionBy, unionWith } from 'lodash'
import { font } from 'styles'

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

export default ({ initialGames, id, editable = false, onChange, searchFunction }: UserListProps) => {
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

        setData((data) => {
            const newData = unionWith(data, [userGame], (game1, game2) => {
                return game1.consoleType + game1.name === game2.consoleType + game2.name
            })

            if (data.length !== newData.length) {
                onChange('add', { value: userGame, id: userGame.id })
            }
            return newData
        })


    }


    const handleDescriptionChange = (id: string, description: string) => {
        setData(data.map(game => {
            if (game.id === id) {
                const changedGame = { ...game, description }
                onChange('update', { value: changedGame, id: changedGame.id })
                return changedGame
            }
            return { ...game }
        }))


    }

    const handleTradeTypeChange = (id: string, tradeType: UserGame['tradeType']) => {
        setData(data.map(game => {
            if (game.id === id) {
                const changedGame = { ...game, tradeType }
                onChange('update', { value: changedGame, id: changedGame.id })
                return changedGame
            }
            return { ...game }
        }))
    }


    return <>
        {editable && <Row style={{ marginBottom: 20, marginLeft: -40, marginRight: -40 }}>
            <Col xs={12} md={8} xl={4}>

                <SearchBox onSelect={handleAdd} searchFunction={searchFunction} id={id} />
            </Col>
            {id === 'want' && < Col style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }} md={4}>
                <Button disabled>
                    <span style={{ fontWeight: font.weights.medium, marginRight: 10 }}>Import Your Steam Wishlist</span>
                    <img style={{ width: '1em', verticalAlign: 'unset' }} src={require('../../assets/icons/search-add.svg')} />
                </Button>
            </Col>}
        </Row>}
        {!!data.length && <UserListCardHead
            id={id}
            initialFilterValue={{ consoleType: Array.from((new Set(data.map(game => game.consoleType)))), tradeType: Array.from((new Set(data.map(game => game.tradeType)))) }}
            onFilterChange={filterChange}
            onSortChange={sortChange}
            editable={editable}
        />}
        {
            filteredAndSortedData.length ?
                filteredAndSortedData.map(game => {
                    return <UserListRow
                        onDelete={handleDelete}
                        onDescriptionChange={handleDescriptionChange}
                        onTradeTypeChange={handleTradeTypeChange}
                        editable={editable}
                        key={game.id}
                        {...game}
                    />
                }) :
                <p style={{ fontSize: 15, fontWeight: 600, opacity: .8 }}> 🌵 Must have been the wind</p>
        }
    </>

}
