import React from "react";
// import PropTypes from "prop-types";

const Form = ({ children }) => (
    <form>
        {children}
    </form>);

Form.propTypes = {
    // children: PropTypes.node,
    // values: PropTypes.object,
    // update: PropTypes.func,
    // reset: PropTypes.func,
    // onSubmit: PropTypes.func,
};

export default Form;
