import { Button } from 'react-bootstrap';

export default ({ userName }) => {
    return <Button style={{ marginBottom: 100 }} disabled block>
        <div>
            <span style={{ fontWeight: 600 }}>Chat with {userName}</span>
            <span style={{ marginLeft: 10, }} ><img style={{ width: '2em' }} src={require('../../assets/icons/chat.svg')} /></span>
        </div>
    </Button>
}