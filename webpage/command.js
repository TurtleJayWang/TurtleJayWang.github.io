function process(command)
{
    var commands = command.split()
    if (commands[0] == "open") 
        if (commands.length != 2) 
            return "<p>Syntax error, to many argument</p>";
        else return "<img src=\"" + commands[1] + "\">"; 
    else if (commands[0] == "log")
        {
            var str = "";
            for (var i = 1; i < commands.length; i++) str += commands[i];
            return "<p>" + str + "</p>"; 
        }
    else return "<p>No command!</p>";
}

function run(command)
{
    var command = document.getElementsByClassName("blackEdit");
    const output = document.getElementsByClassName("output");
    var outputHTML = "<br>";
    outputHTML += process(command);
    output.item().innerHTML += outputHTML;
}
