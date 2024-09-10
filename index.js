import readlineSync from 'readline-sync';

const name = readlineSync.question(`${'Как Вас зовут?\nОтвет:'} `);
console.log(`Привет, ${name}`);