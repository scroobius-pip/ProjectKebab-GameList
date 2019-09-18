import AutoSuggest from 'react-autosuggest'
import { useState } from 'react'
import { debounce } from 'lodash';
import './index.css'
import generateColorFromString from '../../functions/generateColorFromString';
import { Spinner } from 'react-bootstrap';

async function stall(stallTime = 200) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}

export interface Game {
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


interface Props {
    onSelect: (suggestion: Suggestion) => any
    searchFunction: (searchText: string) => Promise<Suggestion[]>
    id: string

}

export default ({ id, searchFunction, onSelect }: Props) => {

    const debouncedSearchFunction = debounce(searchFunction, 500)

    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)

    const onChange = (_, { newValue }) => {
        setValue(newValue)
    }


    const onSuggestionsFetchRequested = debounce(async ({ value }) => {
        setLoading(true)
        await stall()
        const customEntry = {
            name: value,
            consoleType: 'Add custom entry',
            id: value,
            imageUrl: ''
        }
        await setSuggestions(parseGroupedGamesToSections(groupGamesByConsoleType([...(await searchFunction(value)), customEntry])))
        setLoading(false)
    }, 500)

    const onSuggestionsClearRequested = () => {
        setValue('')
        setSuggestions([])
    }

    const getSuggestionValue = (suggestion: Suggestion) => {
        return suggestion.name
    }

    const renderSuggestion = (suggestion: Suggestion) => {
        return (
            <div style={{ display: 'flex' }}>
                <span style={{ flexGrow: 1 }}>
                    {suggestion.name}
                </span>

                <img style={{ width: '1em', marginRight: 10 }} src={require('../../assets/icons/search-add.svg')} />

            </div>
        )
    }

    const renderSectionTitle = (section: Section) => {
        return (
            <strong style={{ color: generateColorFromString(section.consoleType) }}>{section.consoleType}</strong>
        )
    }

    function renderSuggestionsContainer({ containerProps, children, query }) {
        return (
            <div {...containerProps}>
                {children}
                <div className='sponsor'  >
                    <span>
                        <span>Search sponsored by Igdb</span>
                        <a href="https://www.igdb.com/discover">
                            <img style={{ width: '2em' }} src={require('../../assets/icons/igdb.svg')} />
                        </a>
                    </span>
                </div>
            </div>
        );
    }

    const renderInputComponent = inputProps => (
        <div>
            <span
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 18
                }}
            ><img style={{ width: '1em' }} src={require('../../assets/icons/search-magnify.svg')} /></span>
            <input style={{ textIndent: 40 }} {...inputProps} />
            {
                loading ? <span>
                    <Spinner
                        variant='light'
                        style={{
                            width: '1em',
                            height: '1em',
                            position: 'absolute',
                            top: 16,
                            right: 18
                        }}
                        animation="grow" />
                </span> : null
            }
        </div>
    );

    const getSectionSuggestions = (section: Section) => {
        return section.suggestions
    }

    const onSuggestionSelected = (_, { suggestion }: { suggestion: Suggestion }) => {
        onSelect(suggestion)
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
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSectionSuggestions={getSectionSuggestions}
                id={id}
                inputProps={inputProps}
                renderInputComponent={renderInputComponent}
                highlightFirstSuggestion
                onSuggestionSelected={onSuggestionSelected}
            />
        </>
    )

}