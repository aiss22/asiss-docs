# BeforeSave 最重要的校验事件

核心用途：
数据合法性校验、补充保存前的必要数据、拦截非法保存

`BeforeSave` 是最重要的校验事件，所有保存前的合法性检查都建议放在这里
//保存单据前触发（点击【保存】按钮，实际保存数据库前）

```1
public override void BeforeSave(BeforeSaveEventArgs e)
{
    base.BeforeSave(e);
    //校验单据头【供应商】字段是否为空，为空禁止保存
    object supplierObj = this.View.Model.GetValue("FSupplierId");
    if (supplierObj == null|| string.IsNullOrEmpty(supplierObj.ToString()))
    {
        e.Cancel=true;
        this.View.ShowMessage("供应商不能为空，请填写后保存！",MessageBoxType.Error);
        return;//终止后续逻辑
    }

    //自定义一个保存人字段
    //保存前自动填充【保存人】字段
    this.View.Model.SetValue("FSavePerson",this.Context.UserName);
    this.View.UpdateView("FSavePerson");
}
```

 //点击保存按钮时校验备注字段是否为空，为空弹信息提示、

 ```示例
 public override void BarItemClick(BarItemClickEventArgs e)
 {
     base.BarItemClick(e);
     if(e.BarItemKey.EqualsIgnoreCase("tbSplitSave"))
     {
         //取消保存操纵
         e.Cancel = true;
         if(Convert.ToString(this.View.Model.GetValue("FNote"))=="")
         {
             this.View.ShowMessage("备注信息未填写，是否继续保存！",
                 MessageBoxOptions.YesNo,
                 result =>
                 {
                     if(result == MessageBoxResult.Yes)
                     {
                         //点击是的时候，调用保存操作
                         this.View.InvokeFormOperation("Save");
                     }
                 });

         }
         else
         {
             //备注不为空直接调用保存
             this.View.InvokeFormOperation("Save");
         }
     }
 }
 ```
