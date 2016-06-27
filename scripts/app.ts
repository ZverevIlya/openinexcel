var myAction =  {
    getMenuItems: (context) => {
        return [<IContributedMenuItem>{
            title: "Open in Excel",
            action: (actionContext) => {
                let query = actionContext; 
                window.location.href="tfs://Requirements/CreateStoryboard?";
            }
        }];
    }
};

// Register context menu action provider
VSS.register("myAction", myAction);
