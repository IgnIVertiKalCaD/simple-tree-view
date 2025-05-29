# Angular Tree View Component

This component was developed as part of a technical assignment for **MillionAgents**.

---

### Overview

The **Tree View** component is built with **Angular 19**, utilizing standalone components and modern control flow syntax (`@if`, `@for`). It provides recursive rendering of data nodes.

---

### Features

* **Recursive Node Rendering:** Efficiently renders nested data structures.
* **Expansion Control:** SVG arrows enable intuitive node expansion and collapse.
* **Deleted Node Visualization:** Gray text is applied to nodes with `is_deleted = true` status.
* **Automatic Collapse:** When a parent node is collapsed, all its expanded child nodes automatically close.
* **Modular Architecture:** Clean code organization with local components for icons.

---

### Technologies

* **Angular 19:** Leverages the latest framework version.
* **Standalone Components:** Enhances modularity.
* **`Set<number>`:** Efficiently tracks expansion state.
* **Iterative Logic:** Avoids a recursive stack.

---

### Usage

Pass a `TreeNode[]` array to the component:

```html
<app-tree-view [nodes]="yourData"></app-tree-view>
