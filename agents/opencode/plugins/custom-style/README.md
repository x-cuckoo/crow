# Custom Style

OpenCode Desktop 自定义界面样式插件，使用官方 `Style` 扩展点，目前包含提交按钮，以及顶部标签页、会话标题和首页列表中的项目圆点。

## 效果

### 提交按钮（`src/submit.css`）

- 蓝底 `#0089FF`、白色图标、8px 圆角，保留宿主按钮尺寸。
- 悬停和按下时加深蓝色；禁用时降低透明度；键盘聚焦时显示蓝色轮廓。
- 桌面发送、停止和 shell 提交共用同一按钮，均使用这套外观，图标和点击行为由宿主管理。
- 选择器限定在 composer 操作区的图标提交按钮，移动端文字提交按钮不匹配。

### 项目图标（`src/titlebar.css`）

- 项目文字图标替换为居中的 8px 实心圆点，填充色沿用各图标原本的底色。
- 隐藏文字，去掉边框、背景渐变和阴影。
- 作用于横向顶部标签页、会话标题、首页项目列表和会话列表中的项目文字图标，图片和生成式头像沿用宿主外观。

### 标签页忙碌动画（`src/busy.css`、`src/busy.svg`）

- `busy` 状态使用用户提供的 90 粒子 SVG，保留 `#1d3f72` 原色、360 个属性动画和 4 秒循环，以 16px 尺寸显示。
- 显示时使用 `brightness(4)` 提亮，改善深色背景上的可见性。
- SVG 内联到 GUI 构建产物中，显示和隐藏由宿主标签页状态控制。
- 选择器限定为标签页 `busy` 活动图标；未读、待回答/授权和失败提示保留各自的状态样式。

## 构建与加载

在本目录运行（构建依赖与 OpenCode 2.2.6 配套）：

```sh
npm ci
npm run typecheck
npm run build
```

在 `~/.config/opencode/opencode.json` 的 `plugins` 数组中追加此目录的绝对路径，保留已有插件。例如：

```json
{
  "plugins": ["/path/to/crow/agents/opencode/plugins/custom-style"]
}
```

GUI 插件从全局配置加载。配置保存后自动加载；之后修改 `src/` 中对应的 CSS 并重新构建即可更新。持续开发时可运行 `npm run dev` 监听构建。

关闭插件或移除配置中的这一项，即可恢复宿主样式。

## 适配范围

依据 OpenCode Desktop 2.2.6 的 `data-component="composer"`、`data-slot="composer-actions"` 和 `data-action="composer-submit"` 定位。SDK 和宿主 DOM 都可能随版本变化，升级后需重新核对选择器。
