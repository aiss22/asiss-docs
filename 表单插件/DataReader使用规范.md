# 表单插件：DateReader使用规范

应用场景：
使用DataReader时，请使用using代码块，确保数据库连接能被强制关闭。
如果DataReader未及时关闭，可能会产生以下异常：
“已有打开的与此 Command 相关联的 DateReader,必须首先将他关闭”

`string.Empty` 空字符串（比直接写""更专业一点）

`@FUSERID` sql占位符

`KDDbType.Int32` 整数类型值

`Context.UserId` 当前用户ID

`DBUtils.ExecuteReader` 金蝶提供的一个工具方法，意思是：“去数据库执行这条SQL，把结果给读出来”

`using (...) { }` 是C#的一种写法，意思是“用完这个东西后自动销毁”，防止内存泄漏

`dr` 相当于数据阅读器，可以一行一行读查询结果

```//进入采购单据之后绑定数据（获取用户手机）
public override void AfterBindData(EventArgs e)
{
    base.AfterBindData(e);
    var userPhone = string.Empty;//新建变量，给userPhone赋值空字符串
    var sql = "SELECT * FROM T_SEC_USER WHERE FUSERID=@FUSERID";//sql查询语句（"去用户表（T_SEC_USER）里，查找 FUSERID 等于当前登录用户ID的那个人"）
    var parameter = new SqlParam("@FUSERID",KDDbType.Int32,Context.UserId);//创建一个参数对象，填到"@FUSERID"里
    //执行Sql查询，并拿到结果
    using (var dr = DBUtils.ExecuteReader(Context,sql,parameter))
    {
        while (dr.Read())//如果还有下一行数据，继续读
        {
            userPhone = Convert.ToString(dr["FPHONE"]);//获取手机号转成字符串赋值给userPhone
        }
        dr.Close();//手动关闭阅读器
    }
    this.View.ShowMessage("当前用户手机号码："+ userPhone);
}
```
