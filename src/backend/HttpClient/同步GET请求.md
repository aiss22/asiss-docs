# 同步GET请求

调用公开测试接口，获取数据并打印

```同步GET
using System;//用于设置编码、异常处理等
using System.Net.Http;//用于HttpClient类
using System.Reflection.Metadata;
using System.Text.Json;//用于处理JSON数据

//创建HttpClient实例
HttpClient client = new HttpClient();

try
{
    //定义请求的URL（公开测试接口：获取随机用户数据）
    string requestUrl = "https://jsonplaceholder.typicode.com/users/1";

    //发送GET请求,同步获取响应内容，
    //GetStringAsync是异步方法, .Result 阻塞转为同步，异步 GET 请求，直接返回响应体的字符串格式（无需手动解析响应流）
    string responseBody = client.GetStringAsync(requestUrl).Result;

    //输出响应内容
    Console.WriteLine("=== GET 请求响应结果 ===");
    Console.WriteLine("响应状态：成功（接口返回200）");
    Console.WriteLine("响应体（原始JSON数据）");
    Console.WriteLine(responseBody);

    //将JSON字符串转为C#对象（便于操作数据）
    //先定义用户实体类User
    User user = JsonSerializer.Deserialize<User>(responseBody);//.NET 内置 JSON 解析工具，将 JSON 转为自定义实体类（User 类的字段需与 JSON 字段对应）
    Console.WriteLine("\n=== 解析后的用户数据 ===");
    Console.WriteLine($"用户ID：{user.id}");
    Console.WriteLine($"用户名：{user.username}");
    Console.WriteLine($"邮箱：{user.email}");
    Console.WriteLine($"电话：{user.phone}");
}
catch (Exception ex)
{
    //捕获并输出异常信息
    Console.WriteLine("请求过程中发生错误:");
    Console.WriteLine(ex.Message);
}
finally
{
    //释放HttpClient资源，避免内存泄漏
    client.Dispose();
}

//定义与JSON数据结构对应的C#类
public class User
{
    public int id { get; set; }
    public string name { get; set; }
    public string username { get; set; }
    public string email { get; set; }
    public string phone { get; set; }
    public string website { get; set; }
}
```
