import { colors } from '../../styles'
import { Fragment } from 'react'

export interface Match {
    username: string
    userImage: string
    location?: {
        city: string
        country: string
    }
    matchedGames: {
        hasGameNames: string[]
        wantGameNames: string[]
    }
    matchRate?: number
    // matchType: 'location' | 'rate'
}

interface Props {
    match: Match
    onClick: (userName: string) => any
}

const MatchedGamesText = ({ matchedGames }: { matchedGames: Match['matchedGames'] }) => {
    const { hasGameNames, wantGameNames } = matchedGames
    const hasGameNamesCount = hasGameNames.length
    const wantGamesNamesCount = wantGameNames.length



    return <div style={{ fontSize: '1em' }}>
        <span>- </span>
        {!!hasGameNamesCount && <span>Has <b>{hasGameNames[0]}</b> {!!(hasGameNamesCount - 1) && `and ${hasGameNamesCount} others.`} </span>}
        {!!wantGamesNamesCount && <span>Wants <b>{wantGameNames[0]}</b> {!!(wantGamesNamesCount - 1) && `and ${wantGamesNamesCount} others.`}</span>}
    </div>
}



export default ({ match, onClick }: Props) => {

    const handleClick = () => {
        onClick(match.username)
    }

    return <div className='match-item' onClick={handleClick} style={{ marginTop: 15, cursor: 'pointer' }}>

        <div className='match-container' style={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <img style={{ height: '100%', marginRight: 10, borderRadius: 5, maxHeight: 75 }} src={match.userImage} />
                <div style={{ textAlign: 'left' }}>
                    <div>
                        <span style={{ fontSize: 16, fontWeight: 600, marginRight: 5 }}>{match.username}</span>
                        {/* <img style={{ height: '1.2em' }} src={require('../../assets/icons/premium.svg')} /> */}
                    </div>
                    <div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#8B8B8B' }}>{`${match.location.country}-${match.location.city}`}</span>
                    </div>
                    <div>
                        <MatchedGamesText matchedGames={match.matchedGames} />
                    </div>
                </div>
            </div>

            <img src={require('../../assets/icons/arrow_right.svg')} />
            {/* <div style={{ display: 'flex', }}>
            </div> */}

        </div >
        <div style={{ height: 5, borderRadius: 10, backgroundColor: colors.primary, width: (match.matchRate || 100) + '%' }} />
        {!!match.matchRate && <span className='match-rate' style={{ fontWeight: 600, color: 'white' }}>{match.matchRate}% Match Rate</span>}
        <style jsx>
            {`

.match-item {
    transition: box-shadow 200ms ease, opacity 200ms ease;
   
   
    opacity:0.7
    
}

.match-container {
    box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.1);
}

.match-item:hover {
    // box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.2);
    opacity:1;
}

.match-item > .match-rate {
    opacity:0.1;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
.match-item:hover > .match-rate {
    opacity:1;
}
`}
        </style>
    </div >

};
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        marginLeft: -20,
        marginRight: -20,
        backgroundColor: '#3D3F42',
        padding: 20,
        display: 'flex',
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,

    }
}