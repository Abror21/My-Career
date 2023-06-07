import { useState } from "react"
import MyCareer from "./MyCareer"
import Round from "./Round"
import classes from './HomeContentSwitcher.module.scss'
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import CircleSlider from "./CircleSlider"

const HomeContentSwitcher = () => {
    const [count, setCount] = useState(1)

    return (
        <>
            {count === 1 && <MyCareer />}
            {count === 2 && <Page2 />}
            {count === 3 && <Page3 />}
            {count === 4 && <Page4 />}

            <CircleSlider
                count={count}
                setCount={setCount}
            />

            <div className={classes.roundContainer}>
                <div className={count===1 ? classes.round1 : count===2 ? classes.round2 : count===3 ? classes.round3 : count===4 ? classes.round4 : classes.round1}>
                    <Round />
                </div>
            </div>
        </>
    )
}

export default HomeContentSwitcher