<<<<<<< HEAD
# DynamicObject转Json

应用场景:将单据的DynamicObject转换成Json字符串

 ```1
    /// <summary>
    /// 【单据插件】DynamicObject转Json
    /// </summary>
    [Description("【单据插件】DynamicObject转Json"), HotUpdate]
    public class DynamicObjectToJsonBillPlugIn : AbstractBillPlugIn
    {
        public override void AfterBindData(EventArgs e)
        {
            base.AfterBindData(e);
            var jsonData = DynamicObjectToJson(this.Model.DataObject);
            this.View.ShowMessage("DynamicObject转Json结果：\r\n" + jsonData);
        }
        private static string DynamicObjectToJson(object obj)
        {
            //金蝶自己封装的JSON序列化工具
            var jsonSerializerProxy = new JsonSerializerProxy(Encoding.UTF8, false);//用UTF-8编码（支持中文），不格式化

            //把任何对象（包括DynamicObject）变成JSON字符串
            var jsonData = jsonSerializerProxy.Serialize(obj);
            return jsonData;
        }
    }
```
=======
# DynamicObject转Json

应用场景:将单据的DynamicObject转换成Json字符串

 ```/// <summary>
    /// 【单据插件】DynamicObject转Json
    /// </summary>
    [Description("【单据插件】DynamicObject转Json"), HotUpdate]
    public class DynamicObjectToJsonBillPlugIn : AbstractBillPlugIn
    {
        public override void AfterBindData(EventArgs e)
        {
            base.AfterBindData(e);
            var jsonData = DynamicObjectToJson(this.Model.DataObject);
            this.View.ShowMessage("DynamicObject转Json结果：\r\n" + jsonData);
        }
        private static string DynamicObjectToJson(object obj)
        {
            //金蝶自己封装的JSON序列化工具
            var jsonSerializerProxy = new JsonSerializerProxy(Encoding.UTF8, false);//用UTF-8编码（支持中文），不格式化

            //把任何对象（包括DynamicObject）变成JSON字符串
            var jsonData = jsonSerializerProxy.Serialize(obj);
            return jsonData;
        }
    }
```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
