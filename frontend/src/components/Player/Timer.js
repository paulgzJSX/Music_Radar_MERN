import { memo } from 'react'
import { getTime } from '../../helpers/helpers'
import { CurrentTime, PlayerLine, TimerContainer } from '../../styles/PlayerElements'

const Timer = memo(({ currentTime }) => {
    return (
        <TimerContainer>
            <CurrentTime>{getTime(currentTime)}</CurrentTime>
            <PlayerLine />
        </TimerContainer>
    )
})

export default Timer
