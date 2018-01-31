import { IocContainer, testDecorator } from '../src'

@testDecorator
class MyClass  {

}
let c = new IocContainer();
c.test();