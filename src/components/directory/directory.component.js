import React, { useState } from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import hats from '../../images/hats.png';
import jackets from '../../images/jackets.png';
import sneakers from '../../images/sneakers.png';
import womens from '../../images/womens.png';
import men from '../../images/men.png';


const Directory = () => {

    const [sectionItem] = useState({
        sections: [
            {
                title: 'hats',
                imageUrl: `${hats}`,
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: `${jackets}`,
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: `${sneakers}`,
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: `${womens}`,
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: `${men}`,
                size: 'large',
                id: 5,
                linkUrl: ''
            }
        ]
    })

    return (
        <div className='directory-menu'>
            {sectionItem.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id}  {...otherSectionProps} />
            ))}
        </div>
    )
}

export default Directory




