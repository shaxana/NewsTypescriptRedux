import Container from "react-bootstrap/esm/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiSearch } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import styles from './../style/styles.module.css'
import { Button } from "react-bootstrap";
import { TextField } from "@mui/material";
import  {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


type Props = {}

function Navbar({}: Props) {
    const date = new Date()
    const [isDropDownOpen, setDropDownOpen] = useState(false)
    const[isDropDownOpenForEditions, setDropDownOpenForEditions] = useState(false)
    const[isMenuIconVisible, setMenuIconVisible] = useState(true)
    const toggleDropDown = () =>{
        setDropDownOpen(!isDropDownOpen)
    }
    const toggleDropDownForEdition = () =>{
        setDropDownOpenForEditions(!isDropDownOpenForEditions)
    }
    const [isSideBarOpen, setSideBarOpen] = useState(false)
    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen)
        setMenuIconVisible(!isMenuIconVisible)
    }
  return (
    <>
   
  <Container>
  <header className={styles.header}>
    <div className={styles.FirstPartOfHeader} >
{
    isMenuIconVisible && (
  <div className="iconn"> <button className={styles.menuButton} onClick={toggleSideBar}> <AiOutlineMenu className={styles.icon} /></button></div>

    )
   
}
{
     !isMenuIconVisible && (
        <div className="iconn"> <button className={styles.menuButton} onClick={toggleSideBar}> <MdOutlineClose className={styles.icon} /></button></div>
      
          )
}

<div className="iconn"><TfiSearch  className={styles.icon}/></div>
    </div>
  <div className={styles.logo}>  <h3>INTERNATIONAL BUSINESS TIMES</h3>
  </div>

  <div className={styles.btnstyle}>
  <button className={styles.button}><span>NEWSLETTER</span> <span>SIGNUP</span></button>
  <div className="iconn">  <CiUser className={styles.icon}/></div>
  </div>
    </header> 
    {
    isSideBarOpen && (
        <div className={styles.sidebar}>
        <TextField
              id="outlined-password-input"
              type="text"
              className={styles.searchInput}
              placeholder="Search"
              
            />
    <div className={styles.searchInputNavbarLogo}>
    <TfiSearch/>
    </div>
    <div className={styles.sideLinksNavbar  }>
    
                <Button className={styles.linkButtons}> World</Button>
                <Button className={styles.linkButtons}> U.S.</Button>
                <Button className={styles.linkButtons}> Economy & Markets</Button>
                <Button className={styles.linkButtons}> Companies</Button>
                <Button className={styles.linkButtons}> Technology</Button>
                <Button className={styles.linkButtons}> Digital Life</Button>
                <Button className={styles.linkButtons}> Culture</Button>
                <Button className={styles.linkButtons}> Sports</Button>
                <Button className={styles.linkButtons}> Crypto</Button>
                <Button className={styles.linkButtons}> Opinion</Button>
           
    </div>
    <div className="dropdownsForSideBar">
    <div className="firstdropdown" style={{border:'1px solid lightgray', width:'390px'}}>
    <Button className={styles.linkButtons2} onClick={toggleDropDown} > Listings & More <FaChevronDown style={{marginLeft:'240px'}} />
     </Button>
    { 
    isDropDownOpen && (
        <div className={styles.dropDownMenu}>
    <Button className={styles.linkButtons}>  Spotlight</Button>
    <Button className={styles.linkButtons}>  Glossary</Button>
    <Button className={styles.linkButtons}>  SMB Forum</Button>
    <Button className={styles.linkButtons}>  Glossary</Button>
    <Button className={styles.linkButtons}>  K-Wave</Button>
    <Button className={styles.linkButtons}>  CEO Spotlight</Button>
    
        </div>
    )
        }
    
    </div>
    <div className="editiondropdown" style={{border:'1px solid lightgray', width:'390px'}}>
        
    
    <Button className={styles.linkButtons2} onClick={toggleDropDownForEdition} > <IoEarth style={{marginRight:'20px'}}/> Editions <FaChevronDown style={{marginLeft:'251px'}} />
     </Button>
    { 
    isDropDownOpenForEditions && (
        <div className={styles.dropDownMenu}>
    <Button className={styles.linkButtons}>  Australia Edition</Button>
    <Button className={styles.linkButtons}>  India Edition</Button>
    <Button className={styles.linkButtons}>  International Edition</Button>
    <Button className={styles.linkButtons}>  Singapoure Edition</Button>
    <Button className={styles.linkButtons}>  United Kingdom</Button>
    <Button className={styles.linkButtons}>  United States</Button>
    
        </div>
    )
        }
    </div>
    
    </div>
    <div style={{border:'1px solid lightgray', width:'390px'}}>
    <Button className={styles.linkButtons2}><FaEnvelope style={{marginRight:'20px'}}/> NEWSLETTER</Button>
        
    </div>
    <div className="footerForSideBar">
        <p style={{marginLeft:'150px', marginTop:'20px', fontSize:'12px'}}>FOLLOW US</p>
        < FaFacebookF style={{marginLeft:'80px', marginTop:'20px', marginBottom:'20px'}}/>
        <FaTwitter style={{marginLeft:'80px', marginTop:'20px', marginBottom:'20px'}}/>
        <FaLinkedinIn style={{marginLeft:'80px', marginTop:'20px', marginBottom:'20px'}}/>
    </div>
        </div>
    )
 }
    <nav className={styles.nav}>
        <div className="navbar">
        <span className={styles.dateNav}>{date.toDateString()}</span>
        </div>
        <div className="pagesForNavbar">
            <Button className={styles.linkButtons}> World</Button>
            <Button className={styles.linkButtons}> U.S.</Button>
            <Button className={styles.linkButtons}> Economy & Markets</Button>
            <Button className={styles.linkButtons}> Companies</Button>
            <Button className={styles.linkButtons}> Technology</Button>
            <Button className={styles.linkButtons}> Digital Life</Button>
            <Button className={styles.linkButtons}> Culture</Button>
            <Button className={styles.linkButtons}> Sports</Button>
            <Button className={styles.linkButtons}> Crypto</Button>
            <Button className={styles.linkButtons}> Opinion</Button>
        </div>
        <div className="rightSideOfNavbar">
           <span className={styles.lastSpanForNavbar}>US Edition</span>
        </div>
    </nav>



  </Container>
    </>
  )
}

export default Navbar