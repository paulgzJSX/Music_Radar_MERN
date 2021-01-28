import { memo } from 'react'
import { Cover, Profile } from '../../components'
import { CardContainer } from '../../styles/CardElements'

const Card = memo(({ context, artistId }) => {
    return (
        <CardContainer>
            <Cover context={context} />
            <Profile context={context} artistId={artistId} />
        </CardContainer>
    )
})

export default Card