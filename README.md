# hendo-cli

cli for hendo

## 名称

我想找3个字母且有意义的名字，能想到的基本上被注册了。

借鉴利物浦队长Jordan Henderson的名字起了这个名字,这人天赋不足但很勤奋。如果太长了再酌情考虑替换。

## 安装

npm install -g hendo-cli

## 操作与指令

### 1. 创建一个新的名为myapp的hendo app
```bash
hendo new myapp
```

```xml
<Text x="50" y="500" align="center" alignV="center" color="#ffffff" size="48" text="hello,world!" alpha="255*0.8" visibility="1" />
<Image x="0" y="0" w="512" h="512" align="center" alignV="center" src="lock_bg.jpg" alpha="255*0.8" visibility="1" />
```

```
hendo n myapp
```
### 2. 在当前文件夹下（要求该文件夹为空）初始化一个新的hendo app
```
hendo init
```
```
hendo i
```
### 3. 当前路径在hendo app的根目录下，添加一个名为hello的组件,组件被添加到/src/components/路径下，一个组件单独成一个文件夹。
```
hendo generate component hello
```
```
hendo g component hello
```
其中，generate component 有三个选项，分别是
- -v: (默认选项) vue的格式的组件
- -c: js+css+vue的组件
- -l: js+css+less的组件

### 4. 当前路径在hendo app的根目录下，添加一个名为hello的路由页，路由页被添加到/src/routers/路径下，一个路由页单独成一个文件夹。
```
hendo generate router hello
```
```
hendo g router hello
```
其中，generate router 有三个选项，分别是
- -v: (默认选项) vue的格式的路由页
- -c: js+css+vue的路由页
- -l: js+css+less的路由页

### 5. 当前路径在hendo app的根目录下，添加一个名为hello.js的模型，模型被添加到/src/models/路径下，一个模型单独成一个文件夹。
```
hendo generate model hello
```
```
hendo g model hello
```

### 6. 当前路径在hendo app的根目录下，添加一个名为hello.js的mock源，模型被添加到/src/mocks/路径下，一个mock源单独成一个文件夹。
```
hendo generate mock hello
```
```
hendo g mock hello
```


没了～

enjoy！
