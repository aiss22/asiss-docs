# 写文件日志 log4net

引用using Kingdee.BOS.Log;using log4net;

[assembly: log4net.Config.XmlConfigurator(Watch = true)]
类继承AbstractDynamicFormPlugIn

前往应用服务器，WebSite\Bin文件下修改Web.config文件的log4net配置节

```配置内容如下：

    <logger name="EventLogger">

      <level value="ALL" />

      <appender-ref ref="EventLoggerAppender" />

    </logger>

    <appender name="EventLoggerAppender" type="log4net.Appender.RollingFileAppender">

      <file value="App_Data\EventLog\" />

      <appendToFile value="true"/>

      <maxSizeRollBackups value="10"/>

      <maximumFileSize value="1MB"/>

      <rollingStyle value="Date"/>

      <datePattern value="yyyy-MM-dd/'Cloud.log'"/>

      <staticLogFileName value="false"/>

      <param name="RollingStyle" value="Composite"/>

      <layout type="log4net.Layout.PatternLayout">

        <conversionPattern value="%date [%thread] %-5level - %message%newline"/>

      </layout>

    </appender>
```

```示例
public override void BarItemClick(BarItemClickEventArgs e)
{
    // 调用父类的 BarItemClick 方法，确保基类中的逻辑（如默认行为）也被执行
    // DevExpress 的 BarManager 或 RibbonControl 等控件会触发此事件
    base.BarItemClick(e);

    // 判断点击的 BarItem 的 Key 是否为 "tbWriteFileLog"（不区分大小写）
    // BarItemKey 是 DevExpress BarItem 的唯一标识字符串
    if (e.BarItemKey.EqualsIgnoreCase("tbWriteFileLog"))
    {
        // 获取名为 "EventLogger" 的 log4net 日志记录器实例
        // 这里通过自定义的 LogHelper 类来获取，避免每次都直接调用 LogManager.GetLogger
        var log = LogHelper.GetLogger("EventLogger"); // 事件记录器

        // 记录一条 Info 级别的日志
        // 内容为中文测试信息
        log.Info("我是一条测试数据：");

        // 记录一条 Error 级别的日志
        // 同时附带一个自定义异常对象 KDException
        // 注意：消息末尾有一个 ")"，可能是笔误
        log.Error("我是一条测试日志数据：)", 
                  new KDException("?", "操作异常……"));

        // 计算当天日志文件的完整路径
        // AppDomain.CurrentDomain.BaseDirectory：当前应用程序的根目录（如 bin 目录）
        // App_Data\EventLog\yyyy-MM-dd\Cloud.log：相对路径，逐日分文件夹
        var logFilePath = AppDomain.CurrentDomain.BaseDirectory + 
                          "App_Data\\EventLog\\" +
                          DateTime.Now.ToString("yyyy-MM-dd") + 
                          "\\Cloud.log";

        // 在当前视图（this.View，通常是 DevExpress 的 XtraForm 或 UserControl）上弹出一个消息框
        // 告知用户日志文件已保存到服务器的指定路径
        // 注意：这只是在客户端显示路径，实际日志是由 log4net 配置的 Appender 决定写入位置
        this.View.ShowMessage(string.Format(
            "文件日志已保存至应用服务器的已下路径：{0}", 
            logFilePath));

        // 直接返回，结束本次事件处理（后续的 BarItem 点击逻辑不会执行）
        return;
    }

    // 如果点击的不是 "tbWriteFileLog"，则继续执行基类或其他可能的后续逻辑
}

// 静态日志帮助类，提供线程安全的 log4net ILog 实例缓存
public static class LogHelper
{
    // 使用线程安全的并发字典缓存已经创建的日志器实例
    // Key：日志器名称（如 "EventLogger"）
    // Value：对应的 log4net.ILog 实例
    // 这样可以避免重复创建相同的日志器，提高性能并保持一致性
    private static readonly ConcurrentDictionary<string, log4net.ILog> loggers = 
        new ConcurrentDictionary<string, log4net.ILog>();

    /// <summary>
    /// 获取指定名称的 log4net 日志记录器
    /// </summary>
    /// <param name="name">日志器名称，通常是类名或自定义标识</param>
    /// <returns>log4net.ILog 实例</returns>
    public static log4net.ILog GetLogger(string name)
    {
        // 先快速检查字典中是否已有该名称的日志器（无锁读取，性能高）
        if (loggers.ContainsKey(name))
        {
            return loggers[name];
        }

        // 如果不存在，则进入锁区进行双重检查（经典的双检查锁模式）
        // 这里锁的是 typeof(Logger) 类型对象，也可以锁 loggers 本身
        lock (typeof(Logger))
        {
            // 再次检查，防止在等待锁的过程中其他线程已经添加
            if (!loggers.ContainsKey(name))
            {
                // 真正创建日志器实例
                // LogManager.GetLogger(name) 会根据 log4net 配置返回对应的 logger
                loggers[name] = LogManager.GetLogger(name);
            }
        }

        // 返回缓存中的日志器实例
        return loggers[name];
    }
}
```
