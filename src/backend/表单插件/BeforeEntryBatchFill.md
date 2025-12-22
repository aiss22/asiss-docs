<<<<<<< HEAD
# 表单插件：BeforeEntryBatchFill

应用场景：单据编辑界面，批量填充某字段前，取消批量填充操作

```1
public override void BeforeEntryBatchFill(BeforeBatchFillEventArgs e)
{
    base.BeforeEntryBatchFill(e);
    //判断字段是否为FQty
    if(e.FieldKey.EqualsIgnoreCase("FQty"))
    {
        e.Cancel = true;
        this.View.ShowMessage("数量字段禁止填充");
    }
}
```
=======
# 表单插件：BeforeEntryBatchFill

应用场景：单据编辑界面，批量填充某字段前，取消批量填充操作

```public override void BeforeEntryBatchFill(BeforeBatchFillEventArgs e)
{
    base.BeforeEntryBatchFill(e);
    //判断字段是否为FQty
    if(e.FieldKey.EqualsIgnoreCase("FQty"))
    {
        e.Cancel = true;
        this.View.ShowMessage("数量字段禁止填充");
    }
}
```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
