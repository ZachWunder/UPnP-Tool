import React, { Component } from "react";

import { List, ListItem, ListItemText } from "@material-ui/core";

import ActionArgumentsPresent from "./ActionArguments";

const getActionsFromMain = window
    .require("electron")
    .remote.require(".././resources/deviceInfo").getServiceActions;

//Takes SCPDURL as prop
class ActionList extends Component {
    state = {
        actions: []
    };

    componentWillMount() {
        getActionsFromMain(this.props.SCPDURL)
            .then(msg => {
                this.setState({ actions: msg });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.SCPDURL !== prevProps.SCPDURL) {
            getActionsFromMain(this.props.SCPDURL)
                .then(msg => {
                    console.log(msg);
                    if (msg.length === 0) {
                        this.setState({
                            actions: [{ name: "No actions for this service" }]
                        });
                    } else if (msg.length === 1) {
                        this.setState({ actions: [{ name: msg.name }] });
                    } else {
                        this.setState({ actions: msg });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        console.log("ACTIVEACTION");
        console.log(this.state.actions);
        return (
            <div>
                <List component="nav">
                    {this.state.actions.length ? (
                        this.state.actions.map((action, i) => {
                            return (
                                <ListItem
                                    button
                                    key={i}
                                    onClick={() => {
                                        this.setState({ activeAction: action });
                                    }}
                                >
                                    <ListItemText primary={action.name} />
                                </ListItem>
                            );
                        })
                    ) : (
                        <ListItem
                            button
                            onClick={() => {
                                this.setState({
                                    activeAction: this.state.actions
                                });
                            }}
                        >
                            <ListItemText primary={this.state.actions.name} />
                        </ListItem>
                    )}
                </List>
                {this.state.activeAction ? (
                    <ActionArgumentsPresent
                        args={this.state.activeAction}
                        soapData={{
                            ControlURL: this.props.ControlURL,
                            ServiceType: this.props.ServiceType
                        }}
                    />
                ) : (
                    <p>Click an action to display it's arguments</p>
                )}
            </div>
        );
    }
}

export default ActionList;
