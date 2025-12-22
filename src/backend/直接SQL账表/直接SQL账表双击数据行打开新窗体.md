<<<<<<< HEAD
# 直接SQL账表双击数据行打开新窗体

```1
public classOpenListByRowDoubleClickFormPiugIn:AbstractDynamicFormlugIn
{
    public override void EntityRowClick(EntityRowClickEventArgs e)
    {
        base.EntityRowClick(e);
        var view = this.View as SQLReportView;
        if(view == null )
        {
            return;
        }
        //判断只有在双击单据编号时，才打开该单号对应的采购订单
        if(e.ColKey.Equals("单据编号",StringComparison.OrdinalIgnoreCase))
        {
            //版本PT-146850[7.5.1.202008]前用此方法
            //var currentRowValue = GetCurrentRowValue(view,"单据编号");
            //版本PT-146850[7.5.1.202008]后用此方法
            var currentRowValue = view.GetCurrentRowValue("单据编号");
            if(currentRowValue == null)
            { 
                return; 
            }
            var billNo = currentRowValue.ToString();
            //使用单据视图打开
            ShowBillForm(billNo);
        }
    }
}
```

```1
    ///<summary>
    ///使用单据视图打开
    /// </summary>
    /// <param name="billNo">单据编号</param>
    private void ShowBillForm(string billNo)
    {
        var sql = string.Format("SELECT FID FROM T_PUR_POORDER WHERE FBILLNO='{0}'", billNo);
        var pkId = DBServiceHelper.ExecuteScalar<long>(this.Context, sql,0);
        if(pkId <= 0)
        {
            return ;
        }
        var param = new BillShowParameter();
        param.FormId = "PUR_PurchaseOrder";//业务对象标识
        param.PKey = pkId.ToString();//单据内码
        param.Status = OperationStatus.VIEW;//查看模式打开
        this.View.ShowForm(param);
    }
 ```

``` 1
    ///<summary>
    ///获取当前选中行指定列的数据
    /// </summary>
    /// <param name="view"></param>
    /// <param name="columnName"></param>
    /// <returns></returns>
    private object GetCurrentRowValue(IDynamicFormView view,string columnName)
    {
        //修改GetValue为GetCurrentRowValue
        var currentPageData = GetCurrentRowValue(view,"currentPageData")as DataTable;
        if(currentPageData == null)
        {
            return null; 
        }
        if(!currentPageData.Columns.Contains(columnName))
        {
            return null; 
        }
        if(view.OpenParameter.GetCustomParameter("FLIST_selectedRows")==null)
        {
            return null; 
        }
        var curRow = view.OpenParameter.GetCustomParameter("FLIST_selectedRows").ToString();
        //反射获取当前账表数据包
        var rows = currentPageData.Select(string.Format("{0}={1}","FIDENTITYID",curRow));
        if(rows.Length > 0)
        {
            return rows[0][columnName];
        }
        return null;
    }
```

``` 1
    ///<summary>
    ///反射获取当前视图的某个值
    /// </summary>
    /// <param name="ogj"></param>
    /// <param name="propertyName"></param>
    /// <retuerns></retuerns>
    private object GetValue(object obj,string propertyName)
    {
        var fieId = typeof(SQLReportView).GetField(propertyName,BindingFlags.NonPublic|BindingFlags.Instance);
        if(fieId != null)
        {
            return fieId.GetValue(obj); 
        }
        return null;
    }

```
=======
# 直接SQL账表双击数据行打开新窗体

    ```public class OpenListByRowDoubleClickFormPiugIn:AbstractDynamicFormPlugIn
    {
        public override void EntityRowClick(EntityRowClickEventArgs e)
        {
            base.EntityRowClick(e);
            var view = this.View as SQLReportView;
            if(view == null )
            {
                return;
            }

            //判断只有在双击单据编号时，才打开该单号对应的采购订单
            if(e.ColKey.Equals("单据编号",StringComparison.OrdinalIgnoreCase))
            {
                //版本PT-146850[7.5.1.202008]前用此方法
                //var currentRowValue = GetCurrentRowValue(view,"单据编号");
                //版本PT-146850[7.5.1.202008]后用此方法
                var currentRowValue = view.GetCurrentRowValue("单据编号");
                if(currentRowValue == null)
                { 
                    return; 
                }

                var billNo = currentRowValue.ToString();
                //使用单据视图打开
                ShowBillForm(billNo);

            }
        }

        ///<summary>
        ///使用单据视图打开
        /// </summary>
        /// <param name="billNo">单据编号</param>
        private void ShowBillForm(string billNo)
        {
            var sql = string.Format("SELECT FID FROM T_PUR_POORDER WHERE FBILLNO='{0}'", billNo);
            var pkId = DBServiceHelper.ExecuteScalar<long>(this.Context, sql,0);
            if(pkId <= 0)
            {
                return ;
            }

            var param = new BillShowParameter();
            param.FormId = "PUR_PurchaseOrder";//业务对象标识
            param.PKey = pkId.ToString();//单据内码
            param.Status = OperationStatus.VIEW;//查看模式打开
            this.View.ShowForm(param);
        }

        ///<summary>
        ///获取当前选中行指定列的数据
        /// </summary>
        /// <param name="view"></param>
        /// <param name="columnName"></param>
        /// <returns></returns>
        private object GetCurrentRowValue(IDynamicFormView view,string columnName)
        {
            //修改GetValue为GetCurrentRowValue
            var currentPageData = GetCurrentRowValue(view,"currentPageData")as DataTable;
            if(currentPageData == null)
            {
                return null; 
            }

            if(!currentPageData.Columns.Contains(columnName))
            {
                return null; 
            }

            if(view.OpenParameter.GetCustomParameter("FLIST_selectedRows")==null)
            {
                return null; 
            }

            var curRow = view.OpenParameter.GetCustomParameter("FLIST_selectedRows").ToString();
            //反射获取当前账表数据包
            var rows = currentPageData.Select(string.Format("{0}={1}","FIDENTITYID",curRow));
            if(rows.Length > 0)
            {
                return rows[0][columnName];
            }
            return null;
        }

        ///<summary>
        ///反射获取当前视图的某个值
        /// </summary>
        /// <param name="ogj"></param>
        /// <param name="propertyName"></param>
        /// <retuerns></retuerns>
        private object GetValue(object obj,string propertyName)
        {
            var fieId = typeof(SQLReportView).GetField(propertyName,BindingFlags.NonPublic|BindingFlags.Instance);
            if(fieId != null)
            {
                return fieId.GetValue(obj); 
            }

            return null;
        }

    }
    ```
    
>>>>>>> 7743361759f96bacfd22c86fcea90a36fcdac05f
