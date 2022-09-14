import { v4 as uuidv4 } from 'uuid';
import oliveImg from '../images/olive-fruit.jpg'
import puffedRiceImg from '../images/lal-muri.jpg';
import teaFlayerImg from '../images/tea-flayer.jpg';
import doiFlierImg from '../images/doi-flier.jpg';
const sliders = [
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: oliveImg,
    },
    {
        id: uuidv4(),
        name:'puffedRice',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: puffedRiceImg,
    },
    {
        id: uuidv4(),
        name:'teaFlayer',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: teaFlayerImg,
    },
    {
        id: uuidv4(),
        name:'Doi-filer',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: doiFlierImg,
    }
];

export default sliders;