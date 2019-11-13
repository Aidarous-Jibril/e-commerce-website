import React from 'react';
import { connect } from 'react-redux';

import './directoryMenu.styles.scss';
import MenuItem from '../directory-menu-item/DirectoryMenuItem';

import { createStructuredSelector } from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directorySelector';

const DirectoryMenu = ({sections}) => {
    return (
        
        <div className='directory-menu'>
           {sections.map(({id,title, imageUrl, size, linkUrl}) => (
               <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
           ))}
        </div>
    );
   
};


const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(DirectoryMenu);
