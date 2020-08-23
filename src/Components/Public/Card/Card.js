import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        boxShadow: "none",

    },
    media: {
        height: 220,
        borderRadius: 5,
        position: "relative"
    },
    change: {
        width: 30,
        height: 30,
        background: "#eee",
        textAlign: "center",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bolder"
    }
});

export default function MediaCard(props) {
    const classes = useStyles();
    console.log(props.title, "card", props.data)
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.data || props.title.img}
                title="Contemplative Reptile"
                style={props.title.img && {marginRight: 20}}
            >
                {props.data &&
                <p className="position-absolute d-flex justify-content-around w-100" style={{bottom: 0, left: 0}}>
                    <span className={classes.change}>
                        {"<"}
                    </span>
                    <span className={classes.change}>
                        {">"}
                    </span>
                </p>
                }

            </CardMedia>
            {/*<CardContent>*/}
            {/*    <Typography gutterBottom variant="h6" component="h2">*/}
            {/*        {props.title.title }*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="body2" color="textSecondary" component="p">*/}
            {/*       <a href="#" >*/}
            {/*           {props.title.location}*/}
            {/*       </a>*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="subtitle2" color="textSecondary" component="p">*/}
            {/*        <TimerIcon style={{fontSize: 14}}/>{props.title.time} ${props.title.cost}*/}
            {/*    </Typography>*/}
            {/*</CardContent>*/}
        </Card>
    );
}
MediaCard.propTypes = {
    // title: PropTypes.object.isRequired
};
