var action =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Open in Excel",
            action: (actionContext) => {
                let queryId = actionContext.id
            }
        }];
    }
};

// Register context menu action provider
VSS.register("vanvanvania.vsts-open-work-items-in-excel.vsts-open-work-items-in-excel-simple-action", action);
VSS.register("vsts-open-work-items-in-excel-simple-action", action);