
import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import SortableTable from 'react-sortable-table';
window.React = require('react');

import { entities } from '../data';

class TableEntities extends Component {
    
        render() {
            let title = 'Entities'
            let data = entities().all;
    
            let headers = ['Service Line',
                           'Service Type',
                           'Client Name',
                           'FMS Code',
                           'Due Date'];
    
            return (
                <div>
                    <Grid title={title} headers={headers} data={data} />
                </div>
            );
        }
    }
    
    export default GridAllJobs;