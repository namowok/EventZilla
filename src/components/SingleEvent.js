import React,{Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {baseUrl} from '../public/baseUrl'
import { MdDateRange,MdEditLocation } from "react-icons/md";
import {GiPriceTag } from "react-icons/gi";
import Header from  './header/Header'
import { Button } from 'reactstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import {FaTwitter} from "react-icons/fa"
import {FaGooglePlusG} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import Footer from "./Footer"
const axios = require('axios')


class SingleEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: {},
      data:this.props.event
    }
  }

  async componentDidMount() {
    var id=this.state.data
    axios({
      method: 'GET',
      url: baseUrl+`/event/`+id
    })
    .then(res => {
      this.setState({ body: res.data })
    })
    .catch(err => console.log(err) )
  }

  buynow =() =>{
    axios({
            url: baseUrl+"/eventtransaction/buynow",
            method: 'post',
            data: {
              user:JSON.parse(localStorage.getItem('user'))._id,
              event:this.state.data,
              totalTicket:1,
              amount:this.state.body.price
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
  }


  render() {
  
    return (
      <div className="App">
        <Header />
        <br/>
        <div className="row offset-1 justify-content-start">
        <div className="col-lg-7">
          <img width="780px" height="400px" style={{zIndex:1, position:'relative'}} src={`${baseUrl}/image/${this.state.body.iconUrl}`} />  
          </div>
          <div className="col-lg-4" style={{borderStyle:"groove"}}>
             <h1 className="text-left">{this.state.body.name}</h1>
             <hr/>
             <p className="text-left"><b> By </b>: Insert name of event organizer </p>
             <hr/>
              <h5 className="text-left"><MdDateRange/>{new Date(this.state.body.startDate).toDateString()}</h5>
              <br/>
              <h5 className="text-left"><MdEditLocation/>{this.state.body.venue}</h5>
              <br/>
              <h5 className="text-left"><GiPriceTag/>Rs - {this.state.body.price}</h5>
              <hr/>
              <Button color="success" size="lg" block onClick={()=>this.buynow()}>Buy Now</Button>
          </div>
          </div>
           <br/>
          <div className="row offset-1 justify-content-start">
          <div className="col-lg-7 text-left ">
          <h3>About the event</h3>
          {this.state.body.description}
          <p> </p>
           <h3>Meet the organizer</h3>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="col-lg-4 text-left">
          <h3>Share on:</h3>
          <h4>
          <IconContext.Provider value={{ color: "blue"}}>
              <FaFacebookSquare/> Facebook
            </IconContext.Provider> 
            </h4>

            
            <h4>
          <IconContext.Provider value={{ color: "blue"}}>
              <FaTwitter/> Twitter
            </IconContext.Provider> 
            </h4>

            <h4>
          <IconContext.Provider value={{ color: "red"}}>
              <FaGooglePlusG/> Google+
            </IconContext.Provider> 
            </h4>

             <h4>
          <IconContext.Provider value={{ color: "#e75480"}}>
              <FiInstagram/> Instagram
            </IconContext.Provider> 
            </h4>

          </div>
          </div>
          <Footer/>
      </div>
    )
  }
}
  
export default SingleEvent