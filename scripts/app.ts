var myAction =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Open in Excel",
            action: (actionContext) => {
                let query = actionContext; 
                
                alert(actionContext);
            }
        }];
    }
};

// Register context menu action provider
VSS.register("myAction", myAction);
