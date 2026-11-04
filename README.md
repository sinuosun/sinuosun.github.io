# Sinuo Sun · Personal field notebook

一个围绕数学、工程与 AI 探索的个人主页。纸色、墨绿、浅柠檬色与衬线排版构成视觉基调；内容来自原主页，没有添加虚构项目或经历。

## 本地预览

无需安装依赖或构建。在仓库目录执行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173/ 。也可直接打开 `index.html` 预览；HTTP 服务器更适合完整测试。

## 维护内容

- `index.html`：英文正文、个人信息、邮箱、链接与页面结构。英语是默认语言，关闭 JavaScript 仍可阅读正文和展开研究方向。
- `app.js`：中文译文 `translations`、双语反思提示 `prompts`、语言切换、手机导航与渐入效果。添加内容时，请同步补齐译文。
- `styles.css`：所有视觉样式与响应式断点。开头的 CSS 变量可调整色彩与字体。
- `details.css`：纸纹、圆章、图版定位角标、手绘批注、技术插图和装饰动效。
- `assets/orbit.svg`：原创数学环面线稿，无远程图片依赖。
- `assets/favicon.svg`：个人标记。

中英文偏好保存在当前浏览器；提问文本仅存在于当前页面内存，刷新即清除，不会发送到服务器。反思功能使用预设提示，不接入 AI 服务。

## GitHub Pages

保持现有 Pages 设置。将此改版分支的 PR 合并到 `main` 后，可沿用当前仓库的根目录部署方式。页面没有新增工作流、构建工具或托管服务。

## 设计参考与素材

- 参考 [Simplefolio](https://github.com/cobiwave/simplefolio) 的单页叙事思路，以及 [al-folio](https://github.com/alshedivat/al-folio) 的学术内容组织。
- 本次排版、CSS、交互代码及 SVG 均为重新实现，没有复制上述模板源码或素材，因此没有引入模板依赖。
- 所有字体使用系统字体；没有第三方追踪、远程字体、在线图库或运行时库。
- 装饰参考：[Rough Notation](https://github.com/rough-stuff/rough-notation) 的手绘圈注、[Codrops On-Scroll Path Animations](https://github.com/codrops/OnScrollPathAnimations/) 的路径绘制、[css-doodle](https://css-doodle.com/) 的几何构图，以及 [pattern.css](https://github.com/bansal/pattern.css) 的局部底纹。均以原生 CSS/SVG 重新绘制，没有引入其代码或依赖。

## 可访问性

包含跳过导航链接、键盘焦点样式、原生 `details/summary`、输入框标签、动态结果播报，以及减少动态效果偏好适配。手机导航支持 Escape 关闭，并返回菜单按钮焦点。

首屏右上角的暂停按钮可停止装饰动效；圆章与环面离开可视区后会自动暂停。系统开启减少动态效果时，图形保持静态。插图与纹理都标记为装饰，避免干扰屏幕阅读器。
