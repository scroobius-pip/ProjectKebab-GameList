
import { Button } from 'react-bootstrap';

export default ({ userName }: { userName: string }) => {

    const url = `https://nkma.now.sh/profile/${userName}`

    return <div style={{ fontSize: '0.8rem' }}>
        <a href={url}>
            {url}
        </a>
    </div>
}