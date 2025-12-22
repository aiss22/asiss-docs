# 表单插件：CreateNewData

应用场景：新建单据时，希望插件接管数据包的初始化工作，包括数据包的构建，字段的默认值设置等

`as IBillView` 类型转换（转换为IBillView）

`OpenParameter` 代表打开参数（比如怎么打开这个视图的设置）

`Status` 参数的状态

`OperationStatus.ADDNEW` 一个枚举值（预定义的常量）意思是新增状态

`CreateFrom` 代表创建来源

`CreateFrom.Copy` 枚举值，意思是从复制创建

`BusinessDataServiceHelper` 工具类（Helper）,用于帮助加载业务数据

```//币别，新增时，始终使用人民币做初始数据
public override void CreateNewData(BizDataEventArgs e)
{
    base.CreateNewData(e);
    //检查单据是否为“单据视图”(IBillView)
    var billView = this.View as IBillView;
    //判断billView不为空与（&&）是不是在新增模式打开与（&&）不是复制来的而是新增
    if(billView != null 
        && billView.OpenParameter.Status == OperationStatus.ADDNEW
        && billView.OpenParameter.CreateFrom != CreateFrom.Copy) 
    {
        //新增币别时，始终使用人民币做初始数据（使用BusinessDataServiceHelper.LoadSingle加载ID为1的基础资料（人民币）作为模板）
        var srcObj = BusinessDataServiceHelper.LoadSingle(this.Context,1,this.View.BillBusinessInfo.GetDynamicObjectType());
        //创建源对象的副本，清空单据编号，设置新单据的状态为A（未审核）
        var obj = (DynamicObject)srcObj.Clone();
        obj["Number"]="";
        obj["DocumentStatus"]="A";
        //新对象返回给系统
        e.BizDataObject = obj;
    }
}
```
