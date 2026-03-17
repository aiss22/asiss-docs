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

空字符串与空引用的区别：
`string str =null;和 string str =""`是两种不同的概念，

`string str =null`是空对象，没有指向任何引用地址，调用string的方法会抛出Null Reference Exception空引用异常；

`string str =""`是一个字符串，分配了内存空间，可以调用string的任何方法，只是没有显示任何数据

获取字符串长度：
语法：`public int Length{get;}`

```cs
string str = "123 45";//空格也算一个字符
int l = str.Length;//Length属性是string类的一个属性，返回字符串中字符的个数
Console.WriteLine(l);//输出结果为6
```

获取指定位置字符:
语法：`public char this[int index]{get;}`

```cs
string str1 = "12345";
char ch = str1[3];//字符串的索引从0开始，所以str1[3]表示字符串中的第四个字符，即'4'
Console.WriteLine(ch);
```

获取子字符串的位置:
两种方法：
往前：
（掌握）`public int IndexOf(string value);`获取第一次出现的索引
（掌握）`public int IndexOf(string value,int starIndex)`从指定位置往后查
（了解）`public int IndexOf(string value,int starIndex,int count)`从指定位置往后查几个字符

```cs
string str2 = "你好，你是谁";
int index = str2.IndexOf("你");
Console.WriteLine(index);//输出结果为0，因为"你"在字符串中的第一个位置是索引0

string str3 = "你好，你是谁";
int index2 = str3.IndexOf("你",2);
Console.WriteLine(index2);//输出结果为3，因为从索引2开始搜索，"你"在字符串中的第二个位置是索引3

string str4 = "你好，你是谁";
int index3 = str4.IndexOf("你",2,3);
Console.WriteLine(index3);//3
```

往后：
换成`LastIndexOf`
`public int LastIndexOf(string value);`获取最后一次出现的索引

```cs
string str5 = "你好，你是谁你";
int index4 = str5.LastIndexOf("你");
Console.WriteLine(index4);//6
```

判断字符串首尾内容:
结尾语法：
`public bool EndsWith(string value)`

```cs
string str = "Program.cs";
bool bl = str.EndsWith(".cs");
Console.WriteLine(bl);//True

bool bl1 = str.EndsWith(".CS");
Console.WriteLine(bl1);//False
```

`public bool EndsWith(string value,bool ignoreCase,CultureInfo culture)`传入ture忽略大小写

```cs
string str = "Program.cs";
bool bl2 = str.EndsWith(".CS",true,null);
Console.WriteLine(bl2);//True
```

开头语法：
`public bool EndsWith(string value)`
`public bool EndsWith(string value,bool ignoreCase,CultureInfo culture)`
跟结尾使用方法相同

```cs
string str2 = "Hello World";
bool bl3 = str2.StartsWith("Hello");//True
bool bl4 = str2.StartsWith("hello");//False
bool bl5 = str2.StartsWith("hello",true,null);//True
```

### 字符串的拼接

使用“+”运算符可以实现拼接多个字符串的功能
如`string a = "123"+"456";//123456`

### 比较字符串

使用“==”比较是否相等

Compare方法

`public static int Compare(string strA,string strB)`
`public static int Compare(string strA,string strB,bool ignoreCase)`在strA和strB为字母的时候使用这个方法判断大小写

```cs
string strA = "me";
string strB = "ME";
Console.WriteLine(string.Compare(strA,strB));//-1，表示strA小于strB，区分大小写
Console.WriteLine(string.Compare(strA,strB,true));//0，表示strA和strB相等,不区分大小写
```

CompareTo方法
`public int CompareTo(Object value)`
`public int CompareTo(string value)`

```cs
string strA = "me";
string strB = "ME";
Console.WriteLine(strA.CompareTo(strB));//-1，表示strA小于strB，区分大小写
```

Equals方法
`public bool Equals(string value)`
`public static bool Equals(string a,string b)`

```cs
string strA = "me";
string strB = "ME";
Console.WriteLine(strA.Equals(strB));//false
Console.WriteLine(string.Equals(strA,strB));//false
```

