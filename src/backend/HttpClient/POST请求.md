# POST 请求

POST 请求用于向服务器提交数据（如创建用户、登录、提交表单），核心是构造请求体（通常为 JSON 格式）

```POST
using System;//用于设置编码、异常处理等
using System.Net.Http;//用于HttpClient类
using System.Text.Json;//用于处理JSON数据

namespace HttpClientLearnDemo
{
    class Program
    {
        static async Task Main(string[] args)
        {
            //创建HttpClient实例
            using(HttpClient client = new HttpClient())
            {
                try
                {
                    //定义请求URL（创建新用户）
                    string repuestUrl = "https://jsonplaceholder.typicode.com/users";

                    //构造请求体数据（新用户信息）
                    User newUser = new User()
                    {
                        name="张三",
                        username="zhangsan",
                        email="254365@qq.com",
                        phone="123-456-7890",
                        website= "zhangsan.com"
                    };

                    //将用户对象转为为JSON字符串
                    string jsonString = JsonSerializer.Serialize(newUser);

                    //构造HttpContent（请求体内容）,指定编码和Contenet-Type
                    //Content-Type: application/json表示请求体是JSON格式
                    StringContent requestContent =new StringContent(
                        jsonString,
                        System.Text.Encoding.UTF8,//指定UTF-8编码
                        "application/json"//指定内容类型为JSON
                        );

                    //发送异步POST请求
                    //PostAsync 接收URL 和请求体内容，返回HttpResponseMessage（完整响应信息）
                    HttpResponseMessage response = await client.PostAsync(repuestUrl,requestContent);

                    //验证响应是否成功（IsSuccessStatusCode =状态码200-299）
                    response.EnsureSuccessStatusCode();//不成功则抛出异常HttpRequestException

                    //读取响应体内容
                    string responseBody = await response.Content.ReadAsStringAsync();

                    //解析并输出响应结果
                    User createdUser = JsonSerializer.Deserialize<User>(responseBody);
                    Console.WriteLine("=== POST请求（创建用户）成功 ===");
                    Console.WriteLine($"新建用户ID：{createdUser.id}");
                    Console.WriteLine($"用户名：{createdUser.username}");
                    Console.WriteLine($"邮箱：{createdUser.email}");
                    Console.WriteLine($"原始响应：{responseBody}");

                }
                catch(HttpRequestException ex)
                {
                    //捕获HTTP请求异常
                    Console.WriteLine($"POST 请求异常：{ex.Message}");
                    if(ex.StatusCode.HasValue)
                    {
                        Console.WriteLine($"HTTP 状态码：{(int)ex.StatusCode.Value}");
                    }
                }
                catch(Exception ex)
                {
                    //捕获其他异常
                    Console.WriteLine($"请求过程中发生错误:{ex.Message}");
                }
        
            }
            //阻塞控制台，防止程序退出过快
            Console.WriteLine("\n按任意键退出...");
            Console.ReadKey();
        }
    }

    //用户实体类
    class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string website { get; set; }

    }
}
```
