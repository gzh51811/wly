$(function(){
    //发送ajax请求查询数据
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {

        if (xhr.status == 200) {
            let res = JSON.parse(xhr.responseText);
            var arr = res.map(function (item) {
                return ` <tr data-index="0" class="cr">    
                                                    <td data-field="1" data-key="8-0-1" class="layui-table-col-special">
                                                        <div class="layui-table-cell laytable-cell-8-0-1 laytable-cell-checkbox">
                                                            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
                                                            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
                                                                <i class="layui-icon layui-icon-ok"></i>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td data-field="city" data-key="8-0-4" class="yonghu">${item.username}</td>
                                                    <td data-field="id" data-key="8-0-2" class="">
                                                        <div class="layui-table-cell laytable-cell-8-0-2 ">${item.sex}</div>
                                                    </td>
                                                    <td data-field="username" data-key="8-0-3" class="">
                                                        <div class="layui-table-cell laytable-cell-8-0-3 _chengshi">${item.address}</div>
                                                    </td>                                                                            
                                                    <td data-field="wealth" data-key="8-0-5" data-minwidth="120" class="qianming">
                                                        <div class="layui-table-cell laytable-cell-8-0-5">${item.signature}</div>
                                                    </td>
                                                    <td data-field="sex" data-key="8-0-6" class="zhiye">
                                                        <div class="layui-table-cell laytable-cell-8-0-6">
                                                            <input type="checkbox" name="sex" lay-skin="switch" lay-filter="test-table-sexDemo" class="zhiye">
                                                            <span>${item.profession}</span>
                                                        </div>
                                                    </td>
                                                    <td data-field="lock" data-key="8-0-7" data-content="" class="pingfen">
                                                        <div class="layui-table-cell laytable-cell-8-0-7">
                                                            <input type="checkbox" name="lock" title="评分" lay-filter="test-table-lockDemo">
                                                                <span>${item.grade}</span>
                                                        </div>
                                                    </td>
                                                    <td data-field="lock" data-key="8-0-7" data-content="" class="_data">
                                                        <div class="layui-table-cell laytable-cell-8-0-7">
                                                            <input type="checkbox" name="lock"  lay-filter="test-table-lockDemo">
                                                            <span>${item.regdata}</span>
                                                        </div>
                                                    </td>
                                                    <td data-field="10" data-key="1-0-10" align="center" data-off="true" class="layui-table-col-special">
                                                        <div class="layui-table-cell laytable-cell-1-0-10">
                                                            <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                                                            <a class="layui-btn layui-btn-danger layui-btn-xs dl" lay-event="del">删除</a>
                                                        </div>
                                                    </td>
                                                </tr>`;
            }).join('');

            $('#tbd').html(arr);

            //删除功能
            $('.dl').on('click',function(){
                var dl =  confirm('您真的不要我么？');
                //得到用户名
                var x = $(this).parent().parent().parent().children('.yonghu').html();
               if(dl){
                    // 发送ajax请求
                   let xhr = new XMLHttpRequest();
                   xhr.onload = () => {
                       if (xhr.status == 200) {
                           let fanhui = JSON.parse(xhr.responseText);
                           console.log(fanhui);
                       }
                   }
                   xhr.open('get', '/userlist_login?username='+x, true);
                   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                   xhr.send();


               }
            });

           

        }
    }
    xhr.open('post', '/userlist_login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    let data = 'oa=0';
    xhr.send(data);


    
});