### 字符串的大小写转换

字符串变成大写：`public string ToUpper()`

字符串变成小写：`public string ToLower()`

```cs
string str1 = "Hello World";
string toUpper = str1.ToUpper();//转换为大写字母
Console.WriteLine(toUpper);

string toLower = str1.ToLower();//转换为小写字母
Console.WriteLine(toLower);
```

### 截取字符串

`public string Substring(int startIndex)`开始截取的位置（后全部）
`public string Substring(int startIndex,int length)`开始截取的位置，要截取的字符数

```cs
string id = "1234567890";
string num = id.Substring(2);//从索引2开始截取字符串，返回结果为"34567890"
Console.WriteLine(num);

string str = "Program.cs";
string subStr = str.Substring(0, str.IndexOf("."));//从索引0开始截取字符串，截取的长度为str.IndexOf(".")，即从索引0开始截取到"."之前的字符串，返回结果为"Program"
Console.WriteLine(subStr);

string subStr2 = str.Substring(str.IndexOf("."));//从索引str.IndexOf(".")开始截取字符串，返回结果为".cs"
Console.WriteLine(subStr2);
```

### 分割字符串

将字符串按照指定的符号分割成数组：
`public string[] Split(params char[] separator)`指定分割符号

```cs
string str = "Program.cs";
string[] strs = str.Split(new char[] {'.'});//从字符串str中以"."为分隔符，分割成多个子字符串
for(int i = 0; i<strs.Length;i++)
{
    Console.WriteLine(strs[i]);//输出结果为Program和cs
}
```

指定分割次数：
`public string[] Split(char[] separator,int count)`指定分割符号，分割次数

```cs
string str2 = "Program.cs.cs";
string[] strs2 = str2.Split(new char[] {'.'},2);//从字符串str2中以"."为分隔符，分割成两个子字符串
foreach (string s in strs2)
{
    Console.WriteLine(s);//输出结果为Program和cs.cs
}
```

### 去除空白内容

语法：`public string Trim()`直接删除首尾的空格

```cs
string str = "  Hello World  ";
Console.WriteLine(str);//输出结果为"  Hello World  "

string trim = str.Trim();//Trim()方法用于去除字符串两端的空格，输出结果为"Hello World"
Console.WriteLine(trim);
```

Trim的更多用法：

删除字符串的开头和结尾处的指定字符：
`public string Trim(params char[] trimChars)`

```cs
string str2 = "****Hello World@@@@";
Console.WriteLine(str2);

char[] ch = {'*','@'};
string trim2 = str2.Trim(ch);//Trim(char[] trimChars)方法用于去除字符串两端指定的字符，输出结果为"Hello World"
Console.WriteLine(trim2);
```

### 替换字符串

语法：
`public string Replace(string OValue,string NValue)`要替换的字符串，替换后的字符串

```cs
string str = "馒头一文钱一个";
string str1 = str.Replace("馒头","馍馍");
Console.WriteLine(str1);//输出结果为"馍馍一文钱一个"

string str2 = str1.Replace('一','壹');
Console.WriteLine(str2);//输出结果为"馍馍壹文钱壹个"
```

实际使用时需要注意：替换字符串区分大小写，要跟原始字符串相同

### 可变字符串类

string创建的字符串不可改变，每次调用都重建了一个地址存储

`StringBuilder`可变字符串类

定义：构造函数

```cs
public StringBuilder();//空对象
public StringBuilder(int capacity);//设置存储大小
public StringBuilder(string value);//初始化
public StringBuilder(int capacity,int maxCapacity);//设置初始大小，最大可存储大小
public StringBuilder(string value,int capacity);//初始化，指定初始大小
public StringBuilder(string value,int startIndex,int length,int capacity);//使用初始一部分值，从索引开始，指定的字符数，设置起始大小
```

StringBuilder常用方法：
`Append` 将文本或字符串追加到指定对象的末尾
`AppendFormat` 自定义变量的格式并将这些值追加到StringBuilder对象的末尾
`Insert` 将字符串或对象添加到当前StringBuilder对象的指定位置
`Remove` 从当前StringBuilder对象中移除指定数量的字符
`Replace` 用另一个指定的字符来替换StringBuilder对象的字符

