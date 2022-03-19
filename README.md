## 问题反馈
- 如果您在使用中存在bug或者有更超前的思想或者解决方案，不限于新的组件、新的模式，您可以在Issue提交问题，我们会定时进行维护并回复。
## 联系我们
- 如果您想加入我们，您可以通过邮件：liningning@codeym.com,或者添加进群：
<img src="https://mzlui.codeym.com/ql.jpg"/>
<br/>

# 贡献指南
- 首先非常感谢您能选择为mzl-ui做出贡献,mzl-ui是基于vue3.2开发，mzl-ui离不开大家的共同贡献和维护，如果您想参与贡献，请阅读以下内容。
## Issue 规范
- 在提交 issue 之前，请搜索相关内容是否已被提出。
- 请说明 mzl-ui 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 JSFiddle 生成在线 demo，这能够更直观地重现问题。
## Pull Request 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。
- commit 信息要以[组件名]: 描述信息 的形式填写，例如 Button: fix xxx bug。
- 不要提交 lib 里面打包的文件。
- 执行 npm run build 后可以正确打包文件。
- 提交 PR 前请 rebase，确保 commit 记录的整洁。
- 确保 PR 是提交到 dev 分支，而不是 main 分支。
- 如果是修复 bug，请在 PR 中给出描述信息。
- 合并代码会有专人审核，避免滥用植入等，审核通过后即可合并。
## 开发环境
- 首先你需要 Node.js 14+，yarn 和 npm 6+。
## 组件开发规范
- 通过 make new 创建组件目录结构，包含测试代码、入口文件、文档
- 组件内如果依赖了其他组件，需要在当前组件内引入，参考 Select
## 代码规范
-  避免过多的html代码累赘，秉承数据驱动视图思想，简化使用繁琐度，提供更强的拓展性
-  色彩范围请参考：https://mzlui.codeym.com/#/mzlui/color
-  其他规范正在完善
