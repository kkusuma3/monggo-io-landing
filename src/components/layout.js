/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import './layout.scss';

const useStyles = makeStyles((theme) => ({
    fullWidth: {
        width: '100%'
    }
}));

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const classes = useStyles();

    return (
        <div className={classes.fullWidth}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer>
                ©
                {' '}
                {new Date().getFullYear()}
                , Monggo.io
                </footer>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
