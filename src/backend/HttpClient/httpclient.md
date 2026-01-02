# httpclient

使用场景：爬虫，调用API接口
安装、引用：System.Net.Http

HTTP请求方法：

1. `GET`从服务器获取数据
2. `POST`向服务器提交数据

200 = 成功、404 = 资源不存在、500 = 服务器错误

实例创建后，尽量复用同一个实例，每次创建一个新的可能会导致端口耗尽

```请求超时时间
using (HttpClient httpClient = new HttpClient())
{
    // 设置请求超时时间：10 秒（超过 10 秒未响应，则抛出超时异常）
    httpClient.Timeout = TimeSpan.FromSeconds(10);

    // 后续请求代码不变...
}
```
