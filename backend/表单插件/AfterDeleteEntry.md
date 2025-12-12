# 表单插件：AfterDeleteEntry

应用场景：分录行全部数据被删除后，设置单据头字段锁定性，设置菜单可见性

`DeleteEntryData` 删除指定分录的所有数据行

`"FPOOrderEntry"` 采购订单的主分录

`AfterDeleteEntry` 明细行被删除后触发

`this.View.GetControl("字段内码").Enabled = false;` 锁字段，变灰不能编辑

```// 1. 分录工具栏按钮点击事件 —— 一键清空明细
public override void EntryBarItemClick(BarItemClickEventArgs e)
{
    base.EntryBarItemClick(e);

    if (e.BarItemKey.EqualsIgnoreCase("tbClearAll"))  // 建议改个有意义的名字
    {
        if (this.View.ShowMessage("确定要删除所有明细行吗？", MessageBoxButtons.YesNo) == DialogResult.Yes)
        {
            this.Model.DeleteEntryData("FPOOrderEntry");
            this.View.UpdateView("FPOOrderEntry");  // 刷新界面
        }
    }
}

// 2. 删行后判断是否空了 → 空了就锁表头
public override void AfterDeleteEntry(AfterDeleteEntryEventArgs e)
{
    base.AfterDeleteEntry(e);

    if (e.EntityKey.EqualsIgnoreCase("FPOOrderEntry"))
    {
        if (this.Model.GetEntryRowCount("FPOOrderEntry") == 0)
        {
            // 锁表头
            var controls = new[] { "FSupplierId", "FPurchaseOrgId", "FPurchaseDeptId", 
                                 "FPurchaserGroupId", "FACCTYPE" };
            foreach (var key in controls)
            {
                this.View.GetControl(key).Enabled = false;//锁字段，变灰不能编辑
            }

            this.View.ShowMessage("明细已全部删除，表头已锁定！", MessageBoxType.Information);
        }
    }
}
```