```cs
StringBuilder sTitle = new StringBuilder("(),(),(),2,4,6,7,8");
Console.WriteLine(sTitle);

sTitle.Remove(0,9);//Remove(int startIndex, int length)方法用于从字符串中删除指定位置和长度的字符，输出结果为"2,4,6,7,8"
sTitle.Insert(0,"(门前大桥下),(游过一群鸭),(快来快来数一数),");//Insert(int startIndex, string value)方法用于在字符串的指定位置插入指定的字符串
Console.WriteLine(sTitle);//输出结果为"(门前大桥下),(游过一群鸭),(快来快来数一数),2,4,6,7,8"
```

## 类的静态成员

使用static修饰
static + 变量 = 静态变量
static + 方法 = 静态方法
static不能用于常量

静态成员是属于类所有的，调用时，直接使用类名调用

比如：静态调用

```CS
Console.WriteLine("输出");
Student.age = 30;
```

实例调用：需要new

```cs
Student stu = new Student();
stu.age = 30;
```

```cs
int Sum(int a,int b)
{
    return a + b;
}

static double Sums (double c,double d)
{
    return c+d;
}

static void Main(string[] args)
{

    Program p = new Program();//创建Program类的对象实例p
    int i = p.Sum(1,3);//调用实例方法时，需要先创建对象实例，然后通过对象实例来调用方法
    Console.WriteLine(i);
    
    double a = Program.Sums(1.1,3.5);//调用静态方法时，可以直接使用类名来调用，不需要创建对象实例
    double b = Sums(5.5,5);//在同一个类中调用静态方法时，可以直接使用方法名来调用，不需要使用类名
    Console.WriteLine(a);
    Console.WriteLine(b);
}
```

### 静态类

static + 类 ---> 静态类

静态类中定义的成员必须是静态的，不能定义实例变量、实例方法或者实例构造函数

## 对象

对象是一个抽象概念，Object，表示任意存在的事务

对象可以表示为属性或行为

### 什么是类

类 是同一类事务的统称，如果将现实世界中的一个事务抽象成对象，类就是这类对象的统称

比如：车是一个类，面包车、摩托车、小轿车就是对象

### 面向对象

三大特点：封装、继承、多态

类 是面向对象编程的核心

### 类

类的声明：

```cs
class 类名
{
    //类中的代码
}
```

类的成员：

字段/属性（变量/常量）：类里面的变量就叫字段

字段属于类级别的变量，未初始化时，C#将其初始化为默认值，但不会将局部变量初始化为默认值

```cs
class Student
{
    public int name;//字段
    public int age;//字段
}
```

### 枚举

枚举其实是一种特殊的字段，声明特殊的常量

语法：`访问修饰符 enum 枚举名{值1，值2}`

使用枚举可以增加代码的可读性和可维护性

```cs
public enum MRKJ
{
    //CS,//不设置数值默认从0开始递增
    //Java,
    //C

    CS = 1,//不设置数值默认从0开始递增
    Java = 2,
    C = 3
}

static void Main(string[] args)
{
    Console.WriteLine((int)MRKJ.Java);//输出结果为2，因为枚举成员Java的值为2
    Console.WriteLine(MRKJ.CS);//输出结果为CS
}
```

### 属性

属性是对现实实体特征的抽象，提供对类或对象的访问

get和set都存在：读写属性

只有get：只读属性

只有set：只写属性

```cs
private 数据类型 变量名;
public 数据类型 属性名
{
    get{return 变量名;}//get 用于获取相应字段的值
    set{变量名 = value;}//set用于设置字段的值
}
```

使用属性控制输入范围，保护数据安全

```cs
class Student
{
    public int name;//字段
    private int age;//字段
    public int Age//属性
    {
        get { return age; }//访问器，返回age字段的值
        set 
        {
            if(value >0 && value < 100)
            {
                age = value;
            }
            else
            {
                age = 18;
            }
            
        }//设置器，接受一个参数value，表示要设置的年龄值
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Student stu = new Student();
        stu.Age = 22;
        Console.WriteLine(stu.Age);
    }
}
```

