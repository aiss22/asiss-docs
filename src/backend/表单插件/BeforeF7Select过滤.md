# 表单插件：BeforeF7Select 过滤

限定选择范围（过滤）

```示例
//打开客户只能选择限定的客户
public override void BeforeF7Select(BeforeF7SelectEventArgs e)
{
    base.BeforeF7Select(e);
    //如果等于客户
    if(e.FieldKey.EqualsIgnoreCase("FCustId"))
    {
        e.ListFilterParameter.Filter = "FNumber = 'CUST0001'";
    }
}
```
