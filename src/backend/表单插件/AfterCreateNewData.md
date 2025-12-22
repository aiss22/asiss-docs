<<<<<<< HEAD
# 表单插件：AfterCreateNewData

`AfterCreateNewData`最适合自定义单据编号+填默认值
想自定义单据编号（比如用 GUID、时间戳、自定义规则），必须写在这个事件里！
`AfterCreateModelData`这个事件只能给默认值，不能改单号

`this.Model.DataObject`整张单据的“原始数据对象”，可以直接操作任何字段

`["BillNo"]`单据编号字段名（所有单号字段都叫这个）

`Guid.NewGuid().ToString()` 生成一个唯一的随机字符串比如：f1a2b3c4-5678-90ab-cdef-1234567890ab
想要单号随便，不重复就用这个

类继承：AbstractDynamicFormPlugIn（所有表单插件都得这么写）
//采购订单

```1
public override void AfterCreateNewData(EventArgs e)
{
    base.AfterCreateNewData(e);

    // 1. 自定义单据编号为 GUID（全球唯一，永不重复）
    this.Model.DataObject["BillNo"] = Guid.NewGuid().ToString();

    // 2. 默认供应商（推荐触发带出服务）
    ((IDynamicFormViewService)this.View).SetItemValueByNumber("FSupplierId", "VEN00001", 0, true);

    // 3. 你还可以继续加其他默认值
    this.Model.SetItemValueByNumber("FPurchaseOrgId", "100", 0); // 默认采购组织
    this.Model.DataObject["FDate"] = DateTime.Today;             // 默认单据日期为今天

    // 4. 甚至可以默认带出业务员、部门等
    ((IDynamicFormViewService)this.View).SetItemValueByNumber("FPurchaserId", "USER001", 0, true);
}```
=======
# 表单插件：AfterCreateNewData

`AfterCreateNewData`最适合自定义单据编号+填默认值
想自定义单据编号（比如用 GUID、时间戳、自定义规则），必须写在这个事件里！
`AfterCreateModelData`这个事件只能给默认值，不能改单号

`this.Model.DataObject`整张单据的“原始数据对象”，可以直接操作任何字段

`["BillNo"]`单据编号字段名（所有单号字段都叫这个）

`Guid.NewGuid().ToString()` 生成一个唯一的随机字符串比如：f1a2b3c4-5678-90ab-cdef-1234567890ab
想要单号随便，不重复就用这个

类继承：AbstractDynamicFormPlugIn（所有表单插件都得这么写）
//采购订单

```public override void AfterCreateNewData(EventArgs e)
{
    base.AfterCreateNewData(e);

    // 1. 自定义单据编号为 GUID（全球唯一，永不重复）
    this.Model.DataObject["BillNo"] = Guid.NewGuid().ToString();

    // 2. 默认供应商（推荐触发带出服务）
    ((IDynamicFormViewService)this.View).SetItemValueByNumber("FSupplierId", "VEN00001", 0, true);

    // 3. 你还可以继续加其他默认值
    this.Model.SetItemValueByNumber("FPurchaseOrgId", "100", 0); // 默认采购组织
    this.Model.DataObject["FDate"] = DateTime.Today;             // 默认单据日期为今天

    // 4. 甚至可以默认带出业务员、部门等
    ((IDynamicFormViewService)this.View).SetItemValueByNumber("FPurchaserId", "USER001", 0, true);
}```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
