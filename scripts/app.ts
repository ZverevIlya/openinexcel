export var staticQueryIds = { "A2108D31-086C-4FB0-AFDA-097E4CC46DF4": true, "B7A26A56-EA87-4C97-A504-3F028808BB9F": true, "202230E0-821E-401D-96D1-24A7202330D0": true, "53FB153F-C52C-42F1-90B6-CA17FC3561A8": true, "2CBF5136-1AE5-4948-B59A-36F526D9AC73": true, "08E20883-D56C-4461-88EB-CE77C0C7936D": true, "2650C586-0DE4-4156-BA0E-14BCFB664CCA": true};

export function checkForStaticQuery(qid: string) {
    if (staticQueryIds[qid.toUpperCase()]) {
        return true;
    }
    else {
        return false;
    }
} 

export function createUri(action: string, cn: string, proj: string, qid?: string, wids?: string, columns?: string) {
    var uri = "tfs://ExcelRequirements/"+action+"?cn="+cn+"&proj="+proj;

    if (action == "OpenItems") {
        uri = uri+"&wid="+wids+"&columns="+columns;
    } 
    else {
        uri = uri+"&qid="+qid;
    }

    if (uri.length > 2000) {
        return null;
    }
    else {
        return uri;
    }
}


export interface IQueryObject {
    id: string;
    columns?: string;
}

export interface IQueryContributionContext {
    query?: IQueryObject;
    queryText: string;
    workItemIds: number[];
}

var openQueryAction =  {
    getMenuItems: (context) =>  {
        var qid = context["query"]["id"];
        if (checkForStaticQuery(qid)) {
            return null;
        }
        else {
            return [<IContributedMenuItem>{
                title: "Requires latest Visual Studio",
                text: "Open in Excel",
                icon: "img/miniexcellogo.png",
                action: (actionContext: IQueryContributionContext) => { 
                    
                    var qid = actionContext["query"]["id"];

                    var context = VSS.getWebContext();
                    var collectionUri = context.collection.uri;
                    var projectName = context.project.name;

                    var uri = createUri("OpenQuery", collectionUri, projectName, qid);
                    if (uri) {
                        window.location.href = uri;
                    }
                    else {
                        alert("The requested URL exceeds your browser's URL length limit.");
                    }
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
            action: (actionContext: IQueryContributionContext) => { 
                var wids = actionContext["query"]["id"];
                var columns = actionContext["query"]["columns"];

                var context = VSS.getWebContext();
                var collectionUri = context.collection.uri;
                var projectName = context.project.name;

                var uri = createUri("OpenItems", collectionUri, projectName, null, wids, columns);
                if (uri) {
                    window.location.href = uri;
                }
                else {
                    alert("You might've selected too many fields and/or work items. Try exporting a query instead.");
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
            action: (actionContext: IQueryContributionContext) => {
                var qid;
                if (actionContext.query) {
                    qid = actionContext.query.id;
                }
                else {
                    qid = null; 
                }
                var context = VSS.getWebContext();
                var collectionUri = context.collection.uri;
                var projectName = context.project.name;

                var uri = createUri("OpenQuery", collectionUri, projectName, qid);
                if (uri) {
                    window.location.href = uri;
                }
                else {
                    alert("The requested URL exceeds your browser's URL length limit.");
                }
            }
        }];
    }
}

// Register context menu action provider
VSS.register("openQueryAction", openQueryAction);
VSS.register("openWorkItemsAction", openWorkItemsAction);
VSS.register("openQueryOnToolbarAction", openQueryOnToolbarAction);

