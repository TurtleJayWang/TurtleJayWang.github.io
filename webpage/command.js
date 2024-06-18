function process(command)
{
    var commands = command.split(" ")
    if (commands[0] == "open") 
        if (commands.length != 2) 
            return "<span class=\"error\">Syntax error, to many argument</span>";
        else return "<img src=\"" + commands[1] + "\">"; 
        //"<div class=\"scroll-container\"><img src=\"" + commands[1] + "\"></div>"
    else if (commands[0] == "log")
    {
        var str = "";
        for (var i = 1; i < commands.length; i++) str += commands[i];
        return str;
    }
    else if (command[0] == "create")
    {

    }
    else return "<span class=\"error\">No command!</span>";
}

function run(command)
{
    var outputHTML = process(command);
    $("#out").append(outputHTML + "<br>[out] : ");
}

function scroll()
{
    $(".output").animate({ ScrollTop })
}
