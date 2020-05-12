import { colors } from 'styles'
import TextareaAutosize from 'react-textarea-autosize'
import TextButton from '@components/TextButton'
import { UserGames } from '@components/UserList'
import { groupByConsoleType, GroupedItems } from 'functions/utils/groupByConsoleType'
import { UserGame } from '@components/UserList/UserList'
const removeMd = require('remove-markdown');

interface Props {
    close: () => any
    description: string
    userGames: UserGames
    userName: string
    type: 'text' | 'reddit'
}

export default ({ close, description, userGames, userName, type }: Props) => {

    const content = ParseContent(type)`${description}${userGames}${userName}`

    return <div style={{ backgroundColor: colors.background, color: 'white', padding: 30, borderRadius: 10, }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -10, marginBottom: 20 }}>
            <TextButton onClick={close}>
                <span style={{ color: 'white', fontSize: '.8em', opacity: .5 }}>CLOSE</span>
            </TextButton>
        </div>
        <div style={{ marginBottom: 20 }}>
            <h3><strong>Export Your Trade List</strong></h3>
            <h6 style={{ opacity: .8 }}>Copy and paste into your post</h6>

        </div>
        <div>
            <TextareaAutosize
                className='text-area'
                style={styles}
                defaultValue={content}
                maxRows={20}
                minRows={20}

            />

        </div>

    </div>
}


const styles: React.CSSProperties = {
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,.1)',
    borderColor: 'transparent',
    color: 'white',
    width: '100%',
    // overflow: 'hidden',
    // overflowY: 'scroll',
    outline: 'none',
    padding: 10
}

const ParseDescription = (description: string, type: Props['type']) => type === 'reddit' ? description.trim() : removeMd(description).trim()

const ParseUserGames = (userGames: UserGames, type: Props['type']): string => {

    const hasGamesByConsole = groupByConsoleType<UserGame>(userGames.has)
    const wantsGamesByConsole = groupByConsoleType<UserGame>(userGames.want)

    const renderGames = (games: UserGame[]): string => {
        return type === 'reddit' ? games.map(game => `|${game.name}|${game.description.replace(/\r?\n|\r/g, ' ') || 'No details'}|\n`).join('') :
            games.map(game => `${game.name} ${game.description ? ' - ' + removeMd(game.description) : ''}\n`).join('')
    }

    const renderPlatformTitle = (platform: string) => type === 'reddit' ? `**${platform}**` : platform

    const renderPlatform = (platform: string, games: UserGame[]): string => {
        return `${renderPlatformTitle(platform)}

${type === 'reddit' ? `|Name|Description|
|:-|:-|`: ''}
${renderGames(games.sort((a, b) => a.name > b.name ? 1 : -1))}`
    }

    const RenderPlatforms = (platforms: GroupedItems<UserGame>): string => {
        let platformString = ''
        for (const [platform, games] of Object.entries(platforms)) {
            platformString += renderPlatform(platform, games) + '\n'
        }
        return platformString
    }

    const platformString = type === 'reddit' ? `##I Have
***
${RenderPlatforms(hasGamesByConsole)}

##I Want
***
${RenderPlatforms(wantsGamesByConsole)}
    `: `
I Have
${RenderPlatforms(hasGamesByConsole)}
I Want
${RenderPlatforms(wantsGamesByConsole)}

    `

    return platformString
}

const ParseFooter = (userName: string, type: Props['type']) => {
    return type === 'reddit' ? `
My [list](https://rade.trade/p/${userName}) was generated with [rade](https://rade.trade)

[@rade_trade](https://twitter.com/rade_trade)`: `My rade list https://rade.trade/p/${userName}`
}
const ParseContent = (type: Props['type']) => (_, description: string, userGames: UserGames, userName: string) => {
    return `${ParseDescription(description, type)}
${ParseUserGames(userGames, type)}
${ParseFooter(userName, type)}
    `
}