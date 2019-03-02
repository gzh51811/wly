$(function(){

layui.use('table', function(){
  var table = layui.table;

    //监听表格复选框选择
    table.on('checkbox(demo)', function (obj) {
        // console.log(obj.data);
        var dels = [];
        dels.push(obj.data.username);
        console.log(dels);
    });
   
    //监听工具条
    table.on('tool(demo)', function (obj) {
        var data = obj.data;
        if (obj.event === 'detail') {
            layer.msg('ID：' + data.username + ' 的查看操作');
        } else if (obj.event === 'del') {

            layer.confirm('真的删除行么', function (index) {
                obj.del();
                layer.close(index);

                    // 发送ajax请求
                    //删除功能
                   let xhr = new XMLHttpRequest();
                   xhr.onload = () => {
                       if (xhr.status == 200) {
                           let fanhui = JSON.parse(xhr.responseText);
                           console.log(fanhui);
                       }
                   }
                xhr.open('post', '/userlist_login', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                var datas = 'username=' + data.username;
                xhr.send(datas);

           
               
            });
        } else if (obj.event === 'edit') {
            layer.alert('编辑行：<br>' + JSON.stringify(data))

        }
    }); 

    //页面渲染，自动layui自带js代码生成表格
  table.render({
      elem: '.layui-table'
      , width: 892,
      height: 332,
      url: '/userlist_login',
      id: 'idTest',
    cols: [[
        { type: 'checkbox', width: 80,}
      ,{field:'username', width:80, title: '用户名'}
      ,{field:'sex', width:80, title: '性别', sort: true}
      ,{field:'address', width:80, title: '城市'}
        , { field: 'signature', title: '签名', width: 80, }
      ,{field:'profession', width:80, title: '职业'}
      ,{field:'grade', width:80, title: '评分', sort: true}
      ,{field:'regdata', title: '注册日期',minwidth:100}
        ,{ fixed: "right", align: "center", width: 120, toolbar: "#barDemo" }
    ]]
    ,page: true
  });



    //**点击删除获取到所有被选中的用户名
    var $ = layui.$, active = {
        getCheckData: function () { //获取选中数据
            var checkStatus = table.checkStatus('idTest')
                , data = checkStatus.data;
            layer.alert(JSON.stringify(data));
        }
    };

    $('.layui-btn-group .layui-btn').on('click', function () {

        var type = $(this).data('type');
        var a1 =  active[type] ? active[type].call(this) : '';
    });



});




});