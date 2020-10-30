$(function(){
    $("#send").on('click',function(e){
            e.preventDefault();
            sendMessage($("#message").val())
    });
});

function sendMessage(message){
    socket.emit('send_message', message);
}