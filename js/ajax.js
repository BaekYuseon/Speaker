$('.login_button').click(function() {
    $.ajax({
    url:"MOCK_DATA.json",
    dataType:"json",
    success:function(data){
        alert('로그인 성공');
        location.reload();
        }, error : function() {
            alert('로그인 정보가 올바르지 않습니다.')
        }
    });
});