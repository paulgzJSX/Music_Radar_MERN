import React from 'react'
import { Icon } from '../../components'
import { fetchSearchResults } from '../../hooks/useSearch'
import { Input } from '../../styles/HeaderElements'

const SearchForm = React.forwardRef(({ actions, results, term, isPopulated, setDisplayDropdown }, ref) => {

    const handleChange = async e => {
        if (e.target.value) {
            actions.populateInput(e.target.value.toLowerCase())

            try {
                const arr = await fetchSearchResults(e.target.value.toLowerCase(), term)
                arr.length 
                    ? actions.populateDropdown(arr) 
                    : actions.populateDropdown([])
            } catch (err) { console.log(err) }

        } else {
            actions.populateInput('')
            actions.populateDropdown([])
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        const { id } = results.find(artist => artist.name === term)

        if (id) {
            setDisplayDropdown(false)
            actions.moveToSearchedArtistPage(id)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={term}
                placeholder='artist name'
                onChange={handleChange}
                ref={ref}
            />
            <Icon term={term} isPopulated={isPopulated} actions={actions} />
        </form>
    )
})

export default SearchForm
