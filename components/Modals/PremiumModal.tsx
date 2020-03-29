import { Button } from 'react-bootstrap';
import { colors } from '../../styles'
import { useContext } from 'react';
import UserContext from 'context/UserContext';

interface Props {
    close: () => any
}

export default ({ close }: Props) => {
    const { id, info: { email, userName } } = useContext(UserContext)

    const openCart = () => {
        const Paddle = (window as any).Paddle
        if (Paddle) {
            Paddle.Checkout.open({
                product: '575517',
                passthrough: JSON.stringify({
                    userName,
                    userEmail: email
                })
            })
        }
    }


    return <div style={{ backgroundColor: colors.primary, color: 'white', padding: 25, }}>
        <h2><strong>Get Premium</strong></h2>
        <div style={{ marginTop: 10, }}>
            <ul style={{ lineHeight: 2, fontWeight: 600 }}>
                <li>Find matches based on your list or location</li>
                <li>Add more than 100 games to your list.</li>
                {/* <li>Synchronize your steam wishlist. (Coming Soon)</li> */}
                <li>Get notifications when someone has what you want. (Coming Soon)</li>
            </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 40 }}>
            <span style={{ marginRight: 10 }}>
                <Button onClick={close} variant='outline-light'>
                    <span>
                        <strong>
                            Meh
                        </strong>
                    </span>
                </Button>
            </span>
            <span>
                <Button onClick={openCart} variant='light'>
                    <span style={{ color: colors.primary }}>
                        <strong> $4.99 / MONTH</strong>
                    </span>
                </Button>
            </span>


        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            {/* <span>
                Ps. it comes with a shiny badge *wink
            </span> */}
        </div>
        <style jsx>
            {`
            ul {
                margin:0;
                padding:0;
                margin-left:25px;
            }
      
           `}
        </style>
    </div>
}