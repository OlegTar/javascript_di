import { implement, inject } from '../src';
import { Injected } from './myclass1';

implement('arg1').as(new Injected());

@inject('arg1')
class MyClass {
    constructor(arg, test) {
        arg.method();
        console.log(test)
    }
}


let c = new MyClass(1);