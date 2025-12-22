# 获取表单Fid内码

`this.View.Model.DataObjectS`

```获取表单Fid内码
public override void BarItemClick(BarItemClickEventArgs e)
{
    base.BarItemClick(e);
    if(e.BarItemKey.EqualsIgnoreCase("OXCH_tbHuoQu"))
    {
        string FormTitle = this.View.Model.DataObject["Id"].ToString();
        this.View.Model.SetValue("FNote",FormTitle);
        this.View.ShowMessage("表单Fid内码："+FormTitle);
    }
}
```
