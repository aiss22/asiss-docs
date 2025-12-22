# 表单插件：AfterCreateNewEntryRow

`AfterCreateNewEntryRow` 控制明细行默认值的事件（比如修改数量）

`e.Entity.Key` 当前新增行的分录标识（内码）

`EqualsIgnoreCase` 不区分大小写比较

`this.Model.SetValue` 最常用的给`分录字段赋值`的方法

`e.Row` 当前是第几行

```1
public override void AfterCreateNewEntryRow(CreateNewEntryEventArgs e)
{
    base.AfterCreateNewEntryRow(e);

    // 只针对采购订单主分录生效
    if (e.Entity.Key.EqualsIgnoreCase("FPOOrderEntry"))
    {
        // 1. 默认数量改成 1（最常见！）
        this.Model.SetValue("FQty", 1, e.Row);

        // 2. 默认税价含税 = 是
        this.Model.SetValue("FTaxPriceInclude", true, e.Row);

        // 3. 默认仓库 = 总仓
        this.Model.SetValue("FStockId", "CK001", e.Row);   // 按编号
        // 或者按名称：this.Model.SetValue("FStockId", "总仓", e.Row);

        // 4. 默认批号 = 今天日期
        this.Model.SetValue("FLot", DateTime.Today.ToString("yyyyMMdd"), e.Row);

        // 5. 默认项目 = 项目A
        this.Model.SetValue("FProjectNo", "XM001", e.Row);

        // 6. 默认交货日期 = 今天 + 7天
        this.Model.SetValue("FDeliveryDate", DateTime.Today.AddDays(7), e.Row);
    }
}
```
