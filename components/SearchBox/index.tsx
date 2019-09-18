import AutoSuggest from 'react-autosuggest'
import { useState } from 'react'
import { debounce } from 'lodash';
import './index.css'

interface Game {
    name: string
    consoleType: string
    id: string
    imageUrl: string
}

type Suggestion = Game

interface GroupedGames {
    [consoleType: string]: Game[]
}

interface Section {
    consoleType: string
    suggestions: Game[]
}

const groupGamesByConsoleType = (games: Game[]): GroupedGames => {
    return games.reduce((r, a) => {
        r[a.consoleType] = r[a.consoleType] || []
        r[a.consoleType].push(a)
        return r
    }, Object.create(null))
}

const parseGroupedGamesToSections = (groupedGames: GroupedGames): Section[] => {
    const suggestions: Section[] = []
    for (const consoleType in groupedGames) {
        suggestions.push({
            consoleType,
            suggestions: groupedGames[consoleType]
        })
    }

    return suggestions
}

const games: Game[] = [
    {
        name: 'Forza Horizon 4',
        consoleType: 'Xone',
        id: '1',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: 'Ashen',
        consoleType: 'Xone',
        id: '1',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: "Uncharted 4: A Thief's End",
        consoleType: 'Playstation 4',
        id: '1',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: 'Metro: Last Light',
        consoleType: 'Playstation 4',
        id: '1',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },
    {
        name: 'Ashen',
        consoleType: 'Playstation 4',
        id: '1',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1m5n.jpg'
    },


]


export default ({ id }: { id: string }) => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)

    const onChange = (_, { newValue }) => {
        setValue(newValue)
    }

    const onSuggestionsFetchRequested = async ({ value }) => {
        const customEntry = {
            name: value,
            consoleType: 'Add custom entry',
            id: '####',
            imageUrl: ''
        }
        await setSuggestions(parseGroupedGamesToSections(groupGamesByConsoleType([...games, customEntry])))
    }

    const onSuggestionsClearRequested = () => {
        setValue('')
        setSuggestions([])
    }

    const getSuggestionValue = (suggestion: Suggestion) => {
        return suggestion.name
    }

    const renderSuggestion = (suggestion: Suggestion) => {
        return (
            <div>
                {suggestion.name}
            </div>
        )
    }

    const renderSectionTitle = (section: Section) => {
        return (
            <strong>{section.consoleType}</strong>
        )
    }

    const getSectionSuggestions = (section: Section) => {
        return section.suggestions
    }

    const inputProps = {
        placeholder: 'Search & Add Game',
        value,
        onChange: onChange
    }

    return (
        <>
            <AutoSuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                multiSection
                renderSectionTitle={renderSectionTitle}
                getSectionSuggestions={getSectionSuggestions}
                id={id}
                inputProps={inputProps}
            />
        </>
    )

}