function createDataset(fields, constraints, sortFields) {

    var filtro = constraints[0].getInitialValue();

    myQuery = "exec FLUIG_CONSULTA_PRESTACAOCONTASEVENTO '"+filtro+"';";
    log.info("ds_despesaseventosrm: " + myQuery);

    var created = false;
    var newDataset = DatasetBuilder.newDataset();
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup("/jdbc/SQLSIEG");
    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
                for (var i = 1; i <= columnCount; i++) {
                    newDataset.addColumn(rs.getMetaData().getColumnName(i));
                }
                created = true;
            }
            var Arr = new Array();
            for (var i = 1; i <= columnCount; i++) {
                var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                if (null != obj) {
                    Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                } else {
                    Arr[i - 1] = "null";
                }
            }
            newDataset.addRow(Arr);
        }
    } catch (e) {
        log.error("=======================ERRO=======================");
        log.error(e.message);
    } 
    return newDataset;
}