import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader"
import {Bounce} from "react-toastify";
import "./Loading.css"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="sweet-loading">
                <BounceLoader
                    css={override}
                    size={40}
                    color={"#123abc"}
                    loading={this.state.loading}
                />
                <p>loading</p>
            </div>
        );
    }
}
