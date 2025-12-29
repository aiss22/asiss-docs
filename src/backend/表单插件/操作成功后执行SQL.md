# 操作成功后执行SQL

应用场景：
单据上的菜单绑定了某种操作，当点击该菜单时，会触发绑定在该菜单上的操作，当操作执行成功后，执行一段SQL
例如：采购订单，审核菜单，绑定了审核操作，点击审核菜单触发审核操作并执行成功后，执行一段SQL

```1
public override void AfterDoOperation(AfterDoOperationEventArgs e)
{
    base.AfterDoOperation(e);
    //操作ID为1的字段；新增：6，修改：5，删除：3，保存：8，提交：9，撤销：87，审核：1，反审核：26
    if (e.Operation.OperationId == 1 && e.OperationResult.IsSuccess)
    {
        var sql = string.Format("UPDATE T_SEC_USER SET FDESCRIPTION=N'哈哈哈成功了' WHERE FUSERID={0}"
            ,this.Context.UserId);//SQL修改语句
        DBUtils.Execute(this.Context, sql);
        this.View.ShowMessage("审核操作执行成功，SQL已执行，SQL脚本："+sql);
    }
}
```
