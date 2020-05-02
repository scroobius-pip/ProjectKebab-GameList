import { UserGame } from './UserList'
import UserListTableRowTextArea from './UserList.Table.Row.TextArea';
import TextButton from '../TextButton';
import TextDropDown from '../TextDropDown';
import ImageLoader from 'react-load-image'
import { Spinner } from 'react-bootstrap';

export interface Props extends UserGame {
    onDelete: (id: string) => any
    onTradeTypeChange: (id: string, tradeType: string) => any
    onDescriptionChange: (id: string, description: string) => any
    editable?: boolean
}

export default ({ imageUrl, consoleType, description, name, tradeType, onDelete, onDescriptionChange, onTradeTypeChange, id, editable = false }: Props) => (
    <><tr>
        {editable ? null : <td style={{ padding: 0, height: 60, maxHeight: 60, }}>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {imageUrl ?
                    <ImageLoader
                        src={imageUrl}
                    >
                        <img alt={name} style={{ maxHeight: '100%', maxWidth: '100%', filter: 'brightness(0.8)' }} />
                        <div></div>
                        <Spinner size='sm' animation='grow' />
                    </ImageLoader>
                    :
                    <img alt={name} src='https://images.igdb.com/igdb/image/upload/t_thumb/nocover_qhhlj6.jpg' style={{ maxHeight: '100%', maxWidth: '100%', filter: 'brightness(0.4)' }} />

                }
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
                    editable ? <UserListTableRowTextArea initialValue={description} onChange={(value) => { onDescriptionChange(id, value) }} /> : description
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