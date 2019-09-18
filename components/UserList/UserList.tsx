import UserListTable, { Props as UserListTableProps } from './UserList.Table';
import UserListCard from './UserList.Card';

export interface Game {
    id: string
    imageUrl: string
    name: string
    consoleType: string
    tradeType: string
    description: string
}

interface Props {
    initialGames: Game[]
    id: string
    editable?: boolean
    onChange?: UserListTableProps['onChange']
    variant?: 'Card' | 'Table'
}



export default ({ variant = 'Table', ...props }: Props) => {
    return (
        <>
            {
                variant === 'Table' ?
                    <UserListTable editable={!!props.editable} onChange={props.onChange || (() => { })} {...props} /> :
                    <UserListCard editable={!!props.editable} onChange={props.onChange || (() => { })} {...props} />
            }
        </>
    )
}