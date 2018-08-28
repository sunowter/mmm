
$(function(){
$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getcategorytitle',
  dataType:'json',
  success:function(info){
    // console.log(info)
    var htmlStr=template('listTpl',info)
    $('.list').html(htmlStr)
    // 点击每一个a,发送ajax
    $('.category-list').on('click','.listName',function(){
      var titleid=$(this).data('id')
      var $that=$(this)
      $.ajax({
          type:'get',
          url:'http://127.0.0.1:9090/api/getcategory',
          data:{
            titleid:titleid,
          },
          dataType:'json',
          success:function(info){
          console.log(info)
          var htmlStr=template('itemTpl',info)
          $that.next().html(htmlStr)
          $that.next().slideToggle()
          

          }

        


      })
   
    })
    
  }
})




})