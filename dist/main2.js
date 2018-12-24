import { Profile } from './exportTest.js';

function ready(){
    const Pf = Profile('이름', 'aaa@gmail.com');
    alert(pf.hello());
}
document.addEventListener("DOMContentLoaded", ready);