import { v4 as uuidv4 } from 'uuid';
import oliveImg from '../images/OLIVE FRUIT.jpg'
import puffedRiceImg from '../images/puffed-rice.jpg';
import teaFlayerImg from '../images/tea-flayer.jpg';
const sliders = [
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: oliveImg,
    },
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: puffedRiceImg,
    },
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: teaFlayerImg,
    }
];

export default sliders;