属性的特点：

1. 封装字段，将类中的字段与属性绑定到一起
2. 避免非法数据的访问
3. 保证数据的完整性

属性与枚举:

```cs
public class Program
{
    public enum Genders
    {
        Male,
        Famale
    }

    private Genders genders;
    public Genders Gender
    {
        get { return  genders; }
        set
        {
            genders = value;
        }
    }

    static void Main(string[] args)
    {
        Program pro = new Program();
        pro.Gender = Genders.Male;
        //pro.Gender = "男";//不能直接赋值字符串
        Console.WriteLine(pro.Gender);
    }
}
```

没有需要验证的逻辑，可以使用自动实现属性，get；set都必须有

```cs
 private int age;
 public int Age { get;set;}
```

### 构造函数

类中的一种特殊的方法
构造函数名与类名相同，不返回任何值
可初始化成员变量

```cs
class Student
{
    public Student()//构造函数
    {

    }
}
```

有参构造函数：

```cs
public class Program
{
    public string Name;
    public int Age;
    public Program(string name,int age)
    {
        Name = name;
        Age = age;
    }

    static void Main(string[] args)
    {
        Program p = new Program("张三",20);
        Console.WriteLine(p.Name);
        Console.WriteLine(p.Age);
    }
}
```

如果在定义类时，定义了含有参数的构造函数，这时如果还想要使用默认无参构造函数，就需要显式的进行定义
`public Program(){}`

私有构造函数：

```cs
class Student
{
    private Student(){}
}
```

使用公共静态方法来调用

```cs
class Student
{
    private Student() { }//私有构造函数，禁止外部直接创建Student类的对象实例
    public static Student Create()//公共静态方法，用于创建Student类的对象实例
    {
        return new Student();
    }
}

class Program
{
    static void Main(string[] args)
    {
        Student stu = Student.Create();//通过调用Student类的公共静态方法Create()来创建Student类的对象实例stu
        stu.Age = 22;
        Console.WriteLine(stu.Age);
    }
}
```

静态构造函数：

```cs
class Student
{
    static Student(){}
}
```

1. 静态构造函数只执行一次
2. 静态构造函数不能设置访问修饰符，因为其他C#代码从来不会调用它，它只在引用类之前执行一次
3. 静态构造函数不能带任何参数，而且一个类中只能有一个静态构造函数，它只能访问类的静态成员，不能访问实例成员

## 封装（访问修饰符）

public  :所有对象都可以访问

private :只有同一个类中的函数可以访问它的私有成员

Protected ：该类内部和继承类中可以访问

internal : 同一个程序集的对象可以访问

Protected internal ：3 和 4 的并集，符合任意一条都可以访问

范围比较：
`private < internal/protected < protected internal < public`

public 公共:

```cs
class Rectangle
{
    public double Length;
    public double Width;

    public double GetArea()
    {
        return Length * Width;
    }

    public void Display()
    {
        Console.WriteLine("长度为 {0}",Length);
        Console.WriteLine("宽度为 {0}",Width);
        Console.WriteLine("面积为 {0}",GetArea());
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Rectangle r = new Rectangle();
        r.Length  = 2;
        r.Width = 3;
        r.Display();
    }
}
```

private 私有:

```cs
class Rectangle
{
    private double Length;
    private double Width;

    public void AcceptDetails()
    {
        Console.WriteLine("请输入长度：");
        Length = Convert.ToDouble(Console.ReadLine());
        Console.WriteLine("请输入宽度：");
        Width = Convert.ToDouble(Console.ReadLine());
    }

    public double GetArea()
    {
        return Length * Width;
    }

    public void Display()
    {
        Console.WriteLine("长度为 {0}",Length);
        Console.WriteLine("宽度为 {0}",Width);
        Console.WriteLine("面积为 {0}",GetArea());
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Rectangle r = new Rectangle();
        r.AcceptDetails();
        r.Display();
    }
}
```

internal 内在的:

