import { Game } from './UserList'
import UserListTableRowTextArea from './UserList.Table.Row.TextArea';
import TextButton from '../TextButton';
import TextDropDown from '../TextDropDown';

export interface Props extends Game {
    onDelete: (id: string) => any
    onTradeTypeChange: (id: string, tradeType: string) => any
    onDescriptionChange: (id: string, description: string) => any
    editable?: boolean
}

export default ({ imageUrl, consoleType, description, name, tradeType, onDelete, onDescriptionChange, onTradeTypeChange, id, editable = false }: Props) => (
    <><tr>
        {editable ? null : <td style={{ padding: 0, height: 60, maxHeight: 60, }}>
            <div style={{ height: '100%', }}>
                <img style={{ maxHeight: '100%', maxWidth: '100%', filter: 'brightness(0.8)' }} src={imageUrl} />
            </div>
        </td>}
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {name}
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {consoleType}
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {
                    editable ? <TextDropDown initialValue={tradeType} values={['Sale', 'Swap']} onSelect={(value) => {
                        onTradeTypeChange(id, value)
                    }} /> : tradeType
                }
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {
                    editable ? <UserListTableRowTextArea initialValue={description} onBlur={(value) => { onDescriptionChange(id, value) }} /> : description
                }
            </div>
        </td>
        {editable ?
            <td>
                <TextButton onClick={() => { onDelete(id) }}>Delete</TextButton>
            </td> : null
        }
    </tr>
    </>
)