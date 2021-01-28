import { CrossIcon, SearchIcon, IconContainer } from '../../styles/HeaderElements'

const Icon = ({ term, isPopulated, actions }) => {
    return (
        <IconContainer>
            {term && isPopulated
                ? <CrossIcon onClick={() => actions.populateInput('')} />
                : <SearchIcon />}
        </IconContainer>
    )
}

export default Icon
