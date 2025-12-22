<<<<<<< HEAD
# 表单插件：BeforeDeleteEntry

应用场景：删除分录行全部数据前，校验是否满足删除条件，不满足条件时取消删除操作

```1
//点击按钮删除所有行
public override void EntryBarItemClick(BarItemClickEventArgs e)
{
    base.EntryBarItemClick(e);
    if(e.BarItemKey.EqualsIgnoreCase("test"))
    {
        this.Model.DeleteEntryData("FPOOrderEntry");
    }

}

//判断是否满足删除条件
public override void BeforeDeleteEntry(BeforeDeleteEntryEventArgs e)
{
    base.BeforeDeleteEntry(e);
    if(e.EntityKey.EqualsIgnoreCase("FPOOrderEntry")&&this.Context.UserName=="001")
    {
        e.Cancel = true;
        this.View.ShowMessage("禁止当前用户删除分录行全部数据");
    }
}
```
=======
# 表单插件：BeforeDeleteEntry

应用场景：删除分录行全部数据前，校验是否满足删除条件，不满足条件时取消删除操作

```//点击按钮删除所有行
public override void EntryBarItemClick(BarItemClickEventArgs e)
{
    base.EntryBarItemClick(e);
    if(e.BarItemKey.EqualsIgnoreCase("test"))
    {
        this.Model.DeleteEntryData("FPOOrderEntry");
    }

}

//判断是否满足删除条件
public override void BeforeDeleteEntry(BeforeDeleteEntryEventArgs e)
{
    base.BeforeDeleteEntry(e);
    if(e.EntityKey.EqualsIgnoreCase("FPOOrderEntry")&&this.Context.UserName=="001")
    {
        e.Cancel = true;
        this.View.ShowMessage("禁止当前用户删除分录行全部数据");
    }
}
```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
