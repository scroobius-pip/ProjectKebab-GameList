
import { Button } from 'react-bootstrap';

export default ({ userName }: { userName: string }) => {

    const url = `https://rade.trade/p/${userName}`

    return <div style={{ fontSize: '1rem', overflow: 'hidden' }}>
        <a href={url}>
            {url}
        </a>
    </div>
}