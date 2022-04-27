import React from 'react';
import candies from './images/Карамель. Шоколад. Конфеты.jpg'
import tea from './images/Чай.jpg'
import milk from './images/Молоко, сливки.jpg'
import meat from './images/Мясные деликатесы.jpg'
import water from './images/Вода.jpg'
import box from './images/Пресервы и консервы.jpg'
import fish from './images/Замороженная рыба.jpg'
import kids from './images/Детское питание.jpg'
import vegetables from './images/Овощи.jpg'
import fastfood from './images/Продукты быстрого приготовления.jpg'
import bird from './images/Полуфабрикаты из птицы.jpg'
import morse from './images/Морсы, узвары, кисели, компоты.jpg'
import bread from './images/Выпечка.jpg'

const getCategoryImage = (category) => {
    switch (category) {
        case "Карамель. Шоколад. Конфеты":
            return candies
        case "Молоко, сливки":
            return milk
        case "Чай. Травы. Кофе. Какао":
            return tea
        case "Кисломолочные продукты":
            return milk
        case "Мясные деликатесы":
            return meat
        case "Вода":
            return water
        case "Пресервы и консервы":
            return box
        case "Замороженная рыба":
            return fish
        case "Детское питание":
            return kids
        case "Овощи":
            return vegetables
        case "Колбасные изделия":
            return meat
        case "Выпечка":
            return bread
        case "Овощные консервы":
            return box
        case "Продукты быстрого приготовления":
            return fastfood
        case "Воды минеральные и питьевые":
            return water
        case "Полуфабрикаты из птицы":
            return bird
        case "Морсы, узвары, кисели, компоты":
            return morse
        case "Чай":
            return tea
    }
};

export default getCategoryImage;