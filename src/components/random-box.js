import React from "react";
import PropTypes from "prop-types";

export default class PanelBox extends React.Component {
    static propTypes = {
        value: PropTypes.string,
      };

    render() {
        return (
            <div class="panel widget detect-widget-scroll">
                <div>{this.props.value}</div>
            </div>
        );
    }
}