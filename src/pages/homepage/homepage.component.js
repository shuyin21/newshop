import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomepageContainer } from './hompage.styles';


const Homepage = ({ history }) => {
    return (




        <HomepageContainer>
            <Directory history={history} />
        </HomepageContainer>
    )
}

export default Homepage
