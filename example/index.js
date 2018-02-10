import { implement, inject } from '../src';
import { Injectable } from './injectable';

implement('arg1').as(new Injectable());

@inject('arg1')
class MyClass {
    constructor(arg, test) {
        arg.method();
        console.log(test)
    }
}


let c = new MyClass(1);