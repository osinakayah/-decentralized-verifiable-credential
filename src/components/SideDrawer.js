import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const SideDrawer = function () {
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button key={1}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                </ListItem>

            </List>
        </div>
    )
}

export default SideDrawer
