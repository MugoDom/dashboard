import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

const Sidebar = () => {
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
                        <span>Dashboard</span>
                    </li>
                    <p className="title">PROJECTS BY COUNTRY</p>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Kenya</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Uganda
                        </span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Tanzania</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Somalia</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>South Sudan</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Mozambique</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Zambia</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Zimbabwe</span>
                    </li>
                    <li>
                        <PublicOutlinedIcon className="icon" />
                        <span>Gambia</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <NewspaperOutlinedIcon className="icon" />
                        <span>UNOPS Newsletter</span>
                    </li>
                    <li>
                        <EmojiPeopleOutlinedIcon className="icon" />
                        <span>Help</span>
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