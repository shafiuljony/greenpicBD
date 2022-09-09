import { v4 as uuidv4 } from 'uuid';
import oliveImg from '../images/OLIVE FRUIT.jpg'
import puffedRiceImg from '../images/puffed-rice.jpg';
import teaFlayerImg from '../images/tea-flayer.jpg';
const sliders = [
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'JAitun',
        img: oliveImg,
    }
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'JAitun',
        img: puffedRiceImg,
    }
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'teaFlayerImg',
        img: teaFlayerImg,
    }
];

export default sliders;