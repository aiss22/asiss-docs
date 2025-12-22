<<<<<<< HEAD
# 表单插件：AfterCopyRow

**应用场景：复制分录行后，修改此行的数据，例如修改序号*

`AfterCopyRow`是**分录行复制后*的处理方法
`override` 重写父类本来就有的方法
`AfterCopyrowEventArgs e` 自动传一个事件参数对象，名字叫e
里面装了这次复制行时发生的所有有用信息（比如哪张单据、复制了哪一行、生成的新行是第几行等等）

`base.AfterCopyRow(e);`
加base的就是：把自己原来的逻辑正常走一遍（写这句是好习惯，防止不小心把系统默认功能挡住）

`{0}`占位符

`this.View.ShowMessage();` 金蝶最常用的谈消息框方法

```1
//表单插件（AfterCopyRow）采购订单,类继承：AbstractDynamicFormPlugIn（所有表单插件都得这么写）
/*public override void AfterCopyRow(AfterCopyRowEventArgs e)
{
    base.AfterCopyRow(e);

    //修改复制行数量
    this.Model.SetValue("FQty", 5, e.NewRow);


    var msg = string.Format("分录行复制成功。\r\n分录标识：{0}({1})\r\n源行行号：{2}\r\n新行行号：{3}",
        e.EntityKey, this.View.BillBusinessInfo.GetEntity(e.EntityKey).Name, e.Row,e.NewRow);
    this.View.ShowMessage(msg);
}*/```

=======
# 表单插件：AfterCopyRow

**应用场景：复制分录行后，修改此行的数据，例如修改序号*

`AfterCopyRow`是**分录行复制后*的处理方法
`override` 重写父类本来就有的方法
`AfterCopyrowEventArgs e` 自动传一个事件参数对象，名字叫e
里面装了这次复制行时发生的所有有用信息（比如哪张单据、复制了哪一行、生成的新行是第几行等等）

`base.AfterCopyRow(e);`
加base的就是：把自己原来的逻辑正常走一遍（写这句是好习惯，防止不小心把系统默认功能挡住）

`{0}`占位符

`this.View.ShowMessage();` 金蝶最常用的谈消息框方法

``` //表单插件（AfterCopyRow）采购订单,类继承：AbstractDynamicFormPlugIn（所有表单插件都得这么写）
/*public override void AfterCopyRow(AfterCopyRowEventArgs e)
{
    base.AfterCopyRow(e);

    //修改复制行数量
    this.Model.SetValue("FQty", 5, e.NewRow);


    var msg = string.Format("分录行复制成功。\r\n分录标识：{0}({1})\r\n源行行号：{2}\r\n新行行号：{3}",
        e.EntityKey, this.View.BillBusinessInfo.GetEntity(e.EntityKey).Name, e.Row,e.NewRow);
    this.View.ShowMessage(msg);
}*/```

>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
