# 从零开发第一个直接SQL账表

应用场景：快速制作个性化数据源报表

设计一个简单的采购订单明细报表[Jac_SqlRpt_PurchaseOrder]，用于查询和显示采购订单明细数据

1. 打开BOS，供应链-->采购管理-->直接SQL账表-->新增
2. 新建空白对象-->直接SQL账表-->设置名称/编号
3. 设置账表数据源：

```1
-- 采购订单明细报表查询脚本

SELECT a.FBILLNO AS 单据编号 ,
tp1.FCAPTION AS 单据状态 ,
a.FDATE AS 采购日期 ,
h1.FNAME AS 供应商 ,
h2.FNAME AS 采购组织 ,
e1.FNAME AS 物料名称 ,
b.FQTY AS 采购数量 ,
f.FTaxPrice AS 含税单价 ,
f.FAllAmount AS 价税合计 ,
a.FCREATEDATE AS 创建时间 FROM T_PUR_POORDER a 
LEFT JOIN ( SELECT enum.FVALUE,enuml.FCAPTION FROM T_META_FORMENUMITEM enum 
LEFT JOIN T_META_FORMENUMITEM_L enuml ON enum.FENUMID=enuml.FENUMID AND enuml.FLOCALEID=2052 
WHERE enum.FID='14039efd-6350-4eab-b482-c1c6bcdf914b' )
tp1 ON a.FDOCUMENTSTATUS=tp1.FVALUE 
LEFT JOIN T_BD_SUPPLIER_L h1 ON a.FSUPPLIERID=h1.FSUPPLIERID AND h1.FLOCALEID=2052 
LEFT JOIN T_ORG_ORGANIZATIONS_L h2 ON a.FPURCHASEORGID=h2.FORGID AND h2.FLOCALEID=2052 
LEFT JOIN T_PUR_POORDERENTRY b ON a.FID=b.FID 
LEFT JOIN T_PUR_POORDERENTRY_F f ON b.FENTRYID=f.FENTRYID LEFT JOIN T_BD_MATERIAL_L e1 ON b.FMATERIALID=e1.FMATERIALID AND e1.FLOCALEID=2052 WHERE a.FBILLNO LIKE '%#FBillNO#%'
```

如果不熟悉SQL语句的编写，可以使用【SQL设计器】来完成数据源的设置
4. 继续点击下一步，完成列设置，合计设置，分组设置等，完成后保存元数据
5. 保存-->发布-->新增子功能-->下分录表新增（主控制台菜单明细维护）-->设置编码、名称、业务对象
6. 登录业务站点打开【采购订单明细报表】进行数据查询

知识点：
<1>SQL代码中，用##或者__包裹起来的字符串即为查询关键字，运行时，查询关键字会生成为对应数据类型的过滤条件，执行报表查询时，会以过滤条件中的值，直接整个替换掉查询关键字。例如条件WHERE a.FBILLNO LIKE '%#FBillNO#%'，当过滤界面上给单据编号输入'CG'，最终执行的SQL语句是WHERE a.FBILLNO LIKE '%CG%'。

<2>设置数据源的时候，如果点【测试】按钮时想看到所有数据，在SQL脚本前加上/*all*/。

<3>存储过程不支持分组汇总。

<4>公有云环境会拦截SQL脚本中的以下特殊字符，请注意规避。

```1
insert

update

delete

drop database

truncate table

drop table

truncate 

create 

drop 

grant 

sys.

dbo.

use master

master.

use tempdb

tempdb.

use

t_sec_user

t_sec_fieldpermission

t_sec_fieldpermission_l

t_sec_fieldpermissionentry

t_sec_funcpermission

t_sec_funcpermission_l

t_sec_funcpermissiondata

t_sec_funcpermissionentry

t_sec_datarule

t_sec_datarule_l
```
