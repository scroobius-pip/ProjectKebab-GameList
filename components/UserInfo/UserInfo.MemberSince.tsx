import moment from 'moment'

export default ({ epochTimeCreated }: { epochTimeCreated: string }) => {
    const timeCreated = moment(epochTimeCreated)


    return <div>
        <h6 style={{ marginBottom: 10, color: '#8B8B8B' }}>
            MEMBER SINCE: {(timeCreated.format('DD MMM YYYY').toUpperCase())}
        </h6>
    </div>
}