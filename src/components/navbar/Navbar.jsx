import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type = "text" placeholder="&#128269; Search this site..." />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon"/>
            Full Screen
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
            Dark Mode
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar