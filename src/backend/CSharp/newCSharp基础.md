# CSharp 基础

## 注释

行注释

```C#
class Test
{
  static void Main(string[] args)
  {
    Console.WriteLine("Hello World");//输出语句Hello world
  }
}
```

块注释

```C#
class Test
{
  //注释说明
  /*
   * Main方法，程序入口方法
   * args：命令行参数
  */

  /*
  static void MAin(string[] args)
  {
    Console.WriteLine("");
  }
  */
}
```

## 代码编写规范

代码编写规则

1. 尽量使用接口编程、关键语句一定编写注释
2. 局部变量随用随声明、尽量少用goto语句
3. 如果参数多，建议使用结构、避免对大段使用try...catch
4. 同一个文件中避免编写多个类、字符串多变时，使用stringBuilder
5. if语句块中使用"{}"、switch语句中一定编写default

## 命名规范

Pascal命名法：所有单词第一个字母大写，其他字母小写
如：User、Getinfo

Camel命名法（驼峰法）：除了第一个单词，所有单词第一个字母大写，其他字母小写
如：userId、userName

程序中元素的命名规范：

项目名：公司域名+产品名称

命名空间的命名：公司域名/产品名称

接口命名：一切接口开始于“I”

类名：功能与操作的完美结合

方法名：动宾关系，实现何种操作

成员变量：尽可能加前缀“_”，下划线开头

## 变量

内存怎么存放数据：
数据格式是各种各样的，先根据数据的需求（即类型）为它申请一块合适的空间

为什么需要变量：
数据都是二进制存储在内存里，为了方便找到数据所以需要变量

变量是什么：
在C#中，一个变量就是存储区（内存）中的一个存储单元
用户可以根据需要改变变量存储的数据

### 变量的声明

语法：

变量类型 变量名  = 数值;`int money = 1000`

变量类型 变量名;`int money;`
变量名 = 数值;`money = 1000`

变量类型 变量名1,变量名2,...;//需要都是同一类型

```C#
int money = 1000;

int money2;
money2 = 1000;

int money3,money4,money5;
```

### 数据类型

值类型：

直接存储值，在栈，对一个值类型的改变，不会影响其他相关值类型

简单类型：数值、字符、布尔

复合类型：结构、枚举

```C#
int age = 30;
Console.WriteLine(age);//30

int age2 = age;
Console.WriteLine(age2);//30

age2 = 35;
Console.WriteLine(age2);//35
Console.WriteLine(age);//30
```

引用类型：存储地址

类、接口、数组、委托

### 转义字符

在C#中\反斜杠为转义字符，输出反斜杠时需要写两次

```cs
转义符说明
\n  回车换行
\t  横向跳到下一制表位置
\"  双引号
\b  退格
\r  回车
\f  换页
\\  反斜线符
\'  单引号符
```

`@`符号，特殊转义符，多级转义

```cs
Console.WriteLine("E:\\vs\\CSharp\\learn-1\\learn");//每个反斜杠都要写两遍，复杂
Console.WriteLine(@"E:\vs\CSharp\learn-1\learn");//直接使用@转义符，多级转义
```

### 变量的初始化

变量的初始化实际上就是给变量赋值

单独初始化变量：

```cs
int sum;
sum = 666;
```

直接初始化变量：

```cs
int sum = 666;
```

同时初始化多个变量：

```cs
int a,b,c,d,e;
a=b=c=d=e=666;
```

### 变量的作用域

成员变量：

在类体里声明的变量，一种为静态变量（static），一种为实例变量

静态变量直接使用类名调用，实例变量需要先new一个对象后调用

```cs
class Program
{
  string str = "实例成员变量";
  static string str2 = "静态成员变量";

  static void Main(string [] args)
  {
    Console.WriteLine(str2);//静态成员变量可以直接访问

    Program program = new Program();
    Console.WriteLine(program.str);//实例成员变量需要通过对象访问
  }
}
```

局部变量：
在类的方法体里声明的变量为局部变量，局部变量只在当前代码块中可以使用

```cs
void Test()
{
    for(int i = 0; i < 10; i++)
    {
        Console.WriteLine(i);//i为局部变量，只在for循环内有效，循环结束后i就不再存在了
    }

    Console.WriteLine(i);//编译错误，i在这里不可访问了
}
```

## 常量

常量就是定义值后不能改变值的量

常量的分类：

编译时（静态）常量：const；必须直接初始化

```cs
const double PI = 3.14;
```

运行时（动态）常量：readonly；在构造函数中赋值，不能定义在方法中，只能在类体里

```cs
static class Program
{
  static readonly int price;
  static Program()//构造函数
  {
      price = 666;//只读字段只能在声明时或者构造函数中赋值，其他地方不能修改
  }
}
```

const常量和readonly常量的区别：一个是编译时确定值，一个是运行时才确定值

```cs
class Program
{
  const int num = num2 * 2;
  const int num2 = 250;

  static readonly int num3 = num4 * 2;
  static readonly int num4 = 250;

  static void Main(string[] args)
  {
    Console.WriteLine("const常量结果：");
    Console.WriteLine("num:"+num);//const常量在编译时就已经确定了值，所以num的值是500
    Console.WriteLine("num2:"+num2);//250

    Console.WriteLine();

    Console.WriteLine("readonly常量结果：");
    Console.WriteLine("num3:"+num3);//readonly常量在运行时才确定值，所以num3的值是0
    Console.WriteLine("num4:"+num4);//250
  }
}
```

## 运算符

算数运算符：+、-、*、/、%

自增自减运算符：A++、A--；--A、++A

赋值运算符：=

关系运算符：<,>,<=,>=;不要串接使用关系运算符，可以使用&&且来连接

逻辑运算符：非！：真变假，假变真，与&&：全真为真，或||：全假为假

运算符的优先级与结合性：

单目：++，--，！，~；右往左运算

算术：*，/，%，+，-；左往右

位移：<<,>>；左往右

关系：>,>=,<,<=；左往右

逻辑：&&,||；左往右

条件：?,:；右往左

赋值：=,+=,-=,/=,%=;右往左

()的特殊使用：可以随意改变优先级顺序，小括号的优先级最高，可以提升代码公式可读性

位运算符：对纯数字进行加密时会用到
位与&：有0即为0
位或|：有1即为1
位取反~：0变1，1变0
位异或^：全0或全1才为0

移位运算符：
条件运算符：先执行右边的表达式，再执行左边的

```cs
int num6 = 300,num7 = 400,num8 = 500,num9 = 600;
int result = num7 > num8? num7 : num9 > num8? num9 : num8;//600
Console.WriteLine(result);
```

## 数据类型转换

隐式类型转换：两种类型兼容，目标类型精度大于原类型

```cs
double score = 81.5;
int sum = 2;
double score2 = score + sum;//83.5
Console.WriteLine(score2);
```

显式类型转换（强转）：会丢失精度
(类型名) 表达式

```cs
double score = 81.5;
int sum = 2;
int score2 = (int)(score + sum);//强制转换为int,83
Console.WriteLine(score2);
```

Convert类转换：
Convert.To类型(表达式)

```cs
int score3 = Convert.ToInt32(score2+score);
Console.WriteLine(score3);
```

## 决策分支

在开发中可以使用流程图

## if语句

有三种形式：最简单的if语句、if……else语句、if……else if……else语句

if语句：表达式必须使用括号括起来、表达式要是关系表达式或者逻辑表达式、语句可以使用单语句和复合语句
if(表达式)
{
  语句
}

逻辑表达式，使用逻辑运算符：
if(表达式1 && 表达式2)
{
  语句
}

if语句

```cs
Console.WriteLine("请输入银行简称（比如：ICBC，CBC）：");
string strBank = Console.ReadLine();

if(strBank == "ICBC")
{
    Console.WriteLine("中国工商银行");
}
```

if……else语句

```cs
Console.WriteLine("请输入银行简称（比如：ICBC，CBC）：");
string strBank = Console.ReadLine();

if(strBank == "ICBC")
{
    Console.WriteLine("中国工商银行");
}
else
{
    Console.WriteLine("输入的银行简称错误！");
}
```

if……else if……else语句

```cs
Console.WriteLine("请输入银行简称（比如：ICBC，CBC）：");
string strBank = Console.ReadLine();

if(strBank == "ICBC")
{
    Console.WriteLine("中国工商银行");
}
else if(strBank == "CBC")
{
    Console.WriteLine("中国建设银行");
}
else if(strBank == "ABC")
{
    Console.WriteLine("中国农业银行");
}
else
{
    Console.WriteLine("输入的银行简称错误！");
}
```

if语句的嵌套：

```cs
Console.WriteLine("请输入一个年份：");
int iYear = Convert.ToInt32(Console.ReadLine());

if(iYear % 4 == 0)
{
    if(iYear % 100 == 0)
    {
        if(iYear % 400 == 0)
        {
            Console.WriteLine("这是闰年");
        }
        else
        {
            Console.WriteLine("这不是一个闰年");
        }
    }
    else
    {
        Console.WriteLine("这是闰年");
    }
}
else
{
    Console.WriteLine("这不是一个闰年");
}
```

## switch多分支语句

多条件选择的情况使用switch语句来实现
语法：
switch(表达式)//只能是整形/char/string/bool类型
{
  case 常量表达式1:
  语句1;
  break;//用于退出switch语句，不可以省略
  case 常量表达式2:
  语句2;
  break;
  ……
  default:
  语句;
  break;
}

```cs
Console.WriteLine("请输入银行简称：");
string str = Console.ReadLine();

switch (str)
{
    case "ICBC":
    case "icbc":
        Console.WriteLine("中国工商银行");
        break;
    case "CBC":
        Console.WriteLine("中国建设银行");
        break;
    case "ABC":
        Console.WriteLine("中国农业银行");
        break;
    default:
        Console.WriteLine("请输入正确的银行简称");
        break;
}
```

switch语句与if语句的区别：
switch语句：

```cs
Console.WriteLine("请输入要查询的分数线(比如民办本科、艺术类本科、体育类本科、二本、一本)：");
string school = Console.ReadLine();

switch (school)
{
    case "民办本科":
        Console.WriteLine("民办本科的分数线为：325");
        break;
    case "艺术类本科":
        Console.WriteLine("艺术类本科的分数线为：279");
        break;
    case "体育类本科":
        Console.WriteLine("体育类本科的分数线为：285");
        break;
    case "二本":
        Console.WriteLine("二本的分数线为：380");
        break;
    case "一本":
        Console.WriteLine("一本的分数线为：485");
        break;
}
```

if语句：

```cs
Console.WriteLine("请输入要查询的分数线(比如民办本科、艺术类本科、体育类本科、二本、一本)：");
string school = Console.ReadLine();

if(school == "民办本科")
{
    Console.WriteLine("民办本科的分数线为：325");
}
else if(school == "艺术类本科")
{
    Console.WriteLine("艺术类本科的分数线为：279");
}
else if (school == "体育类本科")
{
    Console.WriteLine("艺术类本科的分数线为：285");
}
else if (school == "二本")
{
    Console.WriteLine("二本的分数线为：380");
}
else if (school == "一本")
{
    Console.WriteLine("一本的分数线为：485");
}
```

## 循环的嵌套

循环嵌套时，书写格式一定要清晰，循环体用{}括起来，方便代码阅读

自身嵌套：
while (表达式)
{
  语句组
  while (表达式)
  {
    语句组
  }
}
互相嵌套：
for(表达式;表达式;表达式)
{
  语句组
  do
  {
    语句组
  }while(表达式);
}

嵌套：

```cs
int iRow,iColumn;
for(iRow = 1; iRow < 10; iRow++)
{
    for(iColumn = 1;iColumn <= iRow; iColumn++)
    {
        Console.Write("{0}*{1}={2}   ",iColumn,iRow,iRow*iColumn);
    }
    Console.WriteLine();
}
```

## while循环

while循环语句：表达式必须是关系表达式或逻辑表达式，语句中应该有能够使循环结束的条件语句，如果表达式一开始为假，则循环中的语句一次都不执行
语法：
while(表达式)
{
  语句
}

```cs
int i = 1;
int sum = 0;
while (i <= 100)
{
    sum+=i;
    i++;
}
Console.WriteLine(sum);
```

do……while循环：必须是关系表达式或逻辑表达式，while表达式后面的分号不能省略，循环体中的语句至少执行一次
语法：
do
{
  语句
}while(表达式);

```cs
int i = 1;
int sum = 0;
do
{
    sum+=i;
    i++;
}while(i<=100);
Console.WriteLine(sum);
```

while和do……while的区别：
while先判断后循环，do……while至少执行一次循环，先执行后判断

## for循环

表达式1通常用来初始化循环变量
表达式2是一个关系表达式或逻辑表达式
表达式3是自增或者自减
语法：
for(表达式1;表达式2;表达式3)
{
  语句
}

```cs
int i;
int sum = 0;
for(i = 1; i <= 100; i++)
{
    sum += i;
}
Console.WriteLine(sum);
```

for循环的变体：
省略表达式1：可以省略表达式，不能省略分号

```cs
int i = 1;
int sum = 0;
for(; i <= 100; i++)
{
    sum += i;
}
Console.WriteLine(sum);
```

省略表达式2：会造成死循环，分号要保留

省略表达式3：没有循环递增，也可能造成死循环

如果三个表达式都省略，就是死循环，分号必须要保留

```cs
for(;;)
{

}
```

for循环中的逗号使用：
不能在表达式2中使用逗号连接，需要使用逻辑运算符连接

```cs
int i;
int sum;
for(i=1,sum=0; i <= 100;sum+=i, i++)
{
    sum += i;
}
Console.WriteLine(sum);
```

