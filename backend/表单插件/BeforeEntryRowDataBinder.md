# 表单插件：EbforeEntryRowDataBinder

应用场景：

1. 取消新增分录行
2. 单据查看界面，对单据体的某些字段的值进行特殊处理
（比如：修改模式下，禁止新增分录行）

```//修改模式下，禁止新增分录行
public override void BeforeEntryRowDataBinder(BeforeEntryRowDataBinderArgs e)
{
    base.BeforeEntryRowDataBinder(e);
    //判断分录表
    if(e.Control.Key =="FPOOrderEntry")
    { 
        
    if(this.View.OpenParameter.Status != OperationStatus.ADDNEW)
    {
        e.Cancel = true;
        this.View.ShowMessage("修改状态下，禁止新增分录行");
    }
    }
}
```
