import { Collapse, Button, Badge } from 'react-bootstrap'
import { useState } from 'react'
import { Props } from './UserList.Table.Row'

const RevealButton = ({ active, onClick }: { active: boolean, onClick: () => any }) => {

    return (
        <span onClick={onClick} style={{}} >
            <span style={{ fontWeight: 600, marginRight: 5 }}>Details</span>
            <img style={{ transform: active ? 'rotate(180deg)' : '', transitionDuration: '0.35s' }} src={require('../../assets/icons/drop-arrow.svg')} />
        </span>)
}


export default ({ imageUrl, consoleType, description, name, tradeType, onDelete, onDescriptionChange, onTradeTypeChange, id, editable = false }: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div onClick={() => setOpen(!open)} style={{ backgroundColor: '#3D3F42', padding: '10px 20px 10px 20px', marginLeft: -20, marginRight: -20, marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ flexGrow: 1 }}>
                        <div>
                            <h6>{name}</h6>
                        </div>
                        <div>
                            <span>
                                <Badge variant="primary">{consoleType}</Badge>
                            </span>
                            <span style={{ marginLeft: 10 }}>
                                <Badge variant="secondary">{tradeType}</Badge>
                            </span>
                        </div>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                    <RevealButton active={open} onClick={() => setOpen(!open)} />
                </div>
                <Collapse timeout={200} in={open}>
                    <div >
                        <p style={{ margin: 0, padding: 0 }}>{`${description || 'No Details'}`}</p>
                    </div>
                </Collapse>
            </div>
        </>
    )
}
