import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import { Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from '@material-ui/core/CardActionArea';
import "./ProjectImgs.scss";
import styles from "./ProjectsStyle";
const useStyles = makeStyles(styles);
import AddProject from '../../../components/AddProject/AddProject';

function ProjectImgs(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        sort: 'Sort',
        name: 'Sort',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleClick = (event) => {

        console.log(event.target.id);
    }

    return (

            <div className={classes.mywrapper}>
                {/*Project cords 2*/}
                <Grid container spacing={3} justify="flex-start">
                    {posts.map(post => (
                        <Grid item key={post.id}>

                            <Card className={classes.card} variant="outlined" square>
                                <CardActionArea style={{ backgroundColor: "#f2f2f2"}}>
                                    <CardMedia
                                        className={classes.media}
                                        image={post.image}
                                        id={post.id}
                                        title={post.title}
                                        onClick={handleClick}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
    );
}

export default ProjectImgs;
