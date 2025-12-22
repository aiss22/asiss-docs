# 表单插件：AfterBindData 判断是什么单据状态，触发相应的操作

//判断单据状态
//有四种：ADDNEW（新增）,ENIT（编辑）,VIEW（查看）,DISASSEMBLY（卸载）

//这是数据绑定后事件
//这个事件是单据新增，编辑，查询加载后最后一个事件

```示例
public override void AfterBindData(EventArgs e)
{
    base.AfterBindData(e);
    //判断单据状态
    //有四种：ADDNEW（新增）,EDIT（编辑）,VIEW（查看）,DISASSEMBLY（卸载）
    
    //如果是新增状态ADDNEW
    if(this.View.OpenParameter.Status.Equals(OperationStatus.EDIT))
    {
        //给备注和备注1赋值
        this.Model.SetValue("FNote","备注");
        this.Model.SetValue("FNote1","备注1");

        //刷新
        this.View.UpdateView("FNote");
        this.View.UpdateView("FNote1");

    }
}
```
