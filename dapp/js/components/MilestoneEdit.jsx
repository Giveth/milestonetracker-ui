import React from "react";
import { Field, reduxForm } from "redux-form";

let MilestoneEdit = ({ handleSubmit }) =>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
    </form>;

MilestoneEdit.propTypes = {
    handleSubmit: React.PropTypes.func,
};

// Decorate the form component
MilestoneEdit = reduxForm({
    form: "contact",
})(MilestoneEdit);

export default MilestoneEdit;
