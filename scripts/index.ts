import * as App from "./app";

// Register context menu action provider
VSS.register("openQueryAction", App.openQueryAction);
VSS.register("openWorkItemsAction", App.openWorkItemsAction);
VSS.register("openQueryOnToolbarAction", App.openQueryOnToolbarAction);