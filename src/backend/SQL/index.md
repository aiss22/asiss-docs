# SQL 语句

`Select` 查询

`index` 索引
-- 联合索引 多字段联合起来索引

`update` 修改

`delete` 删除

`insert into`增加

`left join`

```示例
select 表名.姓名,表名.班级,表名2.编号
from 表名
left join 表名2
on 表名.姓名 = 表名2.姓名
(左链接，表名里的内容全部显示，表名2里面匹配的内容显示，不匹配的显示null)
```

`right join`
(右链接同左连接)

`inner join`
(内连接只显示两张表都匹配的内容，一张表为null则不显示)

-- full join a 1，2，3 b 4567 = 123，4，5，6，7

-- 窗口函数
 over Rang

`PROCEDURE` 存储过程
存储过程就是把函数写在Sql里面的(直接在sql里面编写语句)
`view` 视图
视图就是把链接过程简化，

`Limit` 语法：限制数量（select 名称 from 表名 Limit 5）只显示前五行
`Offset` 语法：跳过前5行，显示后面的（select 名称 from 表名 Limit 5 Offset 5）

`where`:筛选

`order by`:排序 加上desc（由高到低）

`Like`:模糊匹配

`%`：零个或多个字符（where 姓名 like '张%'）=张某，张某某的都显示

`_`下线：单个字符（where 姓名 like '张_'）只显示张某

`Between` :选取介于两值之间的资料 （where 成绩 between 80 and 90）

And 比 Or 优先级高

可以使用 in 简化多个Or条件（wehere 成绩 between 80 and 90 and （班级 In （'1班','2班'））;

`avg` 平均数
`sum` 和
`max` 最大值
`min` 最小值
`count` 数量
(select avg(成绩) 可以直接在这改名字,sum(),max(),min(),count())

`round` ：保留多少位小数(四舍五入，为整数直接省略后面的数字)（round（avg(成绩),1）

语法顺序：（依次执行,顺序错误报错）
select 查询
from 来源
where 筛选
group by 分组
having 条件
order by 排序
limit 限制数量
Top 1 限制行数

`distinct` 可用来排除表格中重复的资料（可配合count使用）
(select count(distinct 物品))(select distinct 物品)
直接使用distinct不会排除null值，使用(where 物品 is not null)排除null值

 新建表格：
 create table 表格名称 (
    编号 int primary key,//设置类型//设置主键
    名称 varchar(15) //限制数量
 );

 删除表格：
 drop table 表格名称;
