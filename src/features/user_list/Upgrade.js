import React from 'react'
import { Link } from 'react-router-dom';
import Arrow from "./assets/arrow.svg"
import VIP from "./assets/VIP.svg"
import "./upgrade.css"

export default function Upgrade() {
    return (
        <div className='ban-main'>
            <h2 className='header-u' >
                Discover our <span className='exclusive'>exclusive</span> <span className='h2'>VIP</span> plans
            </h2>
            <img src={Arrow} alt='' className='arrow' style={{ marginBottom: "20px" }} />
            <div className='vip-banner'>
                <Link to="/vip-plans"><img src={VIP} alt="VIP Icon" /></Link>
            </div>
        </div>
    )
}