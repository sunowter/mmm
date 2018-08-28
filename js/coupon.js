//发送ajax渲染页面
$.ajax({
  data:'get',
  url:'http://127.0.0.1:9090/api/getcoupon',
  dataType:'json',
  success:function(info){
    console.log(info)
    var htmlStr=template('listTpl',info)
    $('.content ul').html(htmlStr)
  }






})