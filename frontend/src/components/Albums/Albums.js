import { memo } from 'react'
import Album from '../Albums/Album'
import { GridContainer } from '../../styles/LeftGridElements'

const Albums = memo(({ albums, context }) => {
    return (
        <GridContainer>
            {albums?.map((album, idx) =>
                <Album
                    key={album.id}
                    album={album}
                    position={album.position || idx + 1}
                    context={context}
                />)}
        </GridContainer>
    )
})

export default Albums