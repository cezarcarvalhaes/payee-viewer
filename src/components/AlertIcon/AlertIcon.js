import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Warning from '@material-ui/icons/Warning'

const AlertIcon = () => (
    <div>
        <Tooltip title = "Credit Card Expired">
            <Warning color = "secondary"/>
        </Tooltip>
    </div>
)

export default AlertIcon;