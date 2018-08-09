import React, { Component } from "react";
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider
} from "@material-ui/core";

import ActionList from "./ActionList";

class Services extends Component {
    state = {
        activeService: { Name: "None", SCPDURL: "None" }
    };

    render() {
        return (
            <div>
                <Grid container spacing={8} direction="row">
                    <Grid item>
                        <Typography variant="display1" align="center">
                            Service List
                        </Typography>
                        <List component="nav">
                            {this.props.services.map((service, i) => {
                                return (
                                    <div key={i}>
                                        <ListItem
                                            button
                                            onClick={() => {
                                                this.setState({
                                                    activeService: {
                                                        Name:
                                                            service.serviceType,
                                                        SCPDURL:
                                                            service.SCPDURL,
                                                        ControlURL:
                                                            service.BaseURL +
                                                            service.controlURL
                                                    }
                                                });
                                            }}
                                        >
                                            <ListItemText
                                                primary={service.serviceType}
                                            />
                                        </ListItem>
                                        <Divider />
                                    </div>
                                );
                            })}
                        </List>
                    </Grid>
                    <Grid item>
                        <Typography variant="display1" align="center">
                            Action input and values
                        </Typography>

                        {this.state.activeService.Name !== "None" ? (
                            <ActionList
                                SCPDURL={this.state.activeService.SCPDURL}
                                ServiceType={this.state.activeService.Name}
                                ControlURL={this.state.activeService.ControlURL}
                            />
                        ) : null}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Services;
