# 必读

## Git 上传代码必读流程

1. 添加修改的文件
git add .

2. 提交本地修改（填写清晰的提交信息）
git commit -m "你的提交描述，例如：修复登录bug"

3. 先拉取远程最新代码（避免冲突）
git pull origin master

4. 推送本地代码到远程仓库
git push origin master

## pnpm & nodejs

1. 初始化项目（生成 package.json）
pnpm init

2. 安装依赖包（例如安装 lodash）
pnpm add lodash

   - 开发依赖（只用于开发环境）
   pnpm add -D lodash

   - 全局安装
   pnpm add -g lodash

3. 移除依赖包
pnpm remove lodash

4. 运行开发脚本（通常启动开发服务器）
pnpm dev

5. 构建生产包
pnpm build

6. 下载所有脚本
pnpm install
