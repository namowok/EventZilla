import React,{Component} from 'react'
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IconContext } from "react-icons";
import PhoneNumber from 'react-phone-number';
import { useMediaQuery } from 'react-responsive'
class Footer extends Component{
	render(){
	  const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
	return(
					<div>
					<div className="footer" style={{background:"black"}}>	
					<div className="row offset-10">
					<h8 style={{color:"white"}}><b>Copyright@NamoWok</b></h8>
					</div>
					</div>
					</div>

	)
	}
}

export default Footer;