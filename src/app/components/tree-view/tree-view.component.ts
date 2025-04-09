import { Component, Input } from "@angular/core";
import { TreeNode } from "../models/tree-node.model";

@Component({
  selector: "tree-view-arrow-up-icon",
  styles: ":host { display: flex; svg {width: 16px}} ",
  standalone: true,
  template: `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20V4M12 4L6 10M12 4L18 10"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
})
export class ArrowUpIconComponent {}

@Component({
  selector: "tree-view-arrow-down-icon",
  styles: ":host { display: flex; svg {width: 16px}} ",
  standalone: true,
  template: `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4V20M12 20L18 14M12 20L6 14"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
})
export class ArrowDownIconComponent {}

@Component({
  selector: "app-tree-view",
  imports: [ArrowUpIconComponent, ArrowDownIconComponent],
  standalone: true,
  templateUrl: "./tree-view.component.html",
  styleUrl: "./tree-view.component.scss",
})
export class TreeViewComponent {
  @Input()
  nodes: TreeNode[] = [];

  expandedNodes = new Set<number>();

  isDisclosed(children: TreeNode["children"]): boolean {
    return children.length > 0;
  }

  isExpanded(nodeId: number): boolean {
    return this.expandedNodes.has(nodeId);
  }

  private collapseVisibleNodes(node: TreeNode): void {
    if (!this.expandedNodes.has(node.id)) {
      console.log(`Skip collapse for ${node.id} — not expanded`);
      return;
    }

    const stack: TreeNode[] = [node];

    while (stack.length > 0) {
      const node = stack.pop()!;

      if (this.expandedNodes.has(node.id)) {
        this.expandedNodes.delete(node.id);
        console.log(`Removing node ${node.id} from expandedNodes`);

        for (const child of node.children) {
          stack.push(child);
        }
      }
    }
  }

  onClickNode(node: TreeNode) {
    if (node.is_deleted || !node.children.length) return;

    if (!this.expandedNodes.has(node.id)) {
      this.expandedNodes.add(node.id);
      console.log(`Expand ${node.id}`);
    } else {
      this.collapseVisibleNodes(node);
      console.log(`Collapse ${node.id} and visible children`);
    }
  }
}
