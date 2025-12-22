# 金蝶关键

`Entry`就是表
`Row`就是表里的行
`NewRow`新行

**看到 Entity、EntityKey → 脑子里立刻想：哪个表格（Entry）？**

**看到 Row、RowIndex、NewRow → 脑子里立刻想：第几行？**

所有表单插件类都继承：`AbstractDynamicFormPlugIn`

`[Description("........")]`给插件起名字

`[HotUpdate]`热更新，不用重启服务器

`EqualsIgnoreCase` 不区分大小写判断两个字符是否相等（不区分大小写的 ==）

`AfterCreateModelData` 自动填充一些默认值

`override` 重写父类本来就有的方法

`base.AfterCopyRow(e);`
加base的就是：把自己原来的逻辑正常走一遍（写这句是好习惯，防止不小心把系统默认功能挡住）

`this` 就是当前对象（当前类的实例）

`this.Model`当前单据的数据模型（可以理解成整个单据的数据大脑）

`this.View` 当前的视图对象

`string.Empty` 空字符串（比直接写""更专业一点）

`.SetItemValueByNumber`按照“编号”给字段赋值（比按名称更稳定，金蝶最推荐的方式）

`this.Model.DataObject`整张单据的“原始数据对象”，可以直接操作任何字段

`Guid.NewGuid().ToString()` 生成一个唯一的随机字符串比如：f1a2b3c4-5678-90ab-cdef-1234567890ab

```1
单据类型,分录标识（Key）,中文说明
采购订单,FPOOrderEntry,主分录（物料行）
采购入库单,FEntity,主分录
销售出库单,FEntity,主分录
生产领料单,FEntity_MTL,领料分录
费用分录,FCostEntity,费用分录
赠品分录,FFreeEntity,赠品分录
```

`this.Model.SetValue` 最常用的给`分录字段赋值`的方法

`this.Model.DeleteEntryData("...")`删除指定分录表的所有数据行

`this.View.GetControl("字段内码").Enabled = false;` 锁字段，变灰不能编辑

金蝶每个操作都有编号：
操作编号：1=新增, 2=修改, 6=提交, 7=审核, 8=保存, 9=反审核...

## 事件方法名

1. 前缀：After、Before
`After` 之后，比如删除东西后才告诉你（做事之后）
`Before` 之前，比如删除东西前给你提示（做事之前）

例子：

`AfterDeleteRow`行已经被删了，尸体都凉了才告诉你,不能阻止（已经删了）

`BeforeDeleteRow`系统正准备删，先问你：“真的要删吗？”,可以阻止

`AfterCreateNewEntryRow`新行已经创建好了，才告诉你,不能反悔

`BeforeCreateNewEntryRow`系统正准备加一行，先问你可不可以,可以阻止

`AfterSave`单据已经保存成功了,不能回滚

`BeforeSave`系统正准备点保存，先让你校验数据,可以阻止保存
2. 常见动词

`Create`,创建 / 新增,新增单据、新增分录行,`"AfterCreateNewData`
`AfterCreateNewEntryRow"`

`Delete`,删除,删除行、删除整单,`"BeforeDeleteRow`
`AfterDeleteEntry"`

`Copy`,复制,复制行、整单复制,`AfterCopyRow`

`Save`,保存,点保存按钮,"`BeforeSave`
`AfterSave`"

`Submit`,提交,点提交（送审）,"`BeforeSubmit`
`AfterSubmit`"

`Audit`,审核,点审核通过,"`BeforeAudit`
`AfterAudit`"

`UnAudit`,反审核,点反审核,`BeforeUnAudit`

`Bind`,绑定数据,界面刚打开，把数据塞到界面上,`AfterBindData`

`Load`,加载单据,打开一张已有单据,`AfterLoad`

`BarItemClick`,工具栏按钮点击,你点自定义按钮或系统按钮,`EntryBarItemClick`
