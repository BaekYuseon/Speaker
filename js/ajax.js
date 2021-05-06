$('.login_button').click(function() {
    $.ajax({
    url:"../js/MOCK_DATA.json",
    dataType:"json",
    success:function(data){
        if (data['result'] == 'false'){
            alert('로그인 실패');
        } else if (data['result'] == 'success'){
            alert('로그인 성공');
            $("#login_content").html(data[id] + "님 환영합니다.");
            location.reload("../index.html");
        }
    }, error : function() {
            alert('로그인 정보가 올바르지 않습니다.')
        }
    });
});

// $('.login_button').click(function() {
//     $.ajax({
//     url:"../js/MOCK_DATA.json",
//     dataType:"json",
//     success:function(data){
//         alert('로그인 성공');
//         location.reload();
//         }, error : function() {
//             alert('로그인 정보가 올바르지 않습니다.')
//         }
//     });
// });