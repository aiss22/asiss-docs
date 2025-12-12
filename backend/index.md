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

### 一.  **基本结构**

C# 程序的最小单位是类，所有代码必须包含在类中，程序入口为 Main 方法

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

`console.writeline();//输出方法`
`Console.Readkey();//任意键继续`
`Console.ReadLine();//输入`

* using:引入其他命名空间，避免重复写完整类名。
* namespace:用于区分不同代码模块，避免命名冲突。
* class：所有代码必须包含在类中，是C#的基本组织单位。
* main方法：程序的入口点，程序从这里开始执行，必须是static。

### 二. **数据类型**

C# 是强类型语言，变量必须先声明类型再使用，分为值类型（直接存值）和引用类型（存地址）

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

  * 字符串：string（用双引号"hello"、不可变 例：string name = "Tom";）
  * 数组、类（class）、接口（interface）等 
  
### 三. **变量与常量**

  * 变量声明：类型 变量名 = 值；
    * ``int age = 25;``
    * ``string name = "Alice";``
    * ``double pi = 3.14159;``
  * 变量名不能是数字开头，不能是关键字
  * 不同类型变量运算要转换为相同的变量类型
    * `string str = 值`
    * `int num = int.parse(str)+20;\string num = str+20.Tostring();`
  

  * 常量：用 const 修饰，值不可修改\const 类型 常量名 = 值;
    * ``const doulie PI = 3.14159;//常量命名通常大写``

### 四. **运算符**

  * 算术运算符：+、-、*、/、%（取余）、++（自增）、--（自减）
  * 比较运算符：==、!=、>、<、>=、<=
  * 逻辑运算符：&&（与）、||（或）、!（非）
  * 赋值运算符：=、+=（a += 3 即 a = a + 3）、-=、*= 等

### 五. **流程控制**

  用于控制代码执行顺序，核心是条件判断和循环
  
  1. **条件语句**
     
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

       * switch:等值匹配（C#8+支持模式匹配）
         * `int day = 3;`
         * `switch (day)`
         * `{`
         * `case 1: Console.WriteLine("周一"); break;`
         * `case 1: Console.WriteLine("周二"); break;`
         * `defauit: Console.WriteLine("其他"); break;//默认分支`
         * `}`

  2. **循环语句**
      * for: 已知循环次数
        * `for (int i = 0; i < 5; i++)//数据类型赋值；条件；迭代`
        * `Console.WriteLine(i);//输出 0~4`
     
      * while:未知次数，先判断后执行
        * `int j = 0;`
        * `while (j < 5)`
        * `{`
        *   `Console.WriteLine(j);`
        *   `j++;`
        * `}`
          
      * do-While:先执行后判断（至少执行一次）
        * `int k = 0;`
        * `do`
        * `{`
        *    `Console.WriteLIne(k);`
        *    `k++`
        * `} while (k < 5);`

      * foreach:遍历集合/数组（只读）,固定格式 foreach (元素类型 变量名 in 集合/数组)
        * `string[] fruits = {"苹果","香蕉"}；`
        * `foreach (string f in fruits)`
        * `      Console.WriteLine(f);`

### 六. **方法（函数）**

  封装特定功能的代码块，可复用

  1. **定义与调用**
   
   `//定义：返回类型 方法名（参数列表）`
   `static int Add(int a,int b) //返回int，接收两个int参数`
   `{`
       `reaturn a+b; //返回结果`
   `}`

   `//调用`
   `int sum = Add(3,5); //sum = 8`

### 七. **面向对象基础**

  C# 是纯面向对象语言，核心是类、对象、封装、继承、多态

  1. **类与对象**
     * 类：模板、定义属性（数据）和方法（行为）
     * 对象：类的实例（通过 new 创建）
     
     * `// 类定义`
     * `class Person`
     * `{`
     * `//属性（字段）`
     * `public string Name; //public:公开访问`
     * `private int age; //private:仅限内部访问`
     * `//方法`
     * `public void Inttroduce()`
     * `{`
     * `    Console.WriteLine($"我是{Name}");`
     * `}`
     * `}`

      **顶级语句重要的语法规则：必须位于所有命名空间、类、结构、接口等类型声明之前。一个项目中只能有一个文件包含顶级语句（否则会因多个隐含的 Main 方法冲突报错）**

   * `//创建对象（实例化）;`
     * `Person p = new Person();`
     * `p.name = "张三"; //赋值公开属性`
     * `p.Inttroduce(); //调用方法，输出“我是张三” `

  2. **封装**
     通过访问修饰符控制成员访问权限：
     * public:所有地方可访问
     * prinate:仅限内部可访问（默认）
     * protected:类内部及子类可访问
  
  3. **继承**
     子类通过 : 继承父类，复用代码并扩展功能
     * `class Student :  Person //Student 继承 Person`
     * `{`
     * `public string School; //新增属性`

     * `//重写父类方法（需父类方法标记为 virtual）`
     * `public override void Introduce()`
     * `{`
     * `  Console.WretLine($"我是{Name},来自{School}");`
     * `}`
     * `}`


### 八. 常用基础特性

  * **类型转换**
      * 隐式转换（安全）:int a = 10; long b = a;(小范围转大范围)
      * 显式转换（强制、可能丢失精度）：double c = 3.14; int d = (int)c; (d=3)
      * Convert类：int num = Convert.ToInt32("123");(适合字符串转数值)

     **异常处理：用 try-catch-finally 捕获错误，避免程序崩溃**
  
      * `try`
      * `{`
      * `    int x = int.Parse("abc"); //错误：无法转换成整数`
      * `}`
      
      * `catch (Exception ex) //捕获异常`
      * `{`
      * `   Console.WriteLine("出错了："+ ex.Message);`
      * `}`
      
      * `finally //无论是否出错都执行（如释放资源）`
      * `{`
      * `    Console.WriteLine("处理结束")；`
      * `}`

  * **枚举（enum）:定义命名常量集合，增强可续性**
  
    * `enum Season { Spring, Summer, Autumn, Winter}`
    * `Season s = Season.Summer; //使用枚举值`
  ## 自己配置一个pages

  * **结构体（struct）:值类型的小数结构（与类的区别：类是引用类型）**
  * struct Point { public int X; public int Y;} //定义结构体
  * Point p = new Point(); p.X = 10; //使用
## 运行文档：`pnpm run docs:dev` 