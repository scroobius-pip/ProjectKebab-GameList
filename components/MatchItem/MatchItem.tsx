import { colors } from '../../styles'

interface Props {
    username: string
    userImage: string
    location?: {
        city: string
        country: string
    }
    matchedGames?: string[]
    matchRate?: number
    matchType: 'location' | 'rate'
}

export default (props: Props) => (
    <div className='match-item' onClick={() => { }} style={{ marginTop: 15, cursor: 'pointer' }}>

        <div className='match-container' style={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                <img style={{ height: '100%', paddingRight: 10 }} src={require('../../assets/icons/reddit-user.svg')} />
                <div>
                    <div>
                        <span style={{ fontSize: 20, fontWeight: 600, marginRight: 5 }}>{props.username}</span>
                        <img style={{ height: '1.2em' }} src={props.userImage} />
                    </div>
                    <div>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#8B8B8B' }}>{`${props.location.country}-${props.location.city}`}</span>
                    </div>
                    <div>
                        <span>Has <b>Super Mario Odyssey</b> and 3 others.</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', }}>
                <img src={require('../../assets/icons/arrow_right.svg')} />
            </div>

        </div>
        <div style={{ height: 5, backgroundColor: colors.primary, width: '100%' }} />
        <span className='match-rate' style={{ fontWeight: 600, color: 'white' }}>80% Match Rate</span>
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
    </div>

);
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        marginLeft: -20,
        marginRight: -20,
        backgroundColor: '#3D3F42',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5
    }
}