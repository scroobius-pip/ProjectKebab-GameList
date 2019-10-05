import AutoSuggest from 'react-autosuggest'
import { useState } from 'react'
import { debounce } from 'lodash';
// import './index.css'
import generateColorFromString from '../../functions/generateColorFromString';
import { Spinner } from 'react-bootstrap';

async function stall(stallTime = 500) {
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
            consoleType: 'Custom Item',
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
            ><img style={{ width: '1em', opacity: 0.6 }} src={require('../../assets/icons/search-magnify.svg')} /></span>
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
            <style jsx global>
                {`
                
.react-autosuggest__container {
    position: relative;
    animation-direction: 0.5
  }
  
  .react-autosuggest__input {
   border-radius: 6px;
   height: 45px;
   width:100%;
   background-color: rgb(61, 63, 66);
   outline:none;
   border-color: transparent;
   padding:5px;
  color:white;
  font-weight: 600
  }
  
  .react-autosuggest__input::placeholder {
     color:white;
     opacity: 0.6

  }
  .react-autosuggest__input:focus {
    outline: none;
  }
  

  .react-autosuggest__container--open {
    background-color: #282B2E;
  }

  .react-autosuggest__container--open .react-autosuggest__input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

  }
  
  .react-autosuggest__suggestions-container {
    display: none;
}


.react-autosuggest__container--open .react-autosuggest__suggestions-container {
    display: block;
    position: absolute;
    top: 51px;
    width: 100%;
    z-index: 2;
    background-color: #282B2E;
    padding: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

}
  
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .react-autosuggest__suggestion {
    cursor: pointer;
    /* padding: 20px 50px; */
    margin-left: -20px;
    margin-right: -20px;
    
  }
  
  .react-autosuggest__suggestion > div {
      margin-left: 40px;
      padding:10px;
  }

  .react-autosuggest__suggestion , img {
    opacity: 0.5;
  }

  .react-autosuggest__suggestion--highlighted, img {
    opacity: 1;
  }

  .react-autosuggest__suggestion > div {
    font-weight: 600;
  }

  .react-autosuggest__section-title {
      font-size: large;
  }



  .react-autosuggest__suggestion--highlighted {
background-color: rgb(61, 63, 66);

  }

  .react-autosuggest__suggestion--focused {
    background-color: #0C7EAF;
    color: #fff;
  }
  
  .react-autosuggest__section-container:not(:first-child) {
      margin-top: 10px;
  }

  .sponsor {
    opacity: 0.3;
    font-size: 15px;
    margin-top: 15px;
    font-weight: 600;
    /* cursor: pointer; */
    /* float: right; */
    text-align: right;
    margin-right: -6px;

  }

  .sponsor:hover {
    opacity: 0.8;
  }
                `}
            </style>
        </>
    )

}