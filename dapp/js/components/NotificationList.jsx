import React from "react";
import PropTypes from "prop-types";
import { AlertList } from "react-bs-notifier";

const NotificationList = props => (
    <AlertList
      alerts={props.notifications}
      onDismiss={props.onDismiss}
      position={props.position}
    />
);

NotificationList.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        message: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]).isRequired,
        headline: PropTypes.string,
        type: PropTypes.oneOf([ "info", "warning", "danger", "success" ]),
    })).isRequired,
    position: PropTypes.string,
};

NotificationList.defaultProps = {
    notifications: [],
    position: "top-right",
};

export default NotificationList;
