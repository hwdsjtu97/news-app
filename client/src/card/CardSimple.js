import React from "react";
import './Card.css'
import Truncate from "react-truncate";
// import CustomizedDialogs from '../common/Dialog'
import CustomizedDialogs from "../common/Dialog";
import {IoMdTrash} from'react-icons/io';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    all:unset;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        all:unset;
    }
`;
const notifyB = (title,id) => {
    // console.log(id);
    toast(`Removing ${title}`, {bodyClassName:'notify',containerId: "favorite"});
    // console.log("notifyB")
}
const Trash = (props) => <div style={{display:"inline-block"}}>
        <IoMdTrash onClick={(e)=>{
            e.preventDefault();
            props.deleteItem(props.id);
            notifyB(props.title,props.id);}}/>

    </div>



export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content:props.content,
            truncated:false
        }
    }
    handleTruncate = (truncated)=> {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }
    render() {
        const {content, deleteItem} = this.props;
        // console.log(content);
        return <div className="card-main">

            <StyledLink to={`/article?id=${content.id}`} style={{ textDecoration: 'none' }}>
            <h1><Truncate onTruncate={this.handleTruncate} lines={2} ellipsis={<span>... <CustomizedDialogs newsTitle={content.title} shareUrl={content.url}/></span>}>{content.title}</Truncate>
                {this.state.truncated? null : <span> <CustomizedDialogs newsTitle={content.title} shareUrl={content.url}/></span>}</h1>
            <img src={content.image} alt=""/>
            <div className="card-foot">

                <span className="date">{content.date}</span>
                <div id={content.section}>{content.section.toUpperCase()}</div>
                {/*<div id={content.source}>{content.source.toUpperCase()}</div>*/}
            </div>
            </StyledLink>
        </div>
    }
}
