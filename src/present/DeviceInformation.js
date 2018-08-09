import React, { Component } from "react";
import PropTypes from "prop-types";

import { List, ListItem, ListItemText } from "@material-ui/core";

class DeviceInformation extends Component {
    render() {
        const {
            Name,
            MACAddress,
            FirmwareVersion,
            UDN,
            DeviceType
        } = this.props;
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary={"Name: " + Name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"MAC Address: " + MACAddress} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"UDN: " + UDN} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={"Firmware Version: " + FirmwareVersion}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Device Type: " + DeviceType} />
                    </ListItem>
                </List>
            </div>
        );
    }
}

DeviceInformation.propTypes = {
    Name: PropTypes.string.isRequired,
    MACAddress: PropTypes.string.isRequired,
    FirmwareVersion: PropTypes.string.isRequired,
    UDN: PropTypes.string.isRequired,
    DeviceType: PropTypes.string.isRequired
};

export default DeviceInformation;
