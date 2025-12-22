<<<<<<< HEAD
# 表单插件：BeforeUpdateValue

应用场景：

1. 修改字段值时，校验是否满足修改条件，不满足条件时阻止值更新操作
2. 修改前台界面用户录入的数据

```1
//禁止当前用户录入采购数量
public override void BeforeUpdateValue(BeforeUpdateValueEventArgs e)
{
    base.BeforeUpdateValue(e);
    if(this.Context.UserName=="001" && e.Key.EqualsIgnoreCase("FQty"))
    {
        e.Cancel = true;
        this.View.ShowMessage("当前用户禁止录入采购数量");
    }
}
```
=======
# 表单插件：BeforeUpdateValue

应用场景：

1. 修改字段值时，校验是否满足修改条件，不满足条件时阻止值更新操作
2. 修改前台界面用户录入的数据

```//禁止当前用户录入采购数量
public override void BeforeUpdateValue(BeforeUpdateValueEventArgs e)
{
    base.BeforeUpdateValue(e);
    if(this.Context.UserName=="001" && e.Key.EqualsIgnoreCase("FQty"))
    {
        e.Cancel = true;
        this.View.ShowMessage("当前用户禁止录入采购数量");
    }
}
```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
