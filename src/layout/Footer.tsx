import styles from './../style/styles.module.css'
import { FaChevronDown } from "react-icons/fa";

type Props = {}

function Footer({}: Props) {
  return (
    <footer>
        <div className={styles.divFooter}>
        <h6>News</h6>

            <p>World</p>
            <p>U.S.</p>
            <p>Economy & Markets</p>
            <p>Companies</p>
            <p>Technology</p>
            <p>Digital Life</p>
            <p>Culture</p>
            <p>Sports</p>
            <p>Opinion</p>
        </div>


        <div className={styles.divFooter}>
            <h6>Featured <FaChevronDown className={styles.iconDropDownFooter}/></h6>
            <p>Social Capital</p>
            <p>Glossary</p>
            <p>Economy & Markets</p>
            <p>SMB Forum</p>
            <p>Spotlight</p>
            <p>Digital Life</p>
            <p>Crypto</p>
            <p>K-Wave</p>
            <p>CEO Spotlight</p>
        </div>


        <div className={styles.divFooter}>
        <h6>About <FaChevronDown className={styles.iconDropDownFooter}/> </h6>
            <p>About Us</p>
            <p>Contact us</p>
            <p>Advertise with us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
            <p>Cookie Policy</p>
        </div>


        <div className={styles.divFooter}>
            <h6>Editions <FaChevronDown className={styles.iconDropDownFooter}/> </h6>
            <p>United States</p>
            <p>Australia</p>
            <p>Brazil</p>
            <p>Colombia</p>
            <p>France </p>
            <p>Germany</p>
            <p>Indonesia</p>
            <p>India</p>
            <p>International</p>
            <p>Italy</p>
        </div>

        <div className={styles.divFooter}>
        <h6>Editions<FaChevronDown className={styles.iconDropDownFooter}/> </h6>
            <p>Japan</p>
            <p>Nigeria</p>
            <p>Singapoure</p>
            <p>South Africa</p>
            <p>South Korea </p>
            <p>Spain</p>
            <p>Mexico</p>
            <p>United Kingdom</p>
        </div>

        <div className={styles.divFooter}>
        <h6>FOLLOW US<FaChevronDown className={styles.iconDropDownFooter}/> </h6>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>NewsLetter</p>
        </div>  
    </footer>
  )
}

export default Footer