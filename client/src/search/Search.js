import React from "react";
import HeaderSimple from "../common/HeaderSimple";
import {toast, ToastContainer} from "react-toastify";
// import Card from "../card/Card";
import CardSimple from "../card/CardSimple";
import queryString from 'query-string'
import Loading from "../common/Loading";
import config from "../Config.json";

const host = config.url;
// const host = "https://news-app-wendihua.azurewebsites.net"
// const host="http://ec2-54-198-202-6.compute-1.amazonaws.com:4000"


export default class Search extends React.Component {
    constructor(props){
        super(props);
        const values = queryString.parse(props.location.search);
        // console.log("local",localStorage.getItem("source"))
        if(localStorage.getItem("source") === null) {
            // console.log("undefined")
            localStorage.setItem("source", "guardian");
        }
        if(values.source === "undefined") {
            // console.log(typeof values.source, values.source)
            values.source = localStorage.getItem("source");
            // console.log(localStorage.getItem("source"),"local");
        }
        this.state = {
            q:values.q,
            source:values.source,
            isLoaded:false
        }
    }

    render() {
        return (
            <div>
                <HeaderSimple ></HeaderSimple>
                <h1 style={{margin:"20px 0 10px 20px"}}>Results</h1>

                <ToastContainer containerId="favorite" position={toast.POSITION.TOP_CENTER} hideProgressBar={true} />
                {this.state.isLoaded? <div className="fav-main">
                    {this.state.results.map((item, index) => {
                        return <div className="item" key={index}><CardSimple content = {item} deleteItem={this.deleteItem}/></div>
                    })}
                </div> : <Loading></Loading>
                }
            </div>
        );
    }
    componentDidMount() {
        // console.log(this.state);
        const url = `${host}/${this.state.source}/search?q=${this.state.q}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    // console.log(result.response.results);
                    this.setState({
                        results:result.returns,
                        isLoaded: true,
                        // items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.location.search !== this.props.location.search) {
            // console.log("uodate",prevProps,this.props);
            const values = queryString.parse(this.props.location.search);
            // console.log("local",localStorage.getItem("source"))
            if(values.source === "undefined") values.source = localStorage.getItem("source");
            this.setState({
                q:values.q,
                source:values.source,
            })
            const url = `${host}/${values.source}/search?q=${values.q}`;
            // console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        // console.log(result);
                        // console.log(result.response.results);
                        this.setState({
                            results:result.returns,
                            isLoaded: true,
                            // items: result.items
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }
}
