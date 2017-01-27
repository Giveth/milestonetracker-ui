/**
 * Search Bar component with two ways binding
 *
 * Expects following properties:
 * @prop{string} filterText   Initial filter text
 * @prop{string} placeholder  Placeholder text to be displayed in the input field
 * @prop{func}   onUserInput  Function to be called when user changes content of the Search Bar
 */

import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: props.filterText,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Input value change handler. Propagates the value to the parrent.
     *
     * @param{object} event Standard event object
     */
    handleChange(event) {
        this.setState({ filterText: event.target.value });

        // Propagate the value to parent component
        this.props.onUserInput(event.target.value);
    }

    render() {
        return (
            <FormGroup>
                <FormControl
                  type="text"
                  placeholder={ this.props.placeholder }
                  value={ this.state.filterText }
                  onChange={this.handleChange}
                />
            </FormGroup>
        );
    }
}

SearchBar.propTypes = {
    filterText: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    onUserInput: React.PropTypes.func.isRequired,
};
