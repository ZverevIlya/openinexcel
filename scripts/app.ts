var openQueryAction =  {
    getMenuItems: (context) => {
    	var qid = context["query"]["id"];
    	var uQid = qid.toUpperCase();

    	var staticQueryIds = { "A2108D31-086C-4FB0-AFDA-097E4CC46DF4": true, "B7A26A56-EA87-4C97-A504-3F028808BB9F": true, "202230E0-821E-401D-96D1-24A7202330D0": true, "53FB153F-C52C-42F1-90B6-CA17FC3561A8": true, "2CBF5136-1AE5-4948-B59A-36F526D9AC73": true, "08E20883-D56C-4461-88EB-CE77C0C7936D": true, "2650C586-0DE4-4156-BA0E-14BCFB664CCA": true};

    	if (staticQueryIds[uQid]) {
    		return null; 
    	}
    	else {
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
                var n = uri.length;
                if (n > 2000) {
                	alert("You've selected too many fields and/or Work Items. Try exporting the Work Item Query instead.")
                } 
                else {
                	window.location.href= uri;
                }
            }
        }];
    }
};


// Register context menu action provider
VSS.register("openQueryAction", openQueryAction);
VSS.register("openWorkItemsAction", openWorkItemsAction);
