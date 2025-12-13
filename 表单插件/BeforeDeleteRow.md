# 表单插件：BeforeDeleteRow

应用场景：删除分录行数据前校验是否满足删除条件，不满足时取消删除操作

```//判断是否满足删除条件
public override void BeforeDeleteRow(BeforeDeleteRowEventArgs e)
{
    base.BeforeDeleteRow(e);
    if (e.EntityKey.EqualsIgnoreCase("FPOOrderEntry")&&this.Context.UserName=="001")
    {
        e.Cancel = true;
        this.View.ShowMessage("禁止当前用户删除分录行");
    }
}
```
