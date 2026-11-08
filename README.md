# MUYI · 后端 × AI 工程师作品集

> 正式站点已迁移至 Cloudflare Pages 👉 **https://homepage-4k6.pages.dev/**
> 知识书 👉 **https://muyi-axl.pages.dev/**

本仓的角色已变更为**主页源码仓库 + 旧链接跳板**：

- `site/`：主页源码（原生 HTML/CSS/JS，Cloudflare Pages 部署源）
- `index.html`：跳板页 —— 旧主页地址 0 秒跳转到新主页
- `404.html`：智能跳板 —— `/MUYI/*` 旧知识书链接自动跳到 `muyi-axl.pages.dev` 对应页面，其余路径跳新主页（依赖用户站 404 接管机制）

## 部署主页到 Cloudflare

```bash
wrangler pages deploy site --project-name=homepage
```

## 为什么迁移

GitHub Pages 单次部署 10 分钟限制，MUYI 知识书（255MB / 1828 文件）连续 4 次超时；
同一构建 Cloudflare Pages 67 秒完成。迁移后 GitHub Pages 保留为跳板，旧链接（收藏夹/搜索引擎收录）零 404。

## 站点板块

- **首屏**：十年后端统计（10yr 后端 / 347 笔记 / 18 容器微服务 / 3 开源组件·123 测试）+ 终端风代码块
- **01 关于我**：金融科技后端（信贷/交易方向），正把积累迁移到 AI 应用工程——业余练手 star-site 及其通用组件库，持续维护 MUYI 知识库
- **02 工程实践**：star-site（Spring Cloud 微服务平台，11 个 Java 微服务 + LangChain 智能体）· star-site-components（通用组件库三件套：序列/异步命令/分布式锁）· invest（AI 投研平台，Vision OCR + GLM 结构化）· voice-utils（终端语音工程）· MUYI（知识库）
- **03 技能矩阵**：Java 内核 / 框架 / 存储 / 分布式 / AI 应用 / 云原生 / 前端 / 工程素养，均附佐证链接
- **04 知识库精选**：分布式 ID / 支付 HMAC 验签 / 缓存三兄弟等深度文章
- **05 学习轨迹**：2016 → 2026 时间线（含组件库开源化、AI 投研平台）

## 相关仓库

[GitHub 主页](https://github.com/Mein-Augenstern) ｜ [MUYI 知识库](https://github.com/Mein-Augenstern/MUYI) ｜ [star-site-backend](https://github.com/Mein-Augenstern/star-site-backend) ｜ [star-site-components](https://github.com/Mein-Augenstern/star-site-components) ｜ [star-site-frontends](https://github.com/Mein-Augenstern/star-site-frontends) ｜ [ai-service](https://github.com/Mein-Augenstern/star-site-platform-ai-service) ｜ [invest](https://github.com/Mein-Augenstern/invest) ｜ [constellation](https://github.com/Mein-Augenstern/constellation)
