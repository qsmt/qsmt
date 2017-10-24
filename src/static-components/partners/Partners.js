import React, {Component} from 'react';
import { ImagePage } from '../../components';

import image1 from '../../static-components/partners/1.jpg';
import image2 from '../../static-components/partners/2.png';

const data = [
    {
        title: '伙伴计划',
        image: image1,
    },
    {
        title: '合作品牌',
        image: image2
    },
];

class Partners extends Component {
    static path = '/partners';


    render() {
        return (
            <ImagePage data={data}/>
        );
    }

}

export default Partners;
