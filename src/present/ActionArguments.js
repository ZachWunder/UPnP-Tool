import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const sendAction = window
    .require("electron")
    .remote.require(".././resources/actions");

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: 8,
        marginRight: 8
    }
});

class ActionArgumentsPresent extends Component {
    state = {
        paramList: { ignore: "placeholder" }
    };
    handleSubmit = event => {
        event.preventDefault();
        console.log(
            this.props.soapData.ControlURL,
            this.props.soapData.ServiceType,
            this.props.args.name,
            this.state.paramList
        );
        let paramList = [];
        for (const [key, value] of Object.entries(this.state.paramList)) {
            if (key !== "ignore") {
                paramList.push({ argName: key, argValue: value });
            }
        }
        console.log(paramList);
        sendAction(
            this.props.soapData.controlURL,
            this.props.soapData.serviceType,
            this.props.args.name,
            paramList
        )
            .then(message => {
                console.log(message);
                this.setState({ paramList: { ignore: "placeholder" } });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const args = this.props.args.argumentList
            ? this.props.args.argumentList.argument
            : false;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {args && args.length > 0 ? (
                        args.map(arg => {
                            if (arg.direction === "in") {
                                return (
                                    <TextField
                                        label={arg.name}
                                        key={arg.name}
                                        onChange={e => {
                                            let paramList = Object.assign(
                                                {},
                                                this.state.paramList
                                            );
                                            paramList[arg.name] =
                                                e.target.value;
                                            this.setState({ paramList });
                                        }}
                                    />
                                );
                            }
                        })
                    ) : (
                        <p>No Arguments for this action</p>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        label="Submit"
                        type="submit"
                    >
                        Send
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(ActionArgumentsPresent);