## 转移语句（跳转语句）

使用转义语句跳出死循环：
break语句、continue语句、goto语句

break在循环中的使用：搭配if语句使用，跳出循环

```cs
int i;
int sum;
for(i=1,sum=0; ;sum+=i, i++)
{
    if (i > 100)
    {
        break;
    }
    sum += i;
}
Console.WriteLine(sum);
```

continue的使用：
continue语句通常应用在while、do……while或for循环中，一般与if语句搭配使用，用来开始一次新的循环

```cs
int i,sum = 0;
for(i = 1; i <= 100; i++)
{
    if(i % 2 == 1)
    {
        continue;
    }
    sum+=i;
}
Console.WriteLine(sum);
```

## 数组

数组是具有相同数据类型的一组数据的集合。数组中的每一个变量称为数组的元素，数组能够容纳元素的数量称为数组的长度

### 一维数组

语法：数组元素类型[] 数组名字
`int[] arr`

初始化：就是给数组赋初始值

三种初始化方法：

```cs
int[] a = new int[3];//第一种
a[0] = 1;
a[1] = 2;
a[2] = 3;

int[] b = new int[] { 1,2,3};//第二种

int[] c = {1,2,3};//第三种
```

数组如果定义了长度，初始值个数一定要跟数组长度一致

```cs
int[] month = {31,28,31,30,31,30,31,31,30,31,30,31};
for(int i = 0; i < 12; i++)
{
    Console.WriteLine((i + 1) + "月有" + month[i]+"天");
}
```

### 二维数组

语法：有两种形式
数据类型[,] 数组名;//一个逗号二维，两个逗号三维
`int[,] a = new int[2,4]`//两行四列，从0开始索引

数据类型[][] 数组名;//三个括号三维，不规则数组
`int[][] a = new int[2][];`//只能指定行数

```cs
int[][] d = new int[2][];
d[0] = new int[2];//第一行有两列
d[1] = new int[3];//第二行有三列
```

初始化三种方法：

```cs
int[,] e = new int[2,2];
e[0,0] = 0;
e[0,1] = 1;
e[1,0] = 2;
e[1,1] = 3;
Console.WriteLine(e[1,1]);

int[][] f = new int[2][];
f[0] = new int[] { 0,1};
f[1] = new int[] {1,2};
Console.WriteLine(f[1][1]);

int[,] g = new int[2,2]{ {5,6},{8,9} };
int[,] h = new int[,] { {5,6 }, {8,9 } };
int[,] j = { {5,6 }, {7,8 } };
Console.WriteLine(j[0,0]);
```

```cs
int[,] arr = { {1,2,3 }, {4,5,6 }, { 7,8,9} };
Console.WriteLine("------原始数组------");
for(int i = 0; i < 3; i++)
{
    for(int j = 0;j<3; j++)
    {
        Console.Write(arr[i,j] + "   ");
    }
    Console.WriteLine();
}

int temp;
for(int i = 0; i < 3; i++)
{
    for(int j = 0;j<i; j++)
    {
        temp = arr[i,j];
        arr[i,j] = arr[j,i];
        arr[j,i] = temp;

    }
}

Console.WriteLine("------调换后的数组------");
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        Console.Write(arr[i, j] + "   ");
    }
    Console.WriteLine();
}
```

不规则数组：

```cs
int[][] d = new int[2][];
d[0] = new int[2];//第一行有两列
d[1] = new int[3];//第二行有三列
```

## foreach语句

foreach语句遍历数组：
语法：
foreach(类型 迭代变量名 in 集合表达式)
{
  语句
}

```cs
string[] name = {"张三","李四","王五","赵六"};
foreach(string str in name)
{
    Console.Write(str +"  ");
}
```

## 对数组进行排序

使用Array类里面的方法：
Sort方法：排序
Reversr方法：反转

```cs
int[] arr = {4,1,3,2,5};
Array.Sort(arr);//排序
Array.Reverse(arr);//反转

foreach(int i in arr)
{
    Console.WriteLine(i);
}
```

## 字符串

所有文本都可以叫字符串

由string类型声明：
`string a`
`string a,b,c`
定义后未初始化相当于空值`string a = null`

使用前必须先初始化：
引用字符串常量（掌握）

```cs
string str = "时间就是金钱";

string name = "张三",name2 = "王五";

string city,region;
city = "上海";
region = "嘉定区";
```

利用字符数组实例化（了解）

```cs
char[] charArr = { 't', 'i', 'm', 'e' };
string a = new string(charArr);
Console.WriteLine(a);//time
```

提取字符数组中的一部分初始化（了解）
