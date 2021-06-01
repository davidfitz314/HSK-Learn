import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        backgroundColor: '#bfc90f',
        width: '95%',
        margin: '5px',
    },
}));

interface CategoryButtonProps {
    name: string,
    openCategory: (category: string) => void,
}

const CategoryButton = ({ name, openCategory }: CategoryButtonProps) => {
    const classes = useStyles();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.currentTarget.blur();
        openCategory(name);
    }
    return (<Button className={classes.button} onClick={handleClick}>{name}</Button>);
};

export default CategoryButton;