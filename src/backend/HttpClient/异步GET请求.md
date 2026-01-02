# 异步GET请求

同步请求会阻塞程序（等待接口响应期间，程序无法做其他事），异步请求是 C# 的推荐用法，核心是 async/await 关键字

```异步GET
//顶级语句使用异步，需添加 await 关键字
namespace HttpClientLearnDemo
{
    class Program
    {
        //入口方法添加 async Task（异步入口）
        static async Task Main(string[] args)
        {
            //创建HttpClient实例
            //使用 using 语句自动释放资源,当代码块执行完毕后，自动调用 Dispose() 释放 HttpClient 资源，无需手动编写，更安全、更简洁
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    //定义请求URL（获取所有用户列表）
                    string requestUrl = "https://jsonplaceholder.typicode.com/users";

                    //发送异步GET请求，使用await 关键字（非阻塞）
                    string responseBody = await client.GetStringAsync(requestUrl);

                    //解析JSON为用户列表
                    List<User> userList = JsonSerializer.Deserialize<List<User>>(responseBody);

                    //输出用户列表
                    Console.WriteLine("=== 所有用户列表 ===");
                    foreach (var user in userList)
                    {
                        Console.WriteLine($"用户ID：{user.id}, 用户名：{user.username}, 邮箱：{user.email}");
                    }
                }
                catch(HttpRequestException ex)
                {
                    //专门捕获HTTP请求异常（如404，500错误）
                   Console.WriteLine($"HTTP 请求异常：{ex.Message}");
                    if(ex.StatusCode.HasValue)
                    {
                        Console.WriteLine($"HTTP 状态码：{(int)ex.StatusCode} - {ex.StatusCode}");
                    }
                }
                catch (Exception ex)
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
    public class User
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
