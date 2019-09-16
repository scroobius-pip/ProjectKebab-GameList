import { Tab, Nav, Table } from 'react-bootstrap'
import UserListRow from './UserList.Table.Row'
import UserListTableHead from './UserList.Table.Head'
import UserList from './UserList'

const data = [
    {
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
        consoleType: "Nintendo Switch",
        description: "Lorem ipsum dolor sit amet.",
        name: "Aead or Alive Xtreme 3: Scarlet",
        tradeType: "Swap",
        id: '1'
    }
    ,
    {
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
        consoleType: "Nintendo Switch",
        description: "Lorem ipsum dolor sit amet.",
        name: "Bead or Alive Xtreme 3: Scarlet",
        tradeType: "Sale",
        id: '2'
    }
    ,
    {
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
        consoleType: "Nintendo Switch",
        description: "Lorem ipsum dolor sit amet.",
        name: "Cead or Alive Xtreme 3: Scarlet",
        tradeType: "Swap",
        id: '3'
    },
    {
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ih7.jpg",
        consoleType: "Nintendo Switch",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorum? Aspernatur, expedita!",
        name: "Zead or Alive Xtreme 3: Scarlet",
        tradeType: "Sale",
        id: '4'
    }

]


export default ({ editable = false }) => {

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
                    <UserList onChange={(changeType, data) => {
                        console.log(changeType)
                        console.log(data)
                    }} editable={editable} id='has' initialGames={data} />
                </Tab.Pane>
                <Tab.Pane eventKey='want'>
                    <UserList editable={editable} id='want' initialGames={data} />
                </Tab.Pane>
            </Tab.Content>
        </div>
    </Tab.Container>

}