# Javascript dependency injection. Proof of concept.

Injected.js
```js
export class Injected {
    constructor(arg) {
    }

    method() {
        console.log('Injected class method')
    }
}
```

example.js
```js
import { implement, inject } from '../src';//functions for dependency injection
import { Injected } from './injected';//example class for injecting

implement('arg1').as(new Injected());//register 'arg1' as concrete object

@inject('arg1')//@inject('arg1', 'arg2') - name(s) of interface(s) for injecting to MyClass
class MyClass {
    constructor(arg, test) {//the constructor accepts an argument which will be replaced by IoC and some other arguments
        arg.method();
        console.log(test)
    }
}


let c = new MyClass(1);//call constructor *without* injectatable parameters
```

Output:
```
Injected class method
1
```

We called the constructor with only one parameter, but it was called with two parameters implicitly.
