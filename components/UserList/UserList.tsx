import UserListTable, { Props as UserListTableProps } from './UserList.Table';
import UserListCard from './UserList.Card';
import { getApolloContext } from 'react-apollo'
import searchGames from 'functions/graphql/queries/searchGames';
import { useContext } from 'react';
import { Game } from '@components/SearchBox';

export interface UserGame extends Game {
    tradeType: 'Swap' | 'Sale'
    description: string
}

export interface Props {
    initialGames: UserGame[]
    id: string
    editable?: boolean
    onChange?: UserListTableProps['onChange']
    variant?: 'Card' | 'Table'
}



export default ({ variant = 'Table', ...props }: Props) => {

    const apolloClient = useContext(getApolloContext()).client

    const searchFunction = async (searchText: string) => {
        return await searchGames(searchText, apolloClient)
    }

    return (
        <>
            {
                variant === 'Table' ?
                    <UserListTable searchFunction={searchFunction} editable={!!props.editable} onChange={props.onChange || (() => { })} {...props} /> :
                    <UserListCard searchFunction={searchFunction} editable={!!props.editable} onChange={props.onChange || (() => { })} {...props} />
            }
        </>
    )
}