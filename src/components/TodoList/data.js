const d = [
  'what is FE - wife', [
    ['编程基础', [
      ['计算机基础', [
        ['计算机组成原理', [
          '冯诺依曼机构',
          '二进制',
          '算术运算',
          '各级存储器的区别'
        ]],
        ['操作系统', [
          '进程和线程',
          'CPU调度算法',
          '内存管理',
          '文件系统和IO'
        ]],
        ['汇编语言', [
          '寄存器和内存模型'
        ]]
      ]],
      ['数据结构', []],
      ['算法', []]
    ]],
    ['语法和API', [
      ['业界标准', []],
      ['XML', []],
      ['HTML', []],
      ['CSS', []],
      ['ES 语法', []],
      ['Typescript 语法', []],
      ['JS Web API', []],
      'JSON 格式',
      'WebAssembly',
      'Web RTC'
    ]],
    ['网络和通讯', []],
    ['开发流程', []],
    ['前端工程化', []],
    ['运行和监控', []],
    ['前端框架', []],
    ['常用工具和插件', []],
    ['技术广度', []],
    '其他'
  ]
]

export function TodoCell(info) {
  const ch = info[1]
  if (Array.isArray(ch)) {
    this.title = info[0]
    this.children = ch.map(i => new TodoCell(i))
  } else this.title = info
}

export const DATA = new TodoCell(d)
