import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotificationList from "../components/NotificationList";
import { dismissTransaction } from "../actions/transactions";
import { network } from "../blockchain";

class NotificationListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: this.getNotifications(),
        };
        this.dismissNotification = this.dismissNotification.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props === nextProps) return;

        this.props = nextProps;
        this.setState(() => ({ notifications: this.getNotifications() }));
    }

    getNotifications() {
        const notifications = [];
        const wordBreak = "break-all";

        this.props.transactions.forEach((tx) => {
            const etherscanLink = (
                <a
                  href={`${ network.etherscan }tx/${ tx.hash }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ wordBreak }}
                >
                    {tx.hash}
                </a >
            );

            let msg;
            if (tx.mined) {
                msg = (
                    <div >
                        Transaction {etherscanLink} has been successfully mined!
                    </div >
                );
            } else {
                msg = (
                    <div >
                        Transaction {etherscanLink} is being added to the Ethereum blockchain
                    </div >
                );
            }

            notifications.push({
                id: tx.hash,
                message: msg,
                type: tx.mined ? "success" : "info",
            });
        });

        return notifications;
    }

    dismissNotification(notification) {
        this.props.dismissTransaction(notification.id);
    }

    render() {
        return (
            <NotificationList
              onDismiss={this.dismissNotification}
              notifications={this.state.notifications}
            />
        );
    }
}

NotificationListContainer.propTypes = {
    dismissTransaction: PropTypes.func.isRequired,
    transactions: PropTypes.arrayOf(PropTypes.shape({
        hash: PropTypes.string.isRequired,
        mined: PropTypes.bool.isRequired,
    })).isRequired,
};

const mapStateToProps = state => ({
    transactions: state.transactions,
});

const mapDispatchToProps = ({
    dismissTransaction,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationListContainer);
