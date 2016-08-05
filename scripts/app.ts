import { Parsers } from "./sharedMethods";

var openQueryAction =  {
    getMenuItems: (context) => {
        var qid = context["query"]["id"];
        
        let parsers = new Parsers();
        if (parsers.checkForStaticQuery(qid)) {
            return null;
        }
        else {
            return [<IContributedMenuItem>{
                title: "Requires latest Visual Studio",
                text: "Open in Excel",
                icon: "img/miniexcellogo.png",
                action: (actionContext) => { 
                    
                    var qid = actionContext["query"]["id"];

                    var context = VSS.getWebContext();
                    var collectionUri = context["collection"]["uri"];
                    var projectName = context["project"]["name"];

                    var uri = "tfs://ExcelRequirements/OpenQuery?cn="+collectionUri+"&proj="+projectName+"&qid="+qid;
                    window.location.href= uri;
                }
            }];
        }
    }
}

var openWorkItemsAction =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Requires latest Visual Studio",
            text: "Open in Excel",
            icon: "img/miniexcellogo.png",
            action: (actionContext) => { 
                var wids = actionContext.ids;
                var columns = actionContext["columns"];

                var context = VSS.getWebContext();
                var collectionUri = context["collection"]["uri"];
                var projectName = context["project"]["name"];

                var uri = "tfs://ExcelRequirements/OpenItems?cn="+collectionUri+"&proj="+projectName+"&wid="+wids+"&columns="+columns;
                if (uri.length > 2000) {
                    alert("You've selected too many fields and/or Work Items. Try exporting the Work Item Query instead.")
                } 
                else {
                    window.location.href= uri;
                }
            }
        }];
    }
}

var openQueryOnToolbarAction = {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            text: "Open in Excel",
            showText: true,
            icon: "img/miniexcellogo.png",
            action: (actionContext) => {
                var qid = actionContext["query"]["id"];
                alert(JSON.stringify(actionContext));
                var context = VSS.getWebContext();
                var collectionUri = context["collection"]["uri"];
                var projectName = context["project"]["name"];

                var uri = "tfs://ExcelRequirements/OpenQuery?cn="+collectionUri+"&proj="+projectName+"&qid="+qid;

                window.location.href= uri;
            }
        }];
    }
}

// Register context menu action provider
VSS.register("openQueryAction", openQueryAction);
VSS.register("openWorkItemsAction", openWorkItemsAction);
VSS.register("openQueryOnToolbarAction", openQueryOnToolbarAction);

