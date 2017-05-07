/* eslint-disable */
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import { deploymentActions } from '../constants';

const Field = ({ fieldName, fieldText, deploymentStatus, campaignValues, handleChange }) => (
    <FormGroup controlId={ fieldName }>
        <Col componentClass={ ControlLabel } md={ 4 }>{ fieldText }</Col>
        <Col md={ 8 }>
            <FormControl
              disabled={ deploymentStatus === deploymentActions.RUN_IN_PROGRESS }
              type="text"
              value={ campaignValues[fieldName] }
              onChange={ handleChange } />
        </Col>
    </FormGroup>
);

export default Field;
