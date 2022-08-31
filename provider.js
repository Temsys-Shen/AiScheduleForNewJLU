function scheduleHtmlProvider(dom = document) {
    const mytable = dom.getElementsByClassName("wut_table").item(0)
    var data = [];
    for(var i=0,rows=mytable.rows.length; i<rows; i++){
        for(var j=0,cells=mytable.rows[i].cells.length; j<cells; j++){
            if(!data[i]){
                data[i] = new Array();
            }
            data[i][j] = mytable.rows[i].cells[j].innerHTML;
        }
    }
    return JSON.stringify(data);
}