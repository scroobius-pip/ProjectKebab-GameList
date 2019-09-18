import { Tab, Nav } from 'react-bootstrap'
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

interface Props {
    editable?: boolean
    variant?: 'Table' | 'Card'
}

export default ({ editable = false, variant = 'Table' }: Props) => {

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
                    <UserList
                        variant={variant}
                        onChange={(changeType, data) => {
                            console.log(changeType)
                            console.log(data)
                        }} editable={editable} id='has' initialGames={data} />
                </Tab.Pane>
                <Tab.Pane eventKey='want'>
                    <UserList

                        variant={variant}
                        editable={editable}
                        id='want'
                        initialGames={data} />
                </Tab.Pane>
            </Tab.Content>
        </div>
    </Tab.Container>

}