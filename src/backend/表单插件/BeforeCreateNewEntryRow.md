<<<<<<< HEAD
# 表单插件：BeforeCreateNewEntryRow

应用场景：

1. 新建单据或新增分录行时，使用插件姐管分录行的创建逻辑
2. 阻止分录行的创建
3. 限制分录行数量

```1
public override void BeforeCreateNewEntryRow(BeforeCreateNewEntryEventArgs e)
{
    base.BeforeCreateNewEntryRow(e);

    // 只针对采购订单主分录
    if (!e.Entity.Key.EqualsIgnoreCase("FPOOrderEntry"))
        return;

    // 方式1：禁止指定用户（demo、test、guest 等）
    var forbiddenUsers = new[] { "demo", "test", "guest" };
    if (forbiddenUsers.Contains(this.Context.UserName))
    {
        e.Cancel = true;
        this.View.ShowMessage($"用户【{this.Context.UserName}】无权限新增采购明细行！", MessageBoxType.Warning);
        return;
    }

    // 方式2：已审核的单据禁止加行（超级实用！）
    var billStatus = this.Model.GetValue("FDocumentStatus"); // 单据状态
    if (billStatus?.ToString() == "C") // C = 已审核
    {
        e.Cancel = true;
        this.View.ShowMessage("单据已审核，禁止新增明细行！", MessageBoxType.Error);
        return;
    }

    // 方式3：只有采购部的人能加行
    // var dept = this.Context.CurrentOrganizationInfo.FunctionDeptId; // 需要权限判断更复杂
}
```
=======
# 表单插件：BeforeCreateNewEntryRow

应用场景：

1. 新建单据或新增分录行时，使用插件姐管分录行的创建逻辑
2. 阻止分录行的创建
3. 限制分录行数量

```public override void BeforeCreateNewEntryRow(BeforeCreateNewEntryEventArgs e)
{
    base.BeforeCreateNewEntryRow(e);

    // 只针对采购订单主分录
    if (!e.Entity.Key.EqualsIgnoreCase("FPOOrderEntry"))
        return;

    // 方式1：禁止指定用户（demo、test、guest 等）
    var forbiddenUsers = new[] { "demo", "test", "guest" };
    if (forbiddenUsers.Contains(this.Context.UserName))
    {
        e.Cancel = true;
        this.View.ShowMessage($"用户【{this.Context.UserName}】无权限新增采购明细行！", MessageBoxType.Warning);
        return;
    }

    // 方式2：已审核的单据禁止加行（超级实用！）
    var billStatus = this.Model.GetValue("FDocumentStatus"); // 单据状态
    if (billStatus?.ToString() == "C") // C = 已审核
    {
        e.Cancel = true;
        this.View.ShowMessage("单据已审核，禁止新增明细行！", MessageBoxType.Error);
        return;
    }

    // 方式3：只有采购部的人能加行
    // var dept = this.Context.CurrentOrganizationInfo.FunctionDeptId; // 需要权限判断更复杂
}
```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
