# 后端必读

1. git管理代码
2. 记录代码在vitepress上面
3. 把你写的代码用git上传到github上面


常用命令行（cmd）
ipconfig

ctrl+r输入mstsc打开远程访问


编程软件
1. CSharp
1.1 Linq（查询框架）
1.1 Asp .net core (网站框架)
2. Javascript （js）
2.1 Vue3框架
2.1 element-plus UI框架
3. HTML/css（tailwind css）


数据库
SQL SERVER（微软） 
MySQL（甲骨文）
都用SQL语言

npm是js的打包工具
运行方式npm run xxx

## Csharp基础
1. **基本结构**
``using system;//引入命名空间``
``nemespace MyFirstProgram//命名空间（用于组织代码）``
``{``
    ``class Program //类（C#程序的基本单位）``
    ``{``
       ``static void main(string[] args) //程序入口点（main方法）``
       ``{``
        ``Console.WriteLine("Hello,world!"); //输出语句``
       ``}``
   ``}``
``}``

  * using:引入其他命名空间，避免重复写完整类名。
  *  namespace:用于区分不同代码模块，避免命名冲突。
  * class：所有代码必须包含在类中，是C#的基本组织单位。
  * main方法：程序的入口点，程序从这里开始执行，必须是static。

2. **数据类型**
     **1. 值类型（直接存储值 例：int a=5; int b=a; b=10; 后，a 仍为 5）：**
     * 整数：int(32位)、long（64位）、short（16位）、byte（8）位。
     * 浮点数：float (单精度)、double（双精度、默认）、decimal（高精度小数，适合财务）。
  
       **1.2 float（单精度浮点数）**
       * 本质：32 位二进制存储，“单精度” 指存储精度较低。
       * 有效数字：约 6-7 位十进制（例如123.4567f，超过 7 位后精度会丢失）。
       * 使用：声明时需加后缀f（如float num = 3.14f），适合对精度要求不高的场景（如普通工程计算、简单数据统计），占用内存较少（4 字节）

       **1.3 double（双精度浮点数）**
       * 占用8字节内存，精度约15-17位有效数字，无需额外后缀（如：double pi = 3.14159）,是C#的默认类型、适用于多数常规小数场景

       **1.4 decimal（高精度小数）**
       * 占用16字节内存，精度约28-29位有效数字，需在数值后加m/M（如 decimal money = 19.99m）适用于财务计算

  
     * 布尔：bool（true（是）/false（否））
     * 字符：char（单个Unicode字符，用单引号'A'） 
    
     **2. 引用类型（存储地址，指向实际数据）：**
     * 字符串：string（用双引号"hello"、不可变）
     * 数组、类（class）、接口（interface）等 
  
  3. **变量与常量**
     * 变量声明：类型 变量名 = 值；
     * ``int age = 25;``
     * ``string name = "Alice";``
     * ``double pi = 3.14159;``

     * 常量：用 const 修饰，值不可修改
     * ``const doulie PI = 3.14159;//常量命名通常大写``

  4. **运算符**
     * 算术运算符：+、-、*、/、%（取余）、++（自增）、--（自减）
     * 比较运算符：==、!=、>、<、>=、<=
     * 逻辑运算符：=、+=、-=、*= 等

  5. **条件语句**
      `if (条件表达式)`
      `{`
        `//条件为 true 时执行`
      `}`

      * if-else 语句
       作用：条件为 true 时执行一个代码，否则执行另一个代码。
       语法：
       `if（条件表达式）`
       `{`
        `//条件为 true 时执行`
      `}` 
       `else`
       `{`
        `//条件为 false 时执行`
       `}`

       * if-else if-else 语句
        作用：多条件判断，依次检查条件，满足第一个 true 条件后执行对应代码，若都不满足则执行 else。
        语法：
        `if（条件1）`
       `{`
            `//条件1为 true 时执行`
        `}`
        `else if（条件2）`
        `{`
            `//条件2为 true 时执行`
        `}`
        `//可添加多个 else if`
        `else`
        `{`
            `//所有条件都为 false 时执行`
        `}`
## 自己配置一个pages

## 运行文档：`pnpm run docs:dev`