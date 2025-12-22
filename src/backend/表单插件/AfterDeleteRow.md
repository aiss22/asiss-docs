<<<<<<< HEAD
# 表单插件：AfterDeleteRow

应用场景：删除分录行后，更新与此被删除行有联动关系的其它字段的数据（删除分录行后，显示被删除行数据）

`AfterDeleteRow` 点击删除后触发

```1
public override void AfterDeleteRow(AfterDeleteRowEventArgs e)
{
    base.AfterDeleteRow(e);

    if (e.EntityKey.EqualsIgnoreCase("FPOOrderEntry"))
    {
        // 取物料名称（安全写法）
        string materialName = "";
        DynamicObject materialObj = e.DataEntity["MaterialId"] as DynamicObject;
        if (materialObj != null)
        {
            materialName = materialObj["Name"]?.ToString() ?? "";
        }

        // 取物料编号（很多人也想看编号）
        string materialNumber = "";
        if (materialObj != null)
        {
            materialNumber = materialObj["Number"]?.ToString() ?? "";
        }

        // 取数量（安全转字符串）
        string qty = e.DataEntity["Qty"]?.ToString() ?? "0";

        // 拼消息
        var msg = string.Format(
            "【删除提醒】\r\n" +
            "分录：{0}\r\n" +
            "行号：第 {1} 行\r\n" +
            "物料：{2} [{3}]\r\n" +
            "数量：{4}",
            this.View.BillBusinessInfo.GetEntity(e.EntityKey).Name,
            e.Row + 1,
            materialName,
            materialNumber,
            qty
        );

        this.View.ShowMessage(msg, MessageBoxType.Notice);  
    }
}
```
=======
# 表单插件：AfterDeleteRow

应用场景：删除分录行后，更新与此被删除行有联动关系的其它字段的数据（删除分录行后，显示被删除行数据）

`AfterDeleteRow` 点击删除后触发

```public override void AfterDeleteRow(AfterDeleteRowEventArgs e)
{
    base.AfterDeleteRow(e);

    if (e.EntityKey.EqualsIgnoreCase("FPOOrderEntry"))
    {
        // 取物料名称（安全写法）
        string materialName = "";
        DynamicObject materialObj = e.DataEntity["MaterialId"] as DynamicObject;
        if (materialObj != null)
        {
            materialName = materialObj["Name"]?.ToString() ?? "";
        }

        // 取物料编号（很多人也想看编号）
        string materialNumber = "";
        if (materialObj != null)
        {
            materialNumber = materialObj["Number"]?.ToString() ?? "";
        }

        // 取数量（安全转字符串）
        string qty = e.DataEntity["Qty"]?.ToString() ?? "0";

        // 拼消息
        var msg = string.Format(
            "【删除提醒】\r\n" +
            "分录：{0}\r\n" +
            "行号：第 {1} 行\r\n" +
            "物料：{2} [{3}]\r\n" +
            "数量：{4}",
            this.View.BillBusinessInfo.GetEntity(e.EntityKey).Name,
            e.Row + 1,
            materialName,
            materialNumber,
            qty
        );

        this.View.ShowMessage(msg, MessageBoxType.Notice);  
    }
}
```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
