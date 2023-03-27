import ErrorCustom from '../tryCatch/index.js';

// 3 ways to create class
// 1) Use Function
// 2) Use Object
// 3) Use Singleton Object

//1) Use Function
function User() {
    // properties
    this.userName = '';
    this.password = '';

    //method
    this.setInfo = function(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }
    this.checkLogin = function() {
        return this.userName === 'admin' && this.passWord === 'admin'
    }
    // have to return to create object
    return this;
} 

//2) Use Object
var UserObject = { //or UserObject = new Object()
    userName: '',
    passWord: '',
    setInfo: function(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    },
    checkLogin: function() {
        return this.userName === 'admin' && this.passWord === 'admin'
    }
};

//3) Singleton Object
var UserSingleton = new function() {
    this.userName = '';
    this.passWord = '';
    this.setInfo = function(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }
    this.checkLogin = function() {
        return this.userName === 'admin' && this.passWord === 'admin';
    }
};



export default function testClass() {
    console.log('==========class========')
    var result = {};
    //1) Use Function
    var user = new User();
    user.setInfo('Hieu', '123');
    var checkLogin = user.checkLogin();
    result.loginFunction = checkLogin ? 'Login Success' : 'Login Fail';
    //2) Use Object
    UserObject.setInfo('admin', 'admin');
    var user1 = Object.assign({}, UserObject);
    user1.setInfo('admin', 'admin');
    result.loginObject = UserObject.checkLogin();
    result.loginObject2 = user1.checkLogin();
    //3) Singleton Object
    UserSingleton.setInfo('test', 'test');
    result.loginSingleton = UserSingleton.checkLogin();
    try {
        !result.loginSingleton ? new ErrorCustom().throwErrorLogin() : '';
    } catch (error) {
        console.log(error.message)
    }
    return result;
}