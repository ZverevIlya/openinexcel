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