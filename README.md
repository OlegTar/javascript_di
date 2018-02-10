# Javascript dependency injection. Proof of concept.

I used decorators from ES2016 for implementing a dependency injection.

__Usage__

Injectable.js
```js
//a some class for the demonstration of the injection
export class Injectable {
    constructor(arg) {
    }

    method() {
        console.log('Injectable class\'s method');
    }
}
```

example.js
```js
import { implement, inject } from '../src';//functions for a dependency injection
import { Injectable } from './injectable';//example class for the injection

implement('arg1').as(new Injectable());//register interface 'arg1' as a concrete object

@inject('arg1')//@inject('arg1', 'arg2') - name(s) of interface(s) for the injection to MyClass
class MyClass {
    constructor(arg, test) {//the constructor accepts an argument which will be replaced by IoC and some another argument
        arg.method();
        console.log(test)
    }
}


let c = new MyClass(1);//call constructor without injectable parameters
```

Output:
```
Injectable class's method
1
```

We called the constructor with only one parameter, but it was called with two parameters implicitly.
