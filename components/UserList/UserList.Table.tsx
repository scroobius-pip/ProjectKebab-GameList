import { Table } from 'react-bootstrap'
import UserListTableHead from './UserList.Table.Head'
import UserListRow, { Props as ListRowProps } from './UserList.Table.Row'




export default ({ data }: { data: ListRowProps[] }) => {
    return (
        <>  <Table style={{ tableLayout: 'fixed', backgroundColor: 'transparent' }} striped hover variant="dark">
            <thead style={{ backgroundColor: 'transparent' }}>
                <UserListTableHead />

            </thead>
            <tbody>
                {
                    data.map(game => {
                        return <UserListRow {...game} />
                    })
                }
            </tbody>
        </Table>
        </>
    )
}