import { Collapse, Button, Badge } from 'react-bootstrap'
import { useState } from 'react'
import { Props } from './UserList.Table.Row'
import { colors } from '../../styles'
import UserListTableRowTextArea from './UserList.Table.Row.TextArea'
import TextDropDown from '@components/TextDropDown'
import ReactMarkdown from 'react-markdown'

const RevealButton = ({ active, onClick }: { active: boolean, onClick: () => any }) => {

    return (
        <span onClick={onClick} style={{}} >
            <span style={{ fontWeight: 600, marginRight: 5 }}>Details</span>
            <img style={{ transform: active ? 'rotate(180deg)' : '', transitionDuration: '0.35s' }} src={require('../../assets/icons/drop-arrow.svg')} />
        </span>)
}


export default ({ imageUrl, consoleType, description, name, tradeType, onDelete, onDescriptionChange, onTradeTypeChange, id, editable = false }: Props) => {
    const [open, setOpen] = useState(false)
    const backgroundImage = `linear-gradient(rgb(35, 24, 56), rgba(0, 0, 0, 0.8)), url(${imageUrl})`
    return (
        <>
            <div onClick={() => setOpen(!open)} style={{ backgroundColor: colors.overlay, padding: '10px 20px 10px 20px', marginLeft: -20, marginRight: -20, marginBottom: 10, }}>
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
                                {
                                    editable ? <span>

                                        <TextDropDown initialValue={tradeType} values={['Sale', 'Swap']} onSelect={(value) => {
                                            onTradeTypeChange(id, value)
                                        }} />  </span> :
                                        <Badge variant="secondary">{tradeType}</Badge>
                                }

                            </span>
                        </div>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                    <RevealButton active={open} onClick={() => setOpen(!open)} />
                </div>
                <Collapse timeout={200} in={open}>
                    <div style={{ paddingTop: 10 }}>
                        {/* <p style={{ margin: 0, padding: 0 }}>{`${description || 'No Details'}`}</p> */}
                        {
                            editable ? <UserListTableRowTextArea initialValue={description} onChange={(value) => { onDescriptionChange(id, value) }} /> :
                                <ReactMarkdown source={description || 'No Details'} />
                            // <p style={{ margin: 0, padding: 0 }}>{`${description || 'No Details'}`}</p>
                        }
                    </div>
                </Collapse>
            </div>
        </>
    )
}
