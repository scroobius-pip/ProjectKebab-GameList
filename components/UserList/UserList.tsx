import UserListTable from './UserList.Table';
import UserListCard from './UserList.Card';

export interface Props {
    imageUrl: string
    name: string
    consoleType: string
    tradeType: string
    description: string
}



export default ({ data, id }: { data: Props[], id: string }) => {
    return (
        <>
            <UserListTable data={data} id={id} />
            {/* <UserListCard data={data} id={id} /> */}
        </>
    )
}