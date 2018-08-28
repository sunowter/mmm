$(function(){
  // 根据分类id获取分类对应的前10品牌
  var id =getsearch('brandtitleid')
  console.log(id)
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrand',
    data:{
      brandtitleid:id,
    },
    dataType:'json',
    success:function(info){
    console.log(info)
    var  str=template('listTpl',info)
    $('.content .order').html(str)
     $('.content .order li:eq(0) span').css('backgroundColor','red')
     $('.content .order li:eq(1) span').css('backgroundColor','#FFA500')
     $('.content .order li:eq(2) span').css('backgroundColor','#ADFF2F')

    }
  })
  var productid=0;
  //获取销量
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    data:{
      brandtitleid:id,
      pagesize:4,
    },
    dataType:'json',
    success:function(info){
     console.log(info)
     var str=template('numTpl',info)
     $('.num').html(str)
     productid=info.result[0].productId
     console.log(productid)
    }


  })
 

  //获取评论
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getproductcom',
    data:{
      productid:productid
    },
    dataType:'json',
    success:function(info){
      console.log(info)
      var str=template('commentTpl',info)
      $('.comment').html(str)
    }
  })

})