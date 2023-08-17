const MyMixin = {
    mixinProperty : 0,
    mixinMethod () {
    }
}

class MyClass {}

Object.assign(MyClass.prototype, MyMixin);
