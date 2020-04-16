import React from "react";
import './ArticleItem.css'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import { FaBeer,FaRegBookmark,FaBookmark } from 'react-icons/fa';
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comment from "./Comment";
// import {css} from 'glamor'
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

export default class ArticleItem extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.myRef2 = React.createRef();
        // if(localStorage.getItem("favorite") === undefined)  localStorage.setObject("favorite", {});
        if(localStorage.favorite === undefined) {
            // console.log(1, thisItem)
            localStorage.setObject("favorite", {});
        }
        const favorite = localStorage.getObject("favorite");
        const like = (favorite[props.content.id] !== undefined);
        this.state={
            collapsed:"collapsed",
            like,
            content:props.content
        }
        this.handleLike = this.handleLike.bind(this);
        this.changeCollapse = this.changeCollapse.bind(this);
        this.scroll = this.scroll.bind(this);
    }
    saveFavorite = (item) => {
        let thisItem = {};
        thisItem[item.id] = item;
        if(localStorage.favorite === undefined) {
            // console.log(1, thisItem)
            localStorage.setObject("favorite", thisItem);
        }
        else {
            let favorite = localStorage.getObject("favorite");
            // console.log(2, favorite)
            favorite[item.id] = item;
            localStorage.setObject("favorite", favorite)
        }
    }
    removeFavorite = (item) => {
        let favorite = localStorage.getObject("favorite");
        delete favorite[item.id];
        // console.log(3,favorite)
        localStorage.setObject("favorite", favorite)
    }
    handleLike(like,title) {
        this.setState({like});
        if(like) {
            this.notifyA(title);

            this.saveFavorite(this.state.content);
        }
        else {
            this.notifyB(title);
            this.removeFavorite(this.state.content);
        }
    }
    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    render() {
        const {content} = this.props;
        // console.log(content);
        const imgUrl = content.image;
        const descriptions = content.description;
        // console.log(imgUrl);
        return <div className="article-container">
            <h1>{content.title}</h1>
            <div className="bar">
                <div className="date">{content.date}</div>
                <div className="share">
                    <div data-tip="Facebook" style={{flexGrow:"1",textAlign:"center"}}><FacebookShareButton url={content.url} quote="#CSCI_571_NewsApp"><FacebookIcon round={true} size="30px"/></FacebookShareButton></div>
                    <div data-tip="Twitter" style={{flexGrow:"1",textAlign:"center"}}><TwitterShareButton url={content.url} hashtags={["CSCI_571_NewsApp"]}><TwitterIcon round={true} size="30px"/></TwitterShareButton></div>
                    <div data-tip="Email" style={{flexGrow:"1", textAlign:"center"}}><EmailShareButton url={content.url} subject="#CSCI_571_NewsApp"><EmailIcon round={true} size="30px"/></EmailShareButton></div>
                </div>
                <div className="bookmark">
                    <ToastContainer containerId={'A'} position={toast.POSITION.TOP_CENTER} hideProgressBar={true} />
                    {/*<ToastContainer containerId={'B'} position={toast.POSITION.TOP_CENTER} hideProgressBar={true}/>*/}

                    <div data-tip="Bookmark" onClick={() => {this.handleLike(!this.state.like, content.title);}} >{this.state.like?  <FaBookmark style={{color: "red", fontSize:"25px", margin:"10px"}}/>:<FaRegBookmark style={{color: "red", fontSize:"25px", margin:"10px"}}/>  }</div>
                    <ReactTooltip place="top" type="dark" effect="solid"/>
                </div>
            </div>

            <img ref={this.myRef2} src={imgUrl} alt=""/>
            <p  className={this.state.collapsed}>{descriptions}</p>
            <div  className="expand-button" onClick={()=>{

                this.changeCollapse();}
            }>
                {(this.state.collapsed === "collapsed") ? <MdExpandMore/> :
                    <MdExpandLess/>
                }
            </div>
            <div ref={this.myRef} >
                <Comment  id = {content.id} ></Comment>
            </div>
        </div>

    }

    changeCollapse = () =>{
        if (this.state.collapsed === "collapsed") {
            this.setState({collapsed:"expand"});
            this.scroll(this.myRef);
        }
        else {
            this.setState({collapsed:"collapsed"});
            this.scroll(this.myRef2);
        }
    };

    notifyA = (title) => {
        toast(`Saving ${title}`, {containerId: 'A',bodyClassName:'notify'});
        // console.log("notifyA");
    }
    notifyB = (title) => {
        toast(`Removing ${title}`, {containerId: 'A',bodyClassName:'notify'});
        // console.log("notifyB")
    }

    }



