import React from 'react';
import './CropmanPlus.css';
import { Grid } from "@material-ui/core";


export default function CropmanPlus() {
    return (
        <div>
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="flex-start"
                  className="myServices">
                <Grid container item
                      direction="column"
                      justify="center"
                      alignItems="flex-start"
                      component='div'
                      md={12} xs={12} sm={12} >
                    <Grid container item justify="center">
                        <h2 className="services-title">Upgrade your plan</h2>
                    </Grid>
                    <Grid container item justify="center">
                        <h4 className="sub-ser-title">Unlimited usage with <strong>Cropman Plus</strong> for a price of a coffee cup</h4>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
