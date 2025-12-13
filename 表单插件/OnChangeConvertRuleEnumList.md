# 表单插件：OnChangeConvertRuleEnumList

应用场景：
单据转换，下推或者选单操作，选单界面，根据业务需要隐藏某些转换规则，不开放给用户使用

```//当系统正在准备“单据转换规则列表”的时候，会自动调用这个方法
public override void OnChangeConvertRuleEnumList(ChangeConvertRuleEnumListEventArgs e)
{
    base.OnChangeConvertRuleEnumList(e);
    //判断当前操作是否是下推
    if(IsPush(e.Convertrules))
    {
        // 查询单据转换规则SQL：SELECT a.FID AS 转换规则内码,b.FNAME AS 转换规则名称,* FROM T_META_CONVERTRULE a LEFT JOIN T_META_CONVERTRULE_L b ON a.FID=b.FID AND b.FLOCALEID=2052
        // WHERE a.FSOURCEFORMID='PUR_PurchaseOrder' AND a.FTARGETFORMID='STK_InStock'
        var ruleId = "7aa62154-c23f-4a02-abae-d024b4eceeb7";//FPKID
        //采购订单下推采购入库单时，移除某个单据转换规则
        e.ConvertRuleEnumList.RemoveAll(o => o.EnumId == ruleId);

    }
}

///<summary>
///当前操作是否是下推
/// </summary>
/// <param name="convertrules"></param>
/// <returns></returns>
private bool IsPush(List<ConvertRuleElement> convertrules)
{
    var formId = this.View.BillBusinessInfo.GetForm().Id;
    return convertrules != null && convertrules.Any(o => o.SourceFormId.EqualsIgnoreCase(formId));
}

///<summary>
///当前操作是否是选单
/// </summary>
/// <param name="convertrules"></param>
/// <returns></returns>
private bool IsDraw(List<ConvertRuleElement> convertrules)
{
    var formId = this.View.BillBusinessInfo.GetForm().Id;
    return convertrules != null && convertrules.Any(o => o.TargetFormId.EqualsIgnoreCase(formId));
}
```
