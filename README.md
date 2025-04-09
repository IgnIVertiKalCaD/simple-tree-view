# RU
# 🌳 Компонент дерева на Angular

Реализован в рамках технического задания для **MillionAgents**.

Рекурсивный компонент **Tree View** на **Angular 19** с использованием standalone-компонентов и современной синтаксис-логики (`@if`, `@for`).

### ✅ Возможности
- Рекурсивный вывод узлов дерева
- SVG-стрелки для раскрытия и сворачивания
- Серый цвет для удалённых узлов (`is_deleted = true`)
- Автоматическое закрытие всех вложенных раскрытых элементов
- Чистая архитектура с локальными компонентами для иконок

### ⚙️ Технологии
- Angular 19
- Standalone компоненты
- `Set<number>` для отслеживания состояния
- Без рекурсивного стека — используется итеративная логика

### 📥 Использование
Передайте массив `TreeNode[]` в компонент:

```html
<app-tree-view [nodes]="yourData"></app-tree-view>
```

---

# EN
# 🌳 Angular Tree View Component

Developed as part of a technical assignment for **MillionAgents**.

This is a recursive **Tree View** component built with **Angular 19** using standalone components and modern control flow syntax (`@if`, `@for`).

### ✅ Features
- Recursive rendering of nested tree nodes
- SVG arrows for expand/collapse
- Gray text for deleted nodes (`is_deleted = true`)
- Auto-collapse of all expanded child nodes
- Clean architecture with local icon components

### 📦 Tech
- Angular 19
- Standalone components
- `Set<number>` for expansion state
- No recursion stack — uses iterative logic

### 🧩 Usage
Pass `TreeNode[]` to `<app-tree-view [nodes]="yourData">`.

```html
<app-tree-view [nodes]="yourData"></app-tree-view>
```
