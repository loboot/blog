# 什么是 Shell？

> Shell，即外壳。是由 C 语言编写的程序，是 Linux/Unix 的外壳，用于外界与 Linux 内核的交互。也就是说用户通过 shell 解释器，将命令转换为内核能够理解指令，然后执行，返回结果给用户。

Linux/Unix 提供了很多 Shell，常用的有 sh、bash、csh 等。可以通过一下命令查看系统有几种 shell：

```shell
cat /etc/shells
```

显示如下：

```shell
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

### Shell Script

使用文本编辑器、脚本解释器就可以编写运行 shell 命令。

```
#!/bin/sh
echo ‘Hello Shell!’
```

`#!`: 指定解释脚本解释器<br />运行

1. 作为可执行程序

```shell
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

2. 作为解释器参数

```shell
/bin/sh test.sh
```

### 参考文档

[终极 Shell——ZSH](https://zhuanlan.zhihu.com/p/19556676)
