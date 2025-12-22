# 获取单据头FID内码

业务场景：订单列表，点击按钮获取选中行单据头的FID内码
引用：`using Kingdee.BOS.Core.List/using Kingdee.BOS.Core.List.PlugIn`

类继承：`AbstractListPlugIn`

```示例
string info;
public override void BarItemClick(BarItemClickEventArgs e)
{
    base.BarItemClick(e);

    if(e.BarItemKey.EqualsIgnoreCase("OXCH_tbTest"))
    {
        //选择的行，获取所有信息，放在Listcoll里面
        ListSelectedRowCollection listcoll = this.ListView.SelectedRowsInfo;

        //获取所选行的主键，赋值给一个数组listKey
        //接收返回的数组值
        string[] listKey = listcoll.GetPrimaryKeyValues();

        //定义字段
        info = "";

        //显示出来，获取的主键
        //for循环
        foreach (string key in listKey)
        {
            //给info赋值，读取出来
            info = info + ","+key;
        }
        this.View.ShowMessage(info);
    }
}
```
