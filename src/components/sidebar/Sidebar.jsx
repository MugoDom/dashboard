import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

const Sidebar = () => {

    const linkStyles = {
        display: "inline-block",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">TSU Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon />
                        <NavLink exact to={'/'} style={linkStyles}><strong className='nav-link'>Dashboard</strong></NavLink>
                    </li>
                    <p className="title">PROJECTS BY COUNTRY</p>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/kenya'} style={linkStyles}><strong className='nav-link'>Kenya</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/uganda'} style={linkStyles}><strong className='nav-link'>Uganda</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/tanzania'} style={linkStyles}><strong className='nav-link'>Tanzania</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/somalia'} style={linkStyles}><strong className='nav-link'>Somalia</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/southsudan'} style={linkStyles}><strong className='nav-link'>South sudan</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/mozambique'} style={linkStyles}><strong className='nav-link'>Mozambique</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/zambia'} style={linkStyles}><strong className='nav-link'>Zambia</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/zimbambwe'} style={linkStyles}><strong className='nav-link'>Zimbambwe</strong></NavLink>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <NavLink exact to={'/gambia'} style={linkStyles}><strong className='nav-link'>Gambia</strong></NavLink>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <NewspaperOutlinedIcon className="icon" />
                        <NavLink exact to={'/newsletter'} style={linkStyles}><strong className='nav-link'>UNOPS Newsletter</strong></NavLink>
                    </li>
                    <li>
                        <EmojiPeopleOutlinedIcon className="icon" />
                        <NavLink exact to={'/help'} style={linkStyles}><strong className='nav-link'>Help</strong></NavLink>
                    </li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption">

                </div>
                <div className="colorOption">

                </div>

            </div>
        </div>
    )
}

export default Sidebar