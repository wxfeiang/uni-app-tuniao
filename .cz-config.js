/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 10:07:29
 * @LastEditTime: 2023-08-28 15:55:17
 * @FilePath: /vue3template/.cz-config.js
 */
module.exports = {
  // prettier-ignore
  types: [
    { value: "feature", name: "特性:     ✨  新增功能", emoji: ":sparkles:" },
    { value: "fix", name: "修复:     🐛  修复缺陷", emoji: ":bug:" },
    { value: "docs", name: "文档:     📝  文档变更", emoji: ":memo:" },
    { value: "style", name: "格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
    { value: "refactor", name: "重构:     ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
    { value: "perf", name: "性能:     ⚡️  性能优化", emoji: ":zap:" },
    { value: "test", name: "测试:     ✅  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:" },
    { value: "build", name: "构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）", emoji: ":package:" },
    { value: "ci", name: "集成:     🎡  修改 CI 配置、脚本", emoji: ":ferris_wheel:" },
    { value: "revert", name: "回退:     ⏪️  回滚 commit", emoji: ":rewind:" },
    { value: "chore", name: "其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:" },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  allowCustomScopes: true,

  // 跳过要询问的步骤
  //skipQuestions: ['body', 'footer'],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
};
