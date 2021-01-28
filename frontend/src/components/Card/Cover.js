import { memo, useContext } from 'react'
import { BigPlayer, Star } from '../../components'
import { trimTitle, limitCharacters } from '../../helpers/helpers'
import { AudioContext } from '../../context/AudioContext'
import { CoverSection, CurrentTrack, Header } from '../../styles/CardElements'
import { FavoriteTracksContext } from '../../context/FavoriteTracksContext'

const Cover = memo(({ context }) => {
    const { selectedAlbum } = useContext(context)
    const { selectedTrack } = useContext(AudioContext)

    const image = context === FavoriteTracksContext 
        ? selectedTrack.albumCover 
        : selectedAlbum && selectedAlbum.cover

    return (
        <>
            {selectedTrack &&
                <CoverSection backgroundImage={image}>
                    <Header>
                        <Star id={selectedTrack.id} type={'tracks'} />
                        <CurrentTrack>{limitCharacters(trimTitle(selectedTrack.title), 45)}</CurrentTrack>
                    </Header>
                    <BigPlayer track={selectedTrack} context={context} />
                </CoverSection>
            }
        </>
    )
})

export default Cover
