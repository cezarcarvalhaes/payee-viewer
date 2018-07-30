import React from 'react';
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