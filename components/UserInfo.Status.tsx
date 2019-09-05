import { ReactChild } from 'react'
import { colors } from '../styles'

const UserInfoItem = ({ name, value, disabled = false, highlighted = false }: { name: string, value: string | ReactChild, disabled?: boolean, highlighted?: boolean }) => (

    <div style={{ display: 'flex', backgroundColor: highlighted ? colors.overlay : '', padding: 10 }}>
        <div style={{ flexGrow: 1 }} >
            <span>{name}:</span>
        </div>
        <div>
            {
                typeof value === 'string' ?
                    <span>{value}</span> : value
            }

        </div>
    </div>

)


export default () => {
    return (
        <>
            <div >
                <UserInfoItem name='Banned' highlighted value='No' />
                <UserInfoItem name='Location' value='USA-OH' />
                <UserInfoItem name='Location' highlighted value='USA-OH' />
                {/* <UserInfoItem name='Trades' highlighted value={<p>Hello</p>} /> */}
            </div>

        </>
    )
}