# json

json:前后端分离，数据交互变得异常重要

json--JavaScript对象符号，是一种数据交换格式

json比xml更加易读

```json1
var json2={
    "key":"value",//字符串

    "key2":-123.4567,//数字

    "key3":{
      "name":"张三",
      "age":18
    },//对象

    "key4":[1,2,3,4],//数组：数字类型

    "key5":["a","b","c","d"],//数组：文本型

    "key6":[{
      "name":"a",
      "age":18
    },
    {
      "name":"b",
      "age":18
    },
    {
      "name":"c",
      "age":18
    },
    {
      "name":"d",
      "age":18
    }],//数组：对象
    
    "key7":null//空类型

  };

  //取值
  console.log(json2.key);
  console.log(json2.key3.name);
  console.log(json2.key4[0]);
  console.log(json2.key5[1]);
  console.log(json2.key6[2]);
  console.log(json2.key6[2].name + json2.key6[2].age);
```

```json
<body>
  
  <script type="text/javascript">
  //编写一个对象
  var user={
    name:"张三",
    age:18,
    sex:"男"
  };
  //输出对象
  console.log(user);

  //js对象转换为json字符串
  var str = JSON.stringify(user);
  console.log(str);//{
  //"name":"张三",
  // "age":18,
  // "sex":"男"
  //}

  //json字符串转换为js对象
  var user1 = JSON.parse(str);
  console.log(user1);

</script>


</body>
```
