import React from 'react';
import NewsItem from "./NewsItem";
import "./NewsList.css"
import Header from "./Header";
import Loading from "./Loading";

// const host = "https://news-app-wendihua.azurewebsites.net";
const host="http://ec2-54-198-202-6.compute-1.amazonaws.com:4000"

export  default  class NewsList extends React.Component {
    constructor() {
        super();
        // if storage has source then use the stored source
        // console.log("storage",localStorage);
        let source = (localStorage.source === undefined) ? "guardian": localStorage.source;
        this.state = {
            source:source
        }
    }
    changeSource = () => {
        if (this.state.source === "guardian") {
            this.setState({source:"nytimes"},()=>{
                localStorage.setItem("source","nytimes");
            });

        }
        else this.setState({source:"guardian"},()=>{
                localStorage.setItem("source","guardian");
        })
    }
    render() {
        // this.props.imgLink = "lake.jpg";
        return <div>
            <Header source={this.state.source} changeSource = {this.changeSource}/>
            <div className="news-list">
                {this.state.isLoaded?
                    this.state.results.map((item, index)=>{
                        return <NewsItem key={index} item={item} />
                    }): <Loading></Loading>}

            </div>
        </div>
    }
    componentDidMount() {
        const {match, location} = this.props;
        // console.log(match.url,location);
        // const url = map[match.url];
        const url = `${host}/${this.state.source}${match.url}`;
        // console.log(url);
        this.setState({
            match,
            location
        });
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    // console.log(result.response.results);
                    this.setState({
                        ...this.state,
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
        // console.log(prevProps,prevState,snapshot,this.state);
        if(prevState.source !== this.state.source) {
            // console.log(prevState.source, this.state.source)
            const {match, location} = this.props;
            const url = `${host}/${this.state.source}${match.url}`;
             // console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        // console.log(result);
                        // console.log(result.response.results);
                        this.setState({
                            ...this.state,
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
