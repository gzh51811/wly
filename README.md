## **项目名称：**

后台管理系统

## 项目组员：

杨凯彬 & 杨尚彬 & 王林燕（组长）

### 技术栈
* nodejs + Koa + mongoDB + jQuery + ES6 + layui + bootstrap

### 项目分工
* 杨凯彬
    * 商品管理
        * 分类列表：商品分类数据渲染、删除分类
        * 添加分类：添加商品分类数据
        * 编辑分类：渲染当前分类数据、添加商品分类数据
        * 订单管理
        * 订单列表：订单数据渲染，删除订单功能，修改订单状态功能
* 王林燕
    * 页面布局
         后台页面html、公共css、js
    * 商品管理
        * 商品列表：商品库数据渲染，删除商品功能，修改商品上、下架状态功能，分页、排序功能
        * 添加商品：渲染商品分类、非空验证、上传图片、添加数据库
        * 编辑商品：渲染当前商品、渲染分类、修改图片、添加数据库
    * mongodb数据库
          商品数据、分类数据
* 杨尚彬
    * 登录页（验证用户名，验证码，免登录（localStorage，session））
    * 用户管理
        * 用户列表：数据渲染，删除、多行删除，编辑，分页
        * 添加用户：正则验证，添加到数据库
        * 个人信息（编辑用户）：根据需求（传入用户名、跳转）获取相应用户名渲染数据，修改用户信息
    * 用户权限
        * 管理员：可以操作管理所有功能
        * 普通用户：可以对商品和订单进行操作，没有权限访问用户列表和添加用户
    * mongodb数据库
        用户数据、订单数据

### 演示地址
* http://47.98.140.212:1811/

* 管理员用户   
    * 账号： 王大力  密码： 123   
* 普通用户
    * 账号： 王7   密码：123

### 项目布局
```js
  |-- BSM
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- server.js
    |-- api
    |   |-- classifiedItemForm.json
    |   |-- goodslist.json
    |   |-- orderForm.json
    |   |-- user.json
    |   |-- db
    |   |   |-- index.js
    |   |-- routers
    |       |-- goodsAdd.js
    |       |-- goodslist.js
    |       |-- index.js
    |       |-- listEdit.js
    |       |-- listitem.js
    |       |-- login.js
    |       |-- orderForm.js
    |       |-- upload.js
    |       |-- userlist_login.js
    |-- assert
    |   |-- fonts
    |   |-- layui
    |   |-- lib
    |       |-- default.css
    |       |-- jquery-1.10.1.min.js
    |       |-- normalize.css
    |       |-- prefixfree.min.js
    |       |-- styles.css
    |-- css
    |   |-- base.css
    |   |-- base.css.map
    |   |-- common.css
    |   |-- common.css.map
    |   |-- goodsAdd.css
    |   |-- goodsAdd.css.map
    |   |-- goodslist.css
    |   |-- goodslist.css.map
    |   |-- reg.css
    |   |-- user_add.css
    |-- html
    |   |-- goodsAdd.html
    |   |-- goodslist.html
    |   |-- listEdit.html
    |   |-- listitem.html
    |   |-- modifygood.html
    |   |-- order_form.html
    |   |-- template.html
    |   |-- test.html
    |   |-- userAdd.html
    |   |-- useradd_bianji.html
    |   |-- userlist.html
    |-- js
    |   |-- cookie.js
    |   |-- goodsAdd.js
    |   |-- goodslist.js
    |   |-- listEdit.js
    |   |-- listitem.js
    |   |-- order_form.js
    |   |-- useradd.js
    |   |-- useradd_bianji.js
    |   |-- user_list.js
    |-- uploads
        |-- downarrow.png
        |-- help.png

```
