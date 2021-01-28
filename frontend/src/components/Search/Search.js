import { useEffect, useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown, SearchForm } from '../../components'
import { SearchContext } from '../../context/SearchContext'
import { AudioContext } from '../../context/AudioContext'
import { SearchContainer } from '../../styles/HeaderElements'


const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState('')
    const [displayDropdown, setDisplayDropdown] = useState(false)
    const [isPopulated, setIsPopulated] = useState(false)
    const ulRef = useRef('')
    const inputRef = useRef('')
    const { setSelectedArtistId } = useContext(SearchContext)
    const { clearAudioOnMount } = useContext(AudioContext)

    let history = useHistory()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const actions = {
        populateInput: str => {
            setTerm(str)
            str === '' ? setIsPopulated(false) : setIsPopulated(true)
        },
        populateDropdown: arr => {
            setResults(arr)
            arr === [] ? setDisplayDropdown(false) : setDisplayDropdown(true)
        },
        moveToSearchedArtistPage: artistId => {
            setSelectedArtistId(artistId)
            history.push('/search')
            clearAudioOnMount()
        }
    }

    const handleClickOutside = e => {
        if (ulRef.current && !ulRef.current.contains(e.target) && !inputRef.current.contains(e.target)) {
            setDisplayDropdown(false)
            setTerm('')
        }
    }

    return (
        <SearchContainer>
            <SearchForm
                ref={inputRef}
                term={term}
                actions={actions}
                setDisplayDropdown={setDisplayDropdown}
                isPopulated={isPopulated}
                results={results}
            />

            {displayDropdown
                && <Dropdown
                    results={results}
                    actions={actions}
                    setTerm={setTerm}
                    ref={ulRef}
                />}
        </SearchContainer>
    )
}

export default Search
