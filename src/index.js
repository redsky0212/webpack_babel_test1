// http://beomy.tistory.com/42 : 참조 사이트

import './style.css';
import numbers from './module';

class Square {
    constructor( numbers ){
        this.numbers = numbers;
    }

    get(){
        document.querySelector('#result').innerText = this.numbers.map(x => x*x);
    }
}
const test = new Square(numbers);
test.get();