$(function(){
  var id=getsearch('couponId')
  console.log(id)
  var arr=[];//全局声明一个变量
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    data:{
      couponid:id,
    },
    dataType:'json',
    success:function(info){
    //  console.log(info)
     var str=template('listTpl',info)
     $('.content ul').html(str)

     //把渲染的结果里的图片存储到一个数组里 
     var resultArr=info.result
     resultArr.forEach(function(v,i){
     arr.push(v.couponProductImg)
     })
    console.log(arr)

     //点击箭头显示模态框
     $('.content ul').on('click','.arrow-right',function(){
      $('.out').show()
      // 动态获取图片添加到small里面
      var index=$(this).data('index')
      // console.log(index)
      var str= info.result[index].couponProductImg
      str+= '<div class="close"></div>'
      // console.log(str)
      $('.small').append(str)
      //点击关闭，关闭模态框
      $('.close').click(function(){
        $('.out').hide()
        $('.small').empty('img')
        
      })
      


     })
    }
      
    
    

  })


  //轮播图制作

})