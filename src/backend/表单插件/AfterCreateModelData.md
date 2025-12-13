# 表单插件：AfterCreateModelData

**应用场景：新增单据时，对个别字段进行初始值设置*

`[Description("........")]`给插件起名字
`[HotUpdate]`热更新，不用重启服务器
`AfterCreateModelData` 自动填充一些默认值

```[Description("【表单插件】新增时默认供应商GYS001"), HotUpdate]
public class AfterCreateModelDataFormPlugIn :AbstractDynamicFormPlugIn（所有表单插件都得这么写）

{
    //采购订单
    public override void AfterCreateModelData(EventArgs e)
    {
        base.AfterCreateModelData(e);//走一遍基类自已原有的逻辑

        // 方式1：仅赋值（安静填值，不触发带出）
        // this.Model.SetItemValueByNumber("FSupplierId", "GYS001", 0);//`.SetItemValueByNumber`按照编号给字段赋值（比按名称更稳定，金蝶最推荐的方式）

        // 方式2：赋值并触发供应商的带出服务（推荐！）
        ((IDynamicFormViewService)this.View).SetItemValueByNumber(
            "FSupplierId",      // 字段内码
            "GYS001",           // 供应商编号
            0,                  // 表头行号固定为0
            true                // 强制触发变更事件
        );

        // 你还可以继续加其他默认值
        ((IDynamicFormViewService)this.View).SetItemValueByNumber("FStockOrgId", "100", 0, true); // 默认组织
        ((IDynamicFormViewService)this.View).SetItemValueByNumber("FCurrencyId", "PRE001", 0, true); // 默认币种
    }
}```
