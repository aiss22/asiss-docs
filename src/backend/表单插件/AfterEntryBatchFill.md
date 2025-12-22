# 表单插件：AfterEntryBatchFill

应用场景：单据编辑界面，批量填充某字段后，进行某些计算或服务（比如：批量填充采购数量后，设置备注）

`AfterEntryBatchFill` 批量填充完之后触发

`.GetEntryRowCout` 获取表格（分录）一共有几行

``` 1
public override void AfterEntryBatchFill(AfterBatchFillEventArgs e)
 {
     base.AfterEntryBatchFill(e);
     //获取分录有几行
     var rowCount = this.Model.GetEntryRowCount(e.Entity.Key);
     for (var rowIndex = e.StartRowIndex; rowIndex < rowCount; rowIndex++)
     {
         //修改数据
         var note = "采购数量："+ this.Model.GetValue("FQty",rowIndex);
         this.Model.SetValue("FEntryNote",note,rowIndex);
         this.View.UpdateView("FEntity",rowIndex);
     }
     this.View.UpdateView(e.Entity.Key);//刷新
     this.View.ShowMessage("批量填充完成，已自动添加备注");
     
 }
    ```
