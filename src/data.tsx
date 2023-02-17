import Remera1 from "../src/img/remera1.png";
import Remera2 from "../src/img/remera2.png";
import Remera3 from "../src/img/remera3.png";
import Remera4 from "../src/img/remera4.png";
import Remera5 from "../src/img/remera5.png";
import Remera6 from "../src/img/remera6.png";
import Remera7 from "../src/img/remera7.png";
import Remera8 from "../src/img/remera8.png";
import Remera9 from "../src/img/remera9.png";
import Remera10 from "../src/img/remera10.png";
import Remera11 from "../src/img/remera11.png";
import Gorra1 from "../src/img/gorra1.png";
import Gorra2 from "../src/img/gorra2.png";
import Gorra3 from "../src/img/gorra3.png";
import Gorra4 from "../src/img/gorra4.png";





export interface Producto {

    id: number;
    name: string;
    imageSrc: string;
    price: number;
    color: string;
    categoria: string;
}
export const remeras: Producto[] = [
    {
        id: 1,
        name: 'Edition Man Pink',
        imageSrc: Remera1,
        price: 2500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 2,
        name: 'What WOW',
        imageSrc: Remera2,
        price: 2500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 3,
        name: 'The love peace',
        imageSrc: Remera3,
        price: 3500,
        color: 'beige',
        categoria: 'remera',
    },
    {
        id: 4,
        name: 'The love peace two',
        imageSrc: Remera4,
        price: 3500,
        color: 'beige',
        categoria: 'remera',
    },
    {
        id: 5,
        name: 'Life Green',
        imageSrc: Remera5,
        price: 1800,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 6,
        name: 'The cubes emotions',
        imageSrc: Remera6,
        price: 3500,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 7,
        name: 'The ocean',
        imageSrc: Remera7,
        price: 1400,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 8,
        name: 'Eyes ever seen',
        imageSrc: Remera8,
        price: 3500,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 9,
        name: 'The sun',
        imageSrc: Remera9,
        price: 2500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 10,
        name: 'Change',
        imageSrc: Remera10,
        price: 2500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 11,
        name: 'Change',
        imageSrc: Gorra1,
        price: 2500,
        color: 'beige',
        categoria: 'gorra',
    },
    {
        id: 12,
        name: 'Change',
        imageSrc: Gorra2,
        price: 2500,
        color: 'blanco',
        categoria: 'gorra',
    },
    {
        id: 13,
        name: 'Change',
        imageSrc: Gorra3,
        price: 2500,
        color: 'negro',
        categoria: 'gorra',
    },
    {
        id: 14,
        name: 'Change',
        imageSrc: Gorra4,
        price: 2500,
        color: 'negro',
        categoria: 'gorra',
    },

];
