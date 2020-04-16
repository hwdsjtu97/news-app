import React from 'react';
import Async from 'react-select/async';
import Select from 'react-select';
import  { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import {Link} from "react-router-dom"
import styled from 'styled-components';
// import debounce from 'lodash/debounce';
// type State = {
//     inputValue: string,
// };
const bingKey="529ec4d1f06e487983c2615d0100196a";



const StyledLink = styled(Link)`
    all:unset;
    color:black;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        all:unset;
    }
`;
const Option = props => {
    // console.log(props);
    return (

        <StyledLink to={`/search?q=${props.data.value}&source=${props.data.source}`}><components.Option {...props} /></StyledLink>
    );
};
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
// const
// const debouncedHnadleSearchChange = debounce(handleSearchChange,1000);
const defaultOption = {label:"Enter Keywords ..", value:"default"};
// const




export default class Selector extends React.Component {
    constructor(props){
        super(props);
        // console.log("selector source", props);
        const source = props.source === undefined? localStorage.getItem("source"):props.source;
        this.state={
            inputValue:'',
            source
        }
    }
    render() {
        return (
            <div className="app">
                <div className="container" style={{width : "250px", display:"block"}}>

                    <AsyncSelect loadOptions={this.promiseOptions}  onInputChange={this.handleInputChange} defaultValue={defaultOption} style={{width : "100%"}} components={{Option}} noOptionsMessage={()=><span>No match</span>}/>
                </div>
            </div>
        );
    }

    handleInputChange = debounce((newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    },1000);


    promiseOptions = debounce( (inputValue,callback) =>
    {
        // console.log("input",inputValue)
        setTimeout(() => {
            // console.log("resolve");
            this.handleSearchChange(inputValue, callback,this.props.source);
        }, 1000)
    },1000);

    handleSearchChange = (value ,callback,source) => {
        // console.log("source")
        // console.log("event");
        try {
            fetch(
                `https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q=${value}`,
                {
                    headers: {
                        "Ocp-Apim-Subscription-Key": bingKey
                    }
                }
            ).then(res=>res.json())
                .then(res=>{
                    // console.log(res);
                    const resultsRaw = res.suggestionGroups[0].searchSuggestions;
                    const results = resultsRaw.map(result => ({ value: result.displayText, label: result.displayText,source }));
                    callback(results);
                });

        } catch (error) {
            console.error(`Error fetching search ${value}`,error);
        }
    };

}
