import { NextPageContext } from 'next'
import cookies from 'next-cookies'


interface Settings {
    setting_location?: boolean
}

const getSettings = (ctx: NextPageContext): Settings => {
    const { settings = '{}' } = cookies(ctx)
    return JSON.parse(settings)
}

const setSettings = (settings: Settings) => {
    const settingsString = JSON.stringify(settings)

    if (typeof document !== 'undefined')
        document.cookie = `settings=${settingsString}; path=/`
}

export {
    setSettings,
    getSettings
}