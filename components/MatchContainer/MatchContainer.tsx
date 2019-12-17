import { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import MatchItem from '@components/MatchItem'

export default () => {
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState<any[]>()


    return <div style={{ width: '100%', maxWidth: 500, margin: 'auto', marginTop: 20, textAlign: 'center' }}>
        {loading ? <Spinner variant='light' animation='grow' style={{
            width: '3em',
            height: '3em'
        }} /> : <>{matches.map(MatchItem)}</>}

    </div>
}