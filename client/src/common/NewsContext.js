import React from "react";
import "./NewsContext.css";
import SimpleDialogDemo from "./Dialog";
export default class NewsContext extends React.Component {

    render() {
        const {item} = this.props;
        const source = "http://www.theguardian.com"
        return <div className="news-context">
            <h1 style={{display:"inline-block"}}>{item.webTitle} <SimpleDialogDemo  newsTitle={item.webTitle} shareUrl={item.url} /></h1>

            <p>{item.description}</p>

        <div className="context-foot">
            <span className="date">{item.date.substring(0,10)}</span>
            <div id={item.section}>{item.section.toUpperCase()}</div>
        </div>

        </div>
    }
}





