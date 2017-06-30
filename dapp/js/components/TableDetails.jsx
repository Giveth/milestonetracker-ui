import React from "react";
import PropTypes from "prop-types";

import { Table } from "react-bootstrap";

const TableDetails = (props) => {
    const content = props.data.map(field => (
        <tr key={field.label}>
            <td>{field.label}</td>
            <td>{field.content}</td>
        </tr>
    ));
    return (
        <Table striped bordered condensed hover>
            <tbody>
                {content}
            </tbody>
        </Table>
    );
};

TableDetails.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.element.isRequired,
    })).isRequired,
};

export default TableDetails;
