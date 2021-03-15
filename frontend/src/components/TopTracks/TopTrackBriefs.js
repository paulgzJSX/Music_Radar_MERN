import { useContext } from 'react'
import { trimDate, trimNumber } from '../../helpers/helpers'
import { TracksContext } from '../../context/TracksContext'
import { Briefs, Stat } from '../../styles/TopTrackCardElements'


const TopTrackBriefs = () => {
    const { album } = useContext(TracksContext)

    return (
        <Briefs>
            <Stat>
                <p>Fans</p>
                <span>{trimNumber(album.fans)}</span>
            </Stat>
            <Stat>
                <p>Genre</p>
                <span>{album.genres.data[0].name}</span>
            </Stat>
            <Stat>
                <p>Release Date</p>
                <span>{trimDate(album.release_date)}</span>
            </Stat>
        </Briefs>
    )
}

export default TopTrackBriefs
