$(function(){
  var id=getsearch('productId')

  //一进入入页面发送ajax请求，获取商品详情

$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getproduct',
  data:{
    productid:id
  },
  dataType:'json',
  success:function(info){
    // console.log(info)
    var htmlStr=template('productTpl',info)
    $('.productinfomtiom').html(htmlStr)
    //获取分类id和商品名称渲染面包屑
    var categoryid=info.result[0].categoryId
    var productName=info.result[0].productName.split(' ')[0]//获取商品名
    // 根据分类id发送ajax请求获取分类
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getcategorybyid',
      data:{
        categoryid:categoryid,
      },
        dataType:'json',
      success:function(info){
        // console.log(info)
        var category=info.result[0].category
        var obj={
          category:category,
          productName:productName    
        }
        var htmlStr=template('navTpl',obj)
        $('.nav').html(htmlStr)
        //  根据nav导航发送ajax请求，渲染商品详情
        
      }
    })
 }
})


//发送ajax渲染评论
$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getproductcom',
  data:{
    productid:id
  },
  dataType:'json',
  success:function(info){
    console.log(info)
    var htmlStr=template('itemTpl',info)
    $('.list').html(htmlStr)
  }


})







})