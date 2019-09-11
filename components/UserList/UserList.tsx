import UserListTable from './UserList.Table';
import UserListCard from './UserList.Card';

export interface Props {
    imageUrl: string
    name: string
    consoleType: string
    tradeType: string
    description: string
}


export default ({ data }: { data: Props[] }) => {
    return (
        <>
            <UserListTable data={data} />
            {/* <UserListCard data={data} /> */}
        </>
    )
}