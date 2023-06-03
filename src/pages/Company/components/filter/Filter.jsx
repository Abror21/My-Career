import { filterProps } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Filter.module.scss'

const Filter = () => {

    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.filters}>
                <h2>Filter</h2>
                <div className={classes.filter}>
                    <h3>Payment amount</h3>
                    <div className={classes.inputFields}>
                        <div className={classes.inputField}>
                            <p>From</p>
                            <input type="text" placeholder='$10'/>
                        </div>
                        <div className={classes.inputField}>
                            <p>To</p>
                            <input type="text" placeholder='$20'/>
                        </div>
                    </div>
                </div>
                <div className={classes.filter}>
                    <h3>Job success</h3>
                    <div className={classes.inputField}>
                        <input type="text" placeholder='More than 80%'/>
                    </div>
                </div>
                <div className={classes.filter}>
                    <h3>Required level</h3>
                    <div className={classes.inputFields}>
                        <div className={classes.inputField}>
                            <p>From</p>
                            <select name="" id="">
                                <option value="junior">Junior</option>
                                <option value="middle">Middle</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                        <div className={classes.inputField}>
                            <p>To</p>
                            <select name="" id="">
                                <option value="junior">Junior</option>
                                <option value="middle">Middle</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.checkbox}>
                        <input type="checkbox" name="verified" id="verified" />
                        <label htmlFor="">Verified employee</label>
                    </div>
                </div>
                <div className={classes.filter}>
                    <h3>Region</h3>
                    <div className={classes.inputField}>
                        <input type="text" placeholder='choose region'/>
                    </div>
                </div>
                <div className={classes.filter}>
                    <h3>Completed jobs</h3>
                    <div className={classes.inputField}>
                        <input type="text" placeholder='minnimum'/>
                    </div>
                </div>
                <div className={classes.filter}>
                    <h3>Required skills</h3>
                    <div className={classes.inputField}>
                        <input type="text" placeholder='select skills'/>
                    </div>
                </div>
                <button>Apply filters</button>
            </div>
        </>
    )
}

export default Filter