# 表单插件：DataChanged 值更新后

应用场景：

1. 获取字段变化新旧值，写入日志
2. 基于字段值变化，刷新其他字段的数据
3. 基于字段值变化，触发更新事件或表单服务

`DataChanged` 在单据上修改任何一个字段，系统都会触发这个方法
叫做【字段变更监听+调试弹窗】

```示例
public override void DataChanged(DataChangedEventArgs e)
{
    base.DataChanged(e);
    //如果是客户更新
    /*if (e.Field.Key.EqualsIgnoreCase("FCustId"))
    {
        this.View.Model.SetValue("FNote",e.NewValue);//赋值客户内码
        this.View.Model.SetValue("FNote1","客户变化后赋值到备注");
        //刷新
        this.View.UpdateView("FNote");
        this.View.UpdateView("FNote1");


        //赋值返回的是内码
        //给字段FCustIdNew，赋值新值，更新后的值
        this.View.Model.SetValue("FCustIdNew",e.NewValue);

        //给字段FCustIdOld，赋值旧值，更新前的值
        this.View.Model.SetValue("FCustIdOld",e.OldValue);

        //刷新
        this.View.UpdateView("FCustIdNew");
        this.View.UpdateView("FCustIdOld");

    }*/

    //使用switch,case,break代替if
    switch(e.Field.Key)
    {
        //case判断 客户
        case "FCustId":
            this.View.Model.SetValue("FNote","客户变化后赋值");
            this.View.Model.SetValue("FNote1","客户变化后赋值");
            this.View.Model.SetValue("FCustIdNew",e.NewValue);
            this.View.Model.SetValue("FCustIdOld",e.OldValue);
            //结束
            break;


        case "FMaterialId":
            this.View.Model.SetValue("F_YDIE_ProjectName", "项目名称"+e.Row.ToString(),e.Row);
            break;


    }
}
```

```示例
//通过值更新事件，显示字段值变化
public override void DataChanged(DataChangedEventArgs e)
{
    base.DataChanged(e);

    // 【关键防护1】如果字段为空，直接不弹（防止新增行等异常情况）
    if (e.Field == null) return;
    if(e.Field.Key == "FMaterialId")//判断只有物料更新才执行
    {
    try
    {
        // 把所有可能为 null 的值都安全转成字符串
        string oldValue = e.OldValue?.ToString() ?? "<空>";
        string newValue = e.NewValue?.ToString() ?? "<空>";
        int rowIndex = e.Row + 1; // 从0开始，显示时+1更好看，如果是-1就显示0
        if (rowIndex <= 0) rowIndex = 1;

        string json = DynamicObjectToJson(this.Model.GetValue(e.Field, e.Row)) ?? "null";

        var msg = string.Format(
            "字段变更提醒\n\n" +
            "单据类型：{0} ({3})\n" +
            "变更字段：{1}.{2}\n" +
            "行号：第 {6} 行\n" +
            "旧值：{7}\n" +
            "新值：{8}\n\n" +
            "当前行完整数据：\n{9}"
            , this.View.BillBusinessInfo.GetForm().Name              // {0}
            , e.Field.Entity.Name                                     // {1}
            , e.Field.Name                                            // {2}
            , this.View.BillBusinessInfo.GetForm().Id                 // {3}
            , e.Field.Entity.Key                                      // {4}
            , e.Field.Key                                             // {5}
            , rowIndex                                                // {6}
            , oldValue                                                // {7}
            , newValue                                                // {8}
            , json                                                    // {9}
        );

        this.View.ShowMessage(msg);
    }
    catch (Exception ex)
    {
        // 【关键防护2】万一还有别的异常，也别让系统崩溃
        this.View.ShowErrMessage("DataChanged出错了：" + ex.Message);
    }
    }
}


//官方推荐的把 DynamicObject 转成 JSON 字符串的方法
public static string DynamicObjectToJson(object obj)
{
    if(obj == null)
    {
        return null;
    }
    //金蝶自己封装的JSON序列化工具
    var jsonSerializerProxy = new JsonSerializerProxy(Encoding.UTF8,false);//用UTF-8编码（支持中文），不格式化
    //把任何对象（包括DynamicObject）变成JSON字符串
    var jsonData = jsonSerializerProxy.Serialize(obj);
    return jsonData;
}
```
