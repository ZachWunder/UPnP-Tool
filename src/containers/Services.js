import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import ServiceList from "../present/ServiceList";

const getServicesFromMain = window
    .require("electron")
    .remote.require(".././resources/deviceInfo").getDeviceServices;

class Services extends Component {
    state = {
        services: []
    };
    componentDidMount() {
        console.log("URL: ");
        console.log(this.props.URL);
        getServicesFromMain(this.props.URL)
            .then(res => {
                this.setState({ services: res });
            })
            .catch(err => {
                console.log(err);
            });
    }

    getDeviceServices = URL => {
        getServicesFromMain(URL)
            .then(msg => {
                this.setState({ services: msg });
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidUpdate(prevProps) {
        if (this.props.URL !== prevProps.URL) {
            this.getDeviceServices(this.props.URL);
        }
    }

    render() {
        console.log(this.state.services);
        return (
            <div>
                <Grid container spacing={8} direction="row">
                    <Grid item>
                        <ServiceList services={this.state.services} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Services.propTypes = {
    URL: PropTypes.string.isRequired
};

export default Services;
