import { ReactChild } from 'react'
import { colors } from '../styles'

interface UserInfoItemProps { name: string, value: string | ReactChild, disabled?: boolean, highlighted?: boolean }

const UserInfoItemStyle = (disabled: boolean, highlighted: boolean): React.CSSProperties => ({
    display: 'flex',
    backgroundColor: highlighted ? colors.overlay : '',
    padding: '10px 20px 10px 20px', margin: '0 -20px 0 -20px',
    opacity: disabled ? 0.2 : 1
})

const UserInfoItem = ({ name, value, disabled = false, highlighted = false }: UserInfoItemProps) => (

    <div style={UserInfoItemStyle(disabled, highlighted)}>
        <div style={{ flexGrow: 1 }} >
            <span style={{ fontWeight: 600 }}>{name}:</span>
        </div>
        <div>
            {
                typeof value === 'string' ?
                    <span style={{ fontWeight: 600 }}>{value}</span> : value
            }

        </div>
    </div>
)


export default () => {
    return (
        <>
            <div style={{ marginBottom: 10 }} >
                <UserInfoItem name='Banned' highlighted value='No' />

                <UserInfoItem name='Trades' disabled value={
                    <div>
                        <span>
                            <img style={{ transform: 'rotate(180deg)', }} src={require('../assets/icons/thumbsdown.svg')} />
                            <span style={{ marginLeft: 5 }}>0</span>
                        </span>
                        <span style={{ marginLeft: 10 }}>
                            <img src={require('../assets/icons/thumbsdown.svg')} />
                            <span style={{ marginLeft: 5 }}>0</span>
                        </span>
                    </div>
                } />
                <UserInfoItem name='Location' highlighted value='USA-OH' />
            </div>

        </>
    )
}