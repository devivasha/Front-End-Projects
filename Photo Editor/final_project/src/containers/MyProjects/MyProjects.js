import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import AddProject from '../../components/AddProject/AddProject';
import CustomProject from '../../components/Modals/ModalProjectName';
import ProjectMenu from "../../components/Projects/ProjectMenu/ProjectMenu";
import SortFields from "../../components/Projects/ProjectsSortFields/ProjectsSortFields";
import stampToTimeConverter from "../../modules/stampToTimeConverter";
import { addProject, deleteProject, getProjects, renameProject } from "../../store/actions";
import { apiHost, CONNECT_TO_PROJECT } from "../../store/constants/types";
import styles from "./MyProjectsStyle";

const useStyles = makeStyles(styles);

let prevI = [];
let lstSortBy = '';
function MyProjects({ projects, sortBy, getProjects, openProject, deleteProject, user, addProject, renameProject, project_id }) {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        if (lstSortBy !== JSON.stringify(sortBy)) {
            prevI = [];
            lstSortBy = JSON.stringify(sortBy)
        }

        if (user.plan || user.plan !== 'temp') getProjects(1)

    }, [getProjects, sortBy, user.plan]);

    const routeChange = () => {
        let path = "/edit-images";
        history.push(path);
    };
    const toMainPage = () => {
        let path = "/";
        history.push(path);
    }

    if (!user.plan || user.plan === 'temp') {
        toMainPage()
    }
    const [projId, setProdjId] = useState('');

    const handleClick = (event) => {
        openProject(event.target.id);
        setProdjId(event.target.id);
        routeChange()
    }
    const [projectIsOpen, setProjectIsOpen] = useState(false);

    const useMenu = (id, type) => {
        if (type === 'Open') {
            openProject(id);
            routeChange()
        } else if (type === 'Rename') {
            setProjectIsOpen(true);
            setProdjId(id)
        } else if (type === 'Delete') {
            deleteProject(id)
        }
    }
    function handleClickProject() {
        setProjectIsOpen(true)
    }

    const projectOpenModal = projectIsOpen === true && (
        <CustomProject onClick={() => setProjectIsOpen(true)}
            accept={(project_id, newTitle) => {
                setProjectIsOpen(false);
                if (projId === '') {
                    addProject(newTitle);
                } else {
                    renameProject(projId, newTitle)
                }
            }
            }
            CloseModal={() => {
                setProjectIsOpen(false);
            }}>
        </CustomProject>
    );

    return (
        <div className={classes.mywrapper}>
            {projectOpenModal}
            {/*control project tools*/}
            <Grid className={classes.sort} container spacing={1} justify="flex-start">
                <SortFields />
            </Grid>
            {/*Project cords 2*/}
            <Grid className={classes.container} container spacing={3} justify="flex-start">
                <AddProject onClick={handleClickProject} />
                {projects.map((project, i) => {
                    let title = project.title
                    if (title.length > 17) {
                        title = title.substr(0, 16) + '...'
                    }
                    return (
                        <React.Fragment key={project.id}>
                            <Grid item key={project.id}>
                                <Card className={classes.card} variant="outlined" square>
                                    <CardActionArea style={{ backgroundColor: "#f2f2f2" }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={apiHost + `editor/${project.id}/preview`}
                                            id={project.id}
                                            title={project.title}
                                            onClick={handleClick}
                                        />
                                    </CardActionArea>
                                    <Card className={classes.root2}>
                                        <div className={classes.details}>
                                            <CardContent className={classes.content} onClick={() => { openProject(project.id); routeChange() }}>
                                                <Typography className={classes.prjTitle} component="h2">
                                                    {title}
                                                </Typography>
                                                <Typography className={classes.descText} color="textSecondary" component="p">
                                                    {project.photos.origin.length} photos, edited {stampToTimeConverter(project.updatedAt)}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <CardActions className={classes.pMenu}>
                                            <ProjectMenu onClick={useMenu} projId={project.id} />
                                        </CardActions>
                                    </Card>
                                </Card>
                            </Grid>
                            <Waypoint onEnter={() => {
                                let dv = i + 2
                                if (dv / 11 === Math.trunc(dv / 11) && prevI.indexOf(dv) === -1) {
                                    getProjects((dv / 11) + 1, sortBy);
                                    prevI.push(dv)
                                }
                            }}
                            />
                        </React.Fragment>
                    )

                })}
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        sortBy: state.projects.sortBy,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProject: (name) => dispatch(addProject(name)),
        getProjects: (page, sortBy) => dispatch(getProjects(page, sortBy)),
        deleteProject: (project_id) => dispatch(deleteProject(project_id)),
        renameProject: (project_id, newTitle) => dispatch(renameProject(project_id, newTitle)),
        openProject: (id) => dispatch({ type: CONNECT_TO_PROJECT, payload: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyProjects)