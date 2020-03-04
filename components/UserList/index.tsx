import { Tab, Nav } from 'react-bootstrap'
import UserList, { UserGame, Props as UserListProps } from './UserList'
import { ScreenClassProvider, ScreenClassRender } from 'react-grid-system';

export interface UserGames {
    has: UserGame[]
    want: UserGame[]
}


interface Props {
    editable?: boolean
    onHasChange?: UserListProps['onChange']
    onWantChange?: UserListProps['onChange']
    data: UserGames

}

export default ({ editable = false, data, onHasChange, onWantChange }: Props) => {

    return <Tab.Container id="user-list" defaultActiveKey="has">
        <div>
            <Nav variant='pills'>
                <Nav.Item>
                    <Nav.Link eventKey='has' style={{ fontWeight: 600 }}>Owns</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='want' style={{ fontWeight: 600 }}>Wants</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <div style={{ marginTop: 20 }}>


            <Tab.Content>


                <ScreenClassRender
                    render={screenClass => {
                        const variant = ['lg', 'md', 'xl'].includes(screenClass) ? 'Table' : 'Card'

                        return <>
                            <Tab.Pane eventKey='has'>
                                <UserList
                                    variant={variant}
                                    onChange={onHasChange}
                                    editable={editable}
                                    id='has'
                                    initialGames={data.has} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='want'>
                                <UserList
                                    onChange={onWantChange}
                                    variant={variant}
                                    editable={editable}
                                    id='want'
                                    initialGames={data.want} />
                            </Tab.Pane>

                        </>
                    }}

                />

            </Tab.Content>

        </div>
    </Tab.Container>

}