import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import "./main.css";
import LatestNews from './LatestNews';
import Buttonforblog from './buttonforblogs'
export default function MainContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div className="container">
                    <div className="latestnews">
                        <LatestNews/>
                    </div>
                    <div className="blogbutton">
                        <Buttonforblog />
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}