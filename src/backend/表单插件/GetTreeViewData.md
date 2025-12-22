<<<<<<< HEAD
# 表单插件：GetTreeViewData

应用场景：

1. 对树形控件的节点数据进行删除
2. 彻底改写树形控件的节点数据

`GetTreeViewData` 获取树视图数据

 ```1
 //新增树形控件，通过插件生成自定义节点数据
 private int nodeId = 999999;//私有字段
 //返回一个列表给树形控件
 public override List<TreeNode> GetTreeViewData(TreeNodeArgs e)
 {
     if(e.NodeId == "0")
     {
         //根节点
         //TODO
     }
     
     var nodes = new List<TreeNode>();//新建一个列表存住所有数据
     
     var node = new TreeNode();//新变量（类型为：TreeNode）
     node.id = nodeId++.ToString();
     node.Number = "测试节点"+ nodeId;
     node.Name = "测试节点"+ nodeId;
     node.text = "测试节点"+ nodeId;
     node.parentid = e.NodeId;//子节点
     node.cls = "parentnode";//是一个父节点，可以有子节点
     node.children = null;//子节点列表为空
     nodes.Add(node);//把node的数据加到nodes列表
     node = new TreeNode();
     node.id = nodeId++.ToString();
     node.Number = "测试节点" + nodeId;
     node.Name = "测试节点" +nodeId;
     node.text = "测试节点" +nodeId;
     node.parentid = e.NodeId;
     node.cls = "parentnode";
     node.children = null;
     nodes.Add(node);
     return nodes;
 }
 ```
=======
# 表单插件：GetTreeViewData

应用场景：

1. 对树形控件的节点数据进行删除
2. 彻底改写树形控件的节点数据

`GetTreeViewData` 获取树视图数据

 ```//新增树形控件，通过插件生成自定义节点数据
 private int nodeId = 999999;//私有字段
 //返回一个列表给树形控件
 public override List<TreeNode> GetTreeViewData(TreeNodeArgs e)
 {
     if(e.NodeId == "0")
     {
         //根节点
         //TODO
     }
     
     var nodes = new List<TreeNode>();//新建一个列表存住所有数据
     
     var node = new TreeNode();//新变量（类型为：TreeNode）
     node.id = nodeId++.ToString();
     node.Number = "测试节点"+ nodeId;
     node.Name = "测试节点"+ nodeId;
     node.text = "测试节点"+ nodeId;
     node.parentid = e.NodeId;//子节点
     node.cls = "parentnode";//是一个父节点，可以有子节点
     node.children = null;//子节点列表为空
     nodes.Add(node);//把node的数据加到nodes列表
     node = new TreeNode();
     node.id = nodeId++.ToString();
     node.Number = "测试节点" + nodeId;
     node.Name = "测试节点" +nodeId;
     node.text = "测试节点" +nodeId;
     node.parentid = e.NodeId;
     node.cls = "parentnode";
     node.children = null;
     nodes.Add(node);
     return nodes;
 }
 ```
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
