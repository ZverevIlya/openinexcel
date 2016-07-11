
var openQueryAction =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Requires DEV15",
        	text: "Open in Excel",
            action: (actionContext) => { 

            	//From actionContext, get the query ID selected
                var qid = actionContext["query"]["id"];

                if (qid == "a2108d31-086c-4fb0-afda-097e4cc46df4") {
                	alert("Only custom queries can be exported to Excel. To export this query, save this as a new query.");
                }

                else {
	                //From web context, get collectionUri and projectName
	                var context = VSS.getWebContext();
	                var collectionUri = context["collection"]["uri"];
	                var projectName = context["project"]["name"];

	                var uri = "tfs://ExcelRequirements/OpenQuery?cn="+collectionUri+"&proj="+projectName+"&qid="+qid;
	                window.location.href= uri;
                }
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
                var columns = actionContext["columns"];

                //From web context, get collectionUri and projectName
                var context = VSS.getWebContext();
                var collectionUri = context["collection"]["uri"];
                var projectName = context["project"]["name"];

                var uri = "tfs://ExcelRequirements/OpenSelections?cn="+collectionUri+"&proj="+projectName+"&wids="+wids+"&columns="+columns;
                window.location.href= uri;
            }
        }];
    }
};


// Register context menu action provider
VSS.register("openQueryAction", openQueryAction);
VSS.register("openWorkItemsAction", openWorkItemsAction);
