# DAKOLAS Next.js 首页分析与规划

## 1. 公司定位

- 公司英文名：Shenzhen Dakolas Co., Ltd.
- 品牌名：DAKOLAS
- 成立年份：2012
- 团队规模：1-10 elite team members
- 定位：premium replacement parts supplier for mobile phones, tablets, and laptops
- 主要市场：Europe, North America, the Middle East, Southeast Asia, Australia
- 目标客户：mobile phone and computer repair shops, mobile phone and computer parts wholesalers

## 2. 网站目标

首页需要同时承担四个目标：

- 获取询盘
- 展示实力
- SEO获客
- 广告落地页承接

核心转化动作：

- Get a Quote
- Download Catalog
- WhatsApp
- Submit inquiry

## 3. 首页结构建议

1. Hero：一句话说明供应范围，给出 Get a Quote / Download Catalog。
2. Product Scope：手机屏幕与电池、平板配件、电脑配件、OEM/ODM。
3. Why DAKOLAS：OEM/ODM、全球交付、Factory direct supply。
4. Applications：维修店、批发商、OEM/ODM买家。
5. Factory & Quality：只写真实可验证能力，不虚构认证。
6. About / Kabbie + Tom Zhu：Kabbie 放在 Tom Zhu 前面，作为优先询盘联系人；Tom Zhu 保留邮箱和 WhatsApp，不展示照片。
7. FAQ：回答采购前关键问题。
8. Inquiry Form：收集姓名、邮箱、国家、产品需求、留言。

## 4. 视觉方向

本轮根据用户最新要求，视觉方向改回 DAKOLAS 既有品牌：

- 主色：DAKOLAS Blue + White
- 辅助色：Deep navy / Light blue / Cool gray
- 风格：专业、科技、外贸B2B、维修配件目录站
- 禁忌：卡通、廉价、塑料感、过度炫酷、虚假客户、虚构认证、低质AI图

因此当前版本采用蓝白目录站视觉，同时保留 Repair Outlet 式的分类、搜索和SKU找货模式。

## 5. SEO与内容建议

首页目标关键词建议：

- premium replacement parts supplier
- mobile phone replacement parts supplier
- mobile phone screens and batteries supplier
- tablet and laptop spare parts supplier
- OEM ODM phone parts supplier

后续页面建议：

- `/products`
- `/products/mobile-phone-screens-batteries`
- `/products/tablet-parts`
- `/products/laptop-spare-parts`
- `/oem-odm`
- `/applications/repair-shops`
- `/applications/parts-wholesalers`
- `/factory`
- `/blog`
- `/contact`

## 6. 技术说明

本交付使用 Next.js App Router 格式：

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `public/images/*`

当前工作区只有 Node，没有 npm/pnpm，因此本次交付源码结构完整，但未在本机安装依赖运行 Next dev server。

## 7. 同行参考：repairoutlet.co.uk

已参考同行站点：https://repairoutlet.co.uk/

可确认观察：

- 首页SEO标题：`Repair Outlet | Experts in High Quality Mobile Phone Parts`
- Meta描述强调：mobile and tablet screen replacements, batteries and parts, fast UK delivery
- 站点使用 Shopify，并开放 product / collection / page / blog 抓取
- 信息架构非常重视按设备型号建集合页，例如 iPhone、iPad、MacBook 各型号 collection
- 首页/导航更偏电商目录和快速找货，不只是品牌展示

对 DAKOLAS 的借鉴：

- 首页增加 `Find parts by device family and model` 模块
- 后续SEO页面应按 `brand + model + part type` 展开
- DAKOLAS 不公开价格，因此按钮应从购物车逻辑改成 `Send model list` / `Get a Quote`
- 可优先做 iPhone、Samsung、iPad、MacBook 四组型号入口，再逐步扩展具体型号页面
