import React, { Component } from 'react'
import {
    useParams,
  } from "react-router-dom";

export default class ContentHome extends Component {
    render() {
        let { topicId } = useParams();
        return (
            <div>
                <h3>{topicId}</h3>
            </div>
        )
    }
}
