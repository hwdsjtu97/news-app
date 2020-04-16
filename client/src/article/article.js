import React from "react";
import ArticleItem from "./ArticleItem";
import HeaderSimple from "../common/HeaderSimple";
import Loading from "../common/Loading";
// const host = "https://news-app-wendihua.azurewebsites.net"
const host="http://ec2-54-198-202-6.compute-1.amazonaws.com:4000"
export default class Article extends React.Component {


    render(){

        const {match, location} = this.props;
        // console.log(match,location)
        const{content} = this.state;
        // console.log(location.search);
        // const obj = JSON.stringify(location, null, 2);
        return <div>
            <HeaderSimple like={false}></HeaderSimple>
            {this.state.isLoaded?<ArticleItem content={content}/>:<Loading/>}

        </div>
    }

    constructor(props) {
        super(props);
        const {match, location} = props;
        const articleId = location.search.slice(4);
        const regex = /www.nytimes.com/g;
        const source = (articleId.match(regex) === null)? "guardian":"nytimes"
        this.state={
            content:{},
            isLoaded:false,
            source,
            articleId
        }
    }
    componentDidMount() {
        const {match, location} = this.props;
        const articleId = location.search.slice(4);
        // console.log(articleId);
        // console.log(location)
        const url = `${host}/${this.state.source}/article?id=${this.state.articleId}`;
        // console.log(url)
        // const id="sport/2020/mar/27/talking-horses-how-safe-is-money-in-your-online-betting-account";
        // const apiKey="705004a3-c586-45b5-99da-72b373e6f62d";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    // console.log(result.response.content);
                    this.setState({
                        content:result,
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
