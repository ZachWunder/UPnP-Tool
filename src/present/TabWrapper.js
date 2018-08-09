import React, { Component } from "react";
import { Tab } from "@material-ui/core";

class DeviceTab extends Component {
    render() {
        return <Tab label={this.props.label} />;
    }
}

export default DeviceTab;
