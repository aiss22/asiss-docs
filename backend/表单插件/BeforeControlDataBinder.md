# 表单插件:BeforeControlDataBinder

应用场景：单据查看界面，对某些字段的值进行特殊处理（比如：修改文本字段和小数字段在前台界面的显示值）

`BeforeControlDataBinder` 修改界面显示，数据库不变

`e.BindValue` 最终显示给用户看的值

`FieldAppearance.FS_VALUE` 金蝶规定：显示值的钥匙

```public override void BarItemClick(BarItemClickEventArgs e)
{
    base.BarItemClick(e);
    //点击按钮刷新字段
    if(e.BarItemKey.EqualsIgnoreCase("test"))
    {
        this.View.UpdateView("F_OXCH_Text_a7s");
        this.View.UpdateView("F_OXCH_Decimal_kxb");

    }
}

public override void BeforeControlDataBinder(BeforeControlDataBinder e)
{
    base.BeforeControlDataBinder(e);
    if(e.Control.Key.EqualsIgnoreCase("F_OXCH_Text_a7s"))
    {
        //获取字段内容
        var value = this.Model.GetValue("F_OXCH_Text_a7s");
        //修改界面字段内容（数据库不变）
        e.BindValue = new JSONObject();
        e.BindValue[FieldAppearance.FS_VALUE]= string.Format("{0}-{1}",value,Context.UserName);

    }
    else if(e.Control.Key.EqualsIgnoreCase("F_OXCH_Decimal_kxb"))
    {
        var value = Convert.ToDecimal(this.Model.GetValue("F_OXCH_Decimal_kxb"));
        e.BindValue = new JSONObject();
        e.BindValue[FieldAppearance.FS_VALUE]= value * 100;
    }
}
```
