# BLOG-With-Craft

中文 | **[English](./README.md)**

使用 Craft.do API 和 Next.js 框架生成一个静态站点，并且所有内容都在Craft中管理。
我将该项目迁移到了TypeScript。
## 快速开始

### 创建一个配置页面

在Craft中创建一个新页面。做，加上你的标题，并将其分享公开，页面内容应遵循以下格式:

- Post Title 1
    - post-path-1
    - the craft.do page share link (e.g. https://www.craft.do/s/xxxxxxxxx)
- Post Title 2
    - post-path-2
    - the craft.do page share link (e.g. https://www.craft.do/s/ooooooooo)
- ...

这个页面的格式可供参考: [Demo Config](https://www.craft.do/s/8gQSdBtbuPjpp1), 你可以在标题中使用反向链接。

### 部署

复制或fork这个仓库到你的电脑或Github上，然后编辑' blog.config.ts '的内容。

复制上面的配置页面共享链接，并粘贴到' blog.config.ts '中的' craftConfigShareUrl '。

部署到Vercel或其他地方，完成。

查看更多详情：[Next Craft Guide](https://zuolan.me/next_craft)

## License

The MIT License.
