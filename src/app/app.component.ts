import { Component } from "@angular/core";
import { TreeViewComponent } from "./components/tree-view/tree-view.component";
import { TreeNode } from "./components/models/tree-node.model";
import payload from "./payload.json";

@Component({
  selector: "app-root",
  imports: [TreeViewComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  //for real use in a medium-sized project
  treeNodes: TreeNode[] = payload;
}
