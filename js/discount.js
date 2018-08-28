$(function(){
  var id=getsearch('productid')
  console.log(id)
$.ajax({
 type:'get',
 url:'http://127.0.0.1:9090/api/getdiscountproduct',
 data:{
   productid:id,
 },
 dataType:'json',
 success:function(info){
  //  console.log(1)
console.log(info)
// console.log(2)
var htmlStr=template('productTpl',info)
// var listStr=template('areaTpl',info)
console.log(3)
var commentStr=template('commentTpl',info)
 $(".content").html(htmlStr)
//  $('.gotobuy .list').html(listStr)
 $('.comment').html(commentStr)
 }



})



})