import React from "react";

const Form = ({ children }) =>
    <form>
        {children}
    </form>;

Form.propTypes = {
    children: React.PropTypes.node,
    values: React.PropTypes.object,
    update: React.PropTypes.func,
    reset: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
};

export default Form;
