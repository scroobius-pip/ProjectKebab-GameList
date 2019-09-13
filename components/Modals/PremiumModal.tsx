import { Button } from 'react-bootstrap';
import { colors } from '../../styles'

interface Props {
    close: () => any
}

export default ({ close }: Props) => {
    return <div style={{ backgroundColor: colors.primary, color: 'white', padding: 25, }}>
        <h2><strong>Get Premium</strong></h2>
        <div style={{ marginTop: 10, }}>
            <ul style={{ lineHeight: 2, fontWeight: 600 }}>
                <li>Add 50+ games to your list.</li>
                <li>Import your steam wishlist.</li>
                <li>Get notifications when someone has what you want.</li>
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
                <Button variant='light'>
                    <span style={{ color: colors.primary }}>
                        <strong> $2.99 / MONTH</strong>
                    </span>
                </Button>
            </span>


        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            <span>
                Ps. it comes with a shiny badge *wink
            </span>
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