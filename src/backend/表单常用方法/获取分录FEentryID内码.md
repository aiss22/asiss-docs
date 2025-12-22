# 获取分录行内码

获取行的内码方法：`GetEntryPKValue("分录标识"，行号),从0开始)`

示例：获取分录行第1到第3行内码（在BOS--订单明细--新建一个整数字段F_YDIE_EntryID存放内码）

```示例
赋值内码给新增的字段F_YDIE_EntryID；获取行的内码方法：GetEntryPKValue("分录标识"，行号，从0开始)
this.View.Model.SetValue("F_YDIE_EntryID", this.View.Model.GetEntryPKValue("FSaleOrderEntry", 0),0);

this.View.Model.SetValue("F_YDIE_EntryID", this.View.Model.GetEntryPKValue("FSaleOrderEntry", 1),1);

this.View.Model.SetValue("F_YDIE_EntryID", this.View.Model.GetEntryPKValue("FSaleOrderEntry", 2),2);

//刷新分录界面
this.View.Model.UpdateView("FSaleOrderEntry")
```
