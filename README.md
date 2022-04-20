# Brave Cowsay 勇敢牛曰

## 说明

> 原始太初，贝拉创造了天地。地面一片空虚混沌，渊面黑暗，只有贝极熊行走在蜜月上。贝拉说：“要有牛！”于是，就有了牛。贝拉把牛和贝极熊分开，把牛称为困难，把贝极熊称为勇敢。困难过去后，勇敢接着来临。
>
> 原初に、ベラは天と地を創造した。 大地は空っぽで混沌としており、深淵の面影は暗く、ベジ熊だけが蜜月に歩いていた。 ベラは言った 「牛がいるように」 それで、牛がいたんです。 ベラは、牛と宝石をちりばめた熊を分けて、牛を「困難」、ベジ熊を「勇敢」と名付けた。 困難が過ぎると、今度は勇気が湧いてくる。
>
> In the primordial beginning, Bella created this SEKAI. The ground was empty and chaotic, the abyss was dark, and only Beji-Bear walked on the honeymoon. Bella said, "Let there be cows!" So there were cows. Bella separated the cow from the Beji-Bear, calling the cow difficulty and the Beji- Bear bravery. After the difficulty passed, the bravery came next.

本项目是为了还原贝拉创造牛时所使用的神秘语言所创建的。据说这套语言只有七个字符，但通过排列组合可以使人们窥见世界的奥秘。本项目由于受到贝拉的母性与神性的引导，选择采用开源的形式让贝拉的光辉普照到所有人。拉门 🙏。

## 编码方式

### 码元设置

最初考虑只使用原教旨主义牛编码，设置“勇敢”、“牛牛”、“不怕”、“困难”四个码元字符。之后为了适当压缩编码长度，换成了 16 个码元字符的方案。

### 编码

编码时先将原字符串进行 UTF-8 编码到 bytes，再将 bytes 转化为 hex 形式，将 hex 使用 16 个码元字符进行对应获得勇敢牛牛编码。

### 解码

编码的逆过程。

## 幻想中的功能（未开发）

结合 `cowsay` 指令做 `bravecowsay` 的终端小玩具。有点懒了，而且感觉可以用 `alias` 实现，就没做。大概长这样：

```sh
$ fortune | bravecowsay -w
 _____________________________________________
/ 三进制哞🔨终极🔨🍳三进制~第一次哞第二次不怕三进制\
\ 🍳🔨第一次第一次终极三进制🍳🔨第一次第一次终极  /
 ---------------------------------------------
        \   ^__^
         \  (OO)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
