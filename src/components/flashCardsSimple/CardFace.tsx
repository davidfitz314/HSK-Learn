import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme: Theme) => createStyles({
    cardStyle: {
        backgroundColor: '#00a500',
        margin: 'auto',
        width: '100%',
        padding: `${theme.spacing(15)}px ${theme.spacing(0)}px`,
        textAlign: 'center',
        border: '1px solid #aeb301',
        borderRadius: theme.spacing(3),
        fontWeight: 'bold',
        fontSize: '150%',
    },
    help: {
        color: '#006400',
        backgroundColor: '#00a500',
        "&:hover": {
            color: '#bfc90f',
            backgroundColor: '#00a500',
        }
    },
    text: {
        color: '#d3E145',
        fontFamily: 'Tahoma, Helvetica, Arial, "Microsoft Yahei","????", STXihei, "????", sans-serif',
    }
}));

type cardFaceProps = {
    text: string,
    hint?: string,
    flip: () => void;
}

const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(14),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

export const CardFace = ({text, hint, flip}: cardFaceProps) => {
    const classes = useStyles();
    return (
        <div onClick={()=>flip()} className={classes.cardStyle}>
            <h1 className={classes.text}>
                {text}
            </h1>
            {hint && (
                <HtmlTooltip
                    placement='bottom'
                    title={
                    <React.Fragment>
                        <h3>{hint}</h3>
                    </React.Fragment>
                    }
                >
                <EmojiObjectsIcon className={classes.help} />
                </HtmlTooltip>
            )}
        </div>
    )
};