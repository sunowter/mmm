$(function(){
  var id=getsearch('couponId')
  console.log(id)
  var arr=[];//全局声明一个变量
  var imgStr='';
  var index=0
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
     //遍历arr把arr里的图片定位在一起，点击下一页的时候index+1，点击上一页的时候index-1
     var resultArr=info.result
     resultArr.forEach(function(v,i){
     arr.push(v.couponProductImg)
     })
     //点击箭头显示模态框
     $('.content ul').on('click','.arrow-right',function(){
      $('.out').show()
      // 动态获取图片添加到small里面
      index=$(this).data('index')
      // console.log(index)
      var str= info.result[index].couponProductImg
      str+= '<div class="close"></div><div class="prev">上一页</div> <div class="next">下一页</div>'
      // console.log(str)
      $('.small').append(str)
    
     })

     //给下一页的按钮注册点击事件

     $('.small').on('click','.next', function(){
         index++  
      if(index>=arr.length){
        index=0
      }
      str= arr[index]
      str+= '<div class="close"></div> <div class="prev">上一页</div> <div class="next">下一页</div>'
      $('.small').append(str)
     
    
    })

    // 点击上一页切换图片
    $('.small').on('click','.prev', function(){
 
       $('.small').empty('img')
       
          index--
          if(index<=0){
            index=arr.length-1
          }
       str= arr[index]
       str+= '<div class="close"></div> <div class="prev">上一页</div> <div class="next">下一页</div>'
       $('.small').append(str)
       console.log(index)
      
     
     })

    }
      

  })

   //点击关闭，关闭模态框
   $('.small').on('click','.close', function(){
    $('.out').hide()
    $('.small').empty('img')
    
  })
})