console.log("Hello World!");
//声明变量 let(声明的值可以被修改) var(全局声明) const(声明的值不可以被修改)
//原生数据类型： String Number Boolean null undefined

let username = "Jzcse_Jackson";
let num = 14;
let bool = true;
let x = null;
let y = undefined;

//数据类型查看 typeof 
//console.log(typeof name);

console.log(typeof username);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof x);
console.log(typeof y);

//连接
console.log("My name is " + username + ".");

//模板字符串
console.log(`My name is ${username}.`);

//字符串内置方法
    //字符串长度
console.log(username.length);
    //字符串全部大写
console.log(username.toUpperCase());
    //字符串全部小写
console.log(username.toLowerCase());
    //字符串切片
console.log(username.substring(0,5));//前闭后开
    //字符串转换为数组（列表），具有分割点
console.log(username.split("_"));
console.log(username.split(""));

//数组（列表）
    //数组构造函数
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
    //直接定义
const fruits = ["apples","pears","watermelon"];
console.log(fruits);
    //数组索引及数组元素改变
console.log(fruits[2]);
fruits[2] = "oranges";
console.log(fruits);
console.log(fruits[2]);
    //数组末尾添加元素
fruits.push("mangos");
console.log(fruits);
    //数组头部添加元素
fruits.unshift("strawberries");
console.log(fruits);
    //数组删除末尾元素
fruits.pop();
console.log(fruits);
    //判断一个变量是不是数组
console.log(Array.isArray(fruits));
    //获取特定元素的索引
console.log(fruits.indexOf("apples"));

//对象
    //对象的创建
const person ={
    First_name:"Jzcse",//这是对象的一个属性
    Last_name:"Jackson",
    age:19,
    hobbies:["sing","jump","rap","basketball"],
    address:{
        country:"China",
        city:"JiNan"
    }
};
console.log(person);
    //访问对象的属性
console.log(person.First_name);
console.log(person.hobbies[1]);//深层的访问
console.log(person.address.city);//深层的访问
    //对象添加新的属性名
person.email = "3294582930@qq.com";

//对象数组
    //创建对象数组
const todos = [
    {
        id:1,
        text:"Take out trash",
        isCompleted:true,
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted:true,
    },
    {
        id:3,
        text:"Dentist appt",
        isCompleted:false,
    }
];
console.log(todos);
console.log(todos[1].text);

//Json 是一种数据格式 和对象数组类似
    //将对象数组转换为Json
const todoJson = JSON.stringify(todos);
console.log(todoJson);

//if条件句
const a = 2;
if (a === 10) {//三等号判断时会考虑变量的类型，而双等号判断时不会考虑变量的类型 表示或时用|| 表示且时用&&
    console.log("a is 10");
} else{
    console.log("a is not 10");
}

//三目运算符
const b = 2;
const color = b > 10 ? "red" : "green";//此处的？表示如果为真，其后的：表示如果为假
console.log(color);

//switch 条件语句
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "green":
        console.log("color is green");
        break;
    default:
        console.log("color is not red and green");
}

//for循环