```cs
class Rectangle
{
    internal double Length;
    internal double Width;

    //public void AcceptDetails()
    //{
    //    Console.WriteLine("请输入长度：");
    //    Length = Convert.ToDouble(Console.ReadLine());
    //    Console.WriteLine("请输入宽度：");
    //    Width = Convert.ToDouble(Console.ReadLine());
    //}

    double GetArea()
    { 
        return Length * Width;
    }

    public void Display()
    {
        Console.WriteLine("长度为 {0}",Length);
        Console.WriteLine("宽度为 {0}",Width);
        Console.WriteLine("面积为 {0}",GetArea());
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Rectangle r = new Rectangle();
        r.Length = 2.5;
        r.Width = 3.5;
        r.Display();
    }
}
```

## 方法

方法是把一些相关的语句组织在一起，用来执行一个任务的语句块，每个C#程序至少有一个带有Main方法的类

使用方法：

1. 定义方法
2. 调用方法

语法：

访问修饰符 返回类型 方法名称(参数)
{
  方法主体
}

第一种在同一个类体里写方法：

```cs
public class Program
{
    public int FindMax(int num, int num2)
    {
        int result;//局部变量
        if (num > num2)
        {
            result = num;
        }
        else
        {
            result = num2;
        }
        return result;
    }
    static void Main(string[] args)
    {
        Program n = new Program();
        int findMax = n.FindMax(30, 20);
        Console.WriteLine(findMax);
    }
}
```

第二种，分别在不同类中：

```cs
class NumberManipulator
{
    public int FindMax(int num,int num2)
    {
        int result;//局部变量
        if (num> num2)
        {
            result = num;
        }
        else
        {
            result = num2;
        }
        return result;
    }
}

public class Program
{
    static void Main(string[] args)
    {
        NumberManipulator n = new NumberManipulator();
        int findMax = n.FindMax(30, 20);
        Console.WriteLine(findMax);
    }
}
```

### 参数

当调用带有参数的方法时，需要向方法传递参数

有三种传递参数的方式：

1. 值参数：复制参数的实际值 给方法的形式参数，实参和形参使用的是不同内存中的值，这种情况下，形参的值发生改变，不会影响实参的值
2. 引用参数：复制参数的内存位置的引用 给形式参数，当形参的值发生改变时，实参的值也改变
3. 输出参数：可以返回多个值

值参数传递：

结果表明，即使在函数内改变了值，值也没有发生任何的变化

```cs
public void swap(int x,int y)
{
  int temp;
  temp = x;
  x = y;
  y = temp;
}

static void Main(string[] args)
{
  Program p = new Program();

  int a = 100;
  int b = 200;
  Console.WriteLine("交换前：a={0},b={1}",a,b);//交换前：a=100,b=200

  p.swap(a,b);
  Console.WriteLine("交换后：a={0},b={1}",a,b);//交换后：a=100,b=200

}
```

引用参数传递：

结果表明，swap 函数内的值改变了，且这个改变可以在 Main 函数中反映出来

```cs
public void swap(ref int x,ref int y)
{
  int temp;
  temp = x;
  x = y;
  y = temp;
}

static void Main(string[] args)
{
  Program p = new Program();

  int a = 100;
  int b = 200;
  Console.WriteLine("交换前：a={0},b={1}",a,b);//交换前：a=100,b=200

  p.swap(ref a,ref b);
  Console.WriteLine("交换后：a={0},b={1}",a,b);//交换后：a=200,b=100

}
```

输出参数传递：

提供给输出参数的变量不需要赋值。当需要从一个参数没有指定初始值的方法中返回值时，输出参数特别有用

```cs
public void GetValues(out int x,out int y)
{
  Console.WriteLine("请输入第一个值：");
  x = Convert.ToInt32(Console.ReadLine());
  Console.WriteLine("请输入第二个值：");
  y = Convert.ToInt32(Console.ReadLine());
}

static void Main(string[] args)
{
  Program p = new Program();
  int a,b;

  p.GetValues(out a,out b);
  Console.WriteLine("方法调用后，a的值为 {0}",a);
  Console.WriteLine("方法调用后，b的值为 {0}", b);

}
```
