const open = require("./node_modules/open")

const {method , parameters } =  JSON.parse(process.argv[2]);

// handleing the query method

if(method === "query") {
    console.log(JSON.stringify(
        {
            "result" : [{
                "Title":"User's Call To Action",
                "Subtitle":"Shows user's query parameters: " + parameters + ". Click to open Flow's website" ,
                "JsonRPCAction": {
                    "method":"do_something_for_query",
                    "parameters": ["https://github.com/Atharvwasthere"]
                },
                "IcoPath": "assets\\icon.png"
            }]
        }
    ))
}

// Handeling the click events

if(method === "do_someting_for_query") {
    url = parameter[0];
    do_something_fro_query(url);
}

//Opening the url in browser

function do_something_fro_query(url) {
    open(url);
}


const sdwsd = require("Flow.Launcher.Plugin.CompetitiveSearch\assets\icon.png")