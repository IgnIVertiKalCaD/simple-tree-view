export interface TreeNode {
  id: number;
  title: string;
  is_deleted: boolean;
  deleted_at?: any | null;
  children: TreeNode[];
}
