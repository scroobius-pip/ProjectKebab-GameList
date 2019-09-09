export interface Props {
    imageUrl: string
    name: string
    consoleType: string
    tradeType: string
    description: string
}

export default ({ imageUrl, consoleType, description, name, tradeType }: Props) => (
    <> <tr>
        <td style={{ padding: 0, height: 60, maxHeight: 60, }}>
            <div style={{ height: '100%', }}>
                <img style={{ maxHeight: '100%', maxWidth: '100%', filter: 'brightness(0.8)' }} src={imageUrl} />
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {name}
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {consoleType}
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {tradeType}
            </div>
        </td>
        <td style={{ height: 40, maxHeight: 40 }}>
            <div style={{ height: '100%' }}>
                {description}
            </div>
        </td>
    </tr>
    </>
)