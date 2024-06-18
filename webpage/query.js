$(document).ready(function(){
    $("#black-edit").keypress(function(e) {
        console.log("Enter");
        var key = e.which;
        console.log(key);
        if (key == 13) {
            console.log(typeof $("#black-edit").val())
            run($("#black-edit").val());
            $("#black-edit").val("");
        }
    })
});