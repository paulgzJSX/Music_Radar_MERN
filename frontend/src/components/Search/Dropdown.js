import React from 'react'
import { DropdownContainer, DropdownList } from '../../styles/HeaderElements'

const Dropdown = React.forwardRef(({ actions, results, setTerm }, ref) => {

    const handleClick = e => {
        setTerm(e.target.innerText)
        const { id } = results.find(artist => artist.name === e.target.innerText)

        actions.populateDropdown([])
        actions.moveToSearchedArtistPage(id)
    }

    return (
        <DropdownContainer>
            <DropdownList ref={ref}>
                {results?.map(artist =>
                    <li
                        key={artist.id}
                        onClick={handleClick}
                    >
                        {artist.name}
                    </li>)}
            </DropdownList>
        </DropdownContainer>
    )
})

export default Dropdown
