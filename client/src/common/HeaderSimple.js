import React from "react";
import {Link} from "react-router-dom";
import Selector from "./Selector";
import "./Header.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from "react-switch";
import { FaBeer,FaRegBookmark,FaBookmark } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'



class HeaderSimple extends React.Component{
    constructor(props) {
        super(props);
        let checked = (props.source === "guardian");
        this.state = {
            checked: checked,
            like:props.like,
            source:props.source
        };
        this.changeSource = props.changeSource;
        this.handleChange = this.handleChange.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }
    handleChange(checked) {
        let source;
        if(checked) source = "guardian";
        else source = "nytimes"
        this.setState({checked,
            source
        },()=>{
            // localStorage.setItem("checked",checked);
            this.changeSource();
        });

        // console.log(this.state.checked);
    }
    handleLike(like) {
        this.setState({...this.state, like})
    }


    render(){
        // console.log(this.changeSource,this.state.source);
        return (
            <div className="header">

                <Navbar variant="dark" className="color-nav" expand='lg'>
                    <Selector source={this.state.source}/>
                    {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                    <Nav className="mr-auto">
                        <Nav.Link className="link-font" href="/">Home</Nav.Link>
                        <Nav.Link className="link-font" href="world">World</Nav.Link>
                        <Nav.Link className="link-font" href="politics">Politics</Nav.Link>
                        <Nav.Link className="link-font" href="business">Business</Nav.Link>
                        <Nav.Link className="link-font" href="technology">Technology</Nav.Link>
                        <Nav.Link className="link-font" href="sports">Sports</Nav.Link>

                    </Nav>
                    <Link to='/favorites'><div data-tip="Bookmark" onClick={() => this.handleLike(true)}>{this.state.like?  <FaBookmark style={{color: "white", fontSize:"20px", margin:"10px"}}/> :
                        <FaRegBookmark style={{color: "white", fontSize:"20px", margin:"10px"}}/>  }</div></Link>


                    <ReactTooltip place="bottom" type="dark" effect="solid"/>


                    {/*<p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>*/}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


export default HeaderSimple;
