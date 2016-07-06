
var openQueryAction =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Open in Excel",
            action: (actionContext) => { 

            	//From actionContext, get the query ID selected
                var qid = actionContext["query"]["id"];

                //From web context, get collectionUri and projectName
                var context = VSS.getWebContext();
                var collectionUri = context["collection"]["uri"];
                var projectName = context["project"]["name"];

                window.location.href="tfs://ExcelRequirements/OpenItems?cn="+collectionUri+"&proj="+projectName+"&qid="+qid;
            }
        }];
    }
};

var openWorkItemsAction =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Open in Excel",
            action: (actionContext) => { 
				var wids = actionContext.ids;
                var wiql = actionContext["query"]["wiql"];

				alert("Selected: "+wids+" and "+wiql);

                //From web context, get collectionUri and projectName
                var context = VSS.getWebContext();
                var collectionUri = context["collection"]["uri"];
                var projectName = context["project"]["name"];

                //window.location.href="tfs://ExcelRequirements/OpenItems?cn="+collectionUri+"&proj="+projectName+"&qid="+qid;
            }
        }];
    }
};



// Register context menu action provider
VSS.register("openQueryAction", openQueryAction);
VSS.register("openWorkItemsAction", openWorkItemsAction);
