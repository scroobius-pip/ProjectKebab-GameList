import Button from 'react-bootstrap/Button';
import { font } from 'styles';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

interface Props {
    onClick: () => Promise<any> | any
    loadingText: string
    normalText: string
    disabled?: boolean
}


export default ({ onClick, loadingText, normalText, disabled = false }: Props) => {

    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        await onClick()
        setLoading(false)
    }

    return <Button disabled={disabled} onClick={handleClick}>
        <span style={{ fontWeight: font.weights.medium }}>{loading ? loadingText : normalText}</span>
        {loading && <Spinner variant='light' animation='grow' style={{
            width: '1em',
            height: '1em',
            marginLeft: 10
        }} />}
    </Button>
}