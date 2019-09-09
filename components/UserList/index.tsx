import { Tab, Nav, Table } from 'react-bootstrap'
import UserListRow from './UserList.Table.Row'
import UserListTableHead from './UserList.Table.Head'
import UserListTable from './UserList.Table'

const data = [
    {
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
        consoleType: "Nintendo Switch",
        description: "Lorem ipsum dolor sit amet.",
        name: "Dead or Alive Xtreme 3: Scarlet",
        tradeType: "Sale"
    }
]

export default () => {

    return <Tab.Container id="user-list" defaultActiveKey="has">
        <div>
            <Nav variant='pills'>
                <Nav.Item>
                    <Nav.Link eventKey='has' style={{ fontWeight: 600 }}>Has</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='want' style={{ fontWeight: 600 }}>Want</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <div style={{ marginTop: 20 }}>
            <Tab.Content>
                <Tab.Pane eventKey='has'>
                    <UserListTable data={data} />
                </Tab.Pane>
                <Tab.Pane eventKey='want'>
                    <UserListTable data={data} />
                </Tab.Pane>
            </Tab.Content>
        </div>
    </Tab.Container>

}