# AfterSave 保存成功后执行后续操作

核心用途：执行后续操作（如同步数据到其他系统、发送通知、生成下游单据）

```1
public override void AfterSave(AfterSaveEventArgs e)
{
    base.AfterSave(e);
    //保存成功后，弹出提示并记录保存日志
    //获取单据编号
    string billNo = this.View.Model.GetValue("FBillNo").ToString();
    //弹出成功提示
    this.View.ShowMessage($"单据【{billNo}】保存成功!");
}
```
