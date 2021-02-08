import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button as MuiButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navBar: {
        flexGrow: 1,
        margin: 0,
        borderRadius: '5px',
        padding: '0 5px',
        textAlign: 'center',
    },
    paper: {
        padding: `${theme.spacing(1)}px ${theme.spacing(8)}px `,
        backgroundColor: '#d3E145',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
    },
    line: {
        border: '1px solid #aeb301',
    },
    title: {
        textAlign: 'center',
        fontStyle: 'italic',
        textDecoration: 'underline',
        color: '#bfc90f',
    },
    description: {
        marginTop: `-${theme.spacing(1.5)}px`,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: theme.spacing(2.5),
        color: theme.palette.text.secondary,
    },
}));

interface INavButtonProps {
    level: number,
}

const Button: React.FC<INavButtonProps> = ({level}) => {
    const classes = useStyles();
    return (
        <MuiButton className={classes.paper}>{`Level ${level}`}</MuiButton>
    );
};

export default Button;