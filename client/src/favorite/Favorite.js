import React from "react";
import HeaderSimple from "../common/HeaderSimple";
import './Favorite.css';
import Card from "../card/Card";
import divWithClassName from "react-bootstrap/cjs/divWithClassName";
import {toast, ToastContainer} from "react-toastify";


export default class Favorites extends React.Component{
    constructor(props){
        super(props);
        const favorite = localStorage.getObject("favorite");
        const favoriteList = [];
        for(let item in favorite) {
            favoriteList.push(item)
        }
        this.state = {
            favorite,
            favoriteList
        }
    }
    deleteItem = (id) => {
        let {favoriteList, favorite} = this.state;
        var index = favoriteList.indexOf(id);
        if (index !== -1) favoriteList.splice(index, 1);
        delete favorite[id];
        localStorage.setObject("favorite", favorite);
        this.setState({
            favorite,favoriteList
        })
    }
    render() {
        const {favorite, favoriteList} = this.state;
        return (
            <div>
                <HeaderSimple like={true}></HeaderSimple>
                {favoriteList.length === 0? <h1 style={{textAlign:"center",fontSize:"30px"}}>You have no saved articles</h1>: <h1 style={{margin:"20px 0 10px 20px"}}>Favorites</h1>}

                <ToastContainer containerId="favorite" position={toast.POSITION.TOP_CENTER} hideProgressBar={true} />
                <div className="fav-main">
                    {favoriteList.map((item, index) => {
                        return <div className="item" key={index}><Card content = {favorite[item]} deleteItem={this.deleteItem}/></div>
                    })}
                </div>
            </div>
        );
    }
}
