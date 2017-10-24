import React from 'react';
import { ImagePage } from '../../components';

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';

const data = [
    {
        title: '联系方式',
        image: image1,
    },
    {
        title: '诚聘英才',
        image: image2
    },
    {
        title: '面试说明',
        image: image3
    },
];

const career = () => (
	<ImagePage data={data}/>
);
career.path = '/career';

export default career;
