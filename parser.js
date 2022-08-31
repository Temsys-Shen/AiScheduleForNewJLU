function scheduleHtmlParser(html) {
    const data = JSON.parse(html);
    var result = [];
    var count = 0;

    for (var i = 1, rows = data.length; i < rows; i++) {
        for (var j = 1, cells = data[i].length; j < cells; j++) {
            if (data[i][j]) {
                const lessonInfo = $(data[i][j]).text().trim().split("       ");
                result[count] = new Map();
                currentMap = result[count]
                var line3 = lessonInfo[2].split(",");
                //----start----
                //解析课程名称
                currentMap["name"] = lessonInfo[0];
                //解析上课地点
                currentMap["position"] = line3[line3.length - 1];
                //解析教师名称
                currentMap["teacher"] = lessonInfo[1];
                //解析周数
                var weeks = line3[0].match(/([1-9]\d*)-([1-9]\d*)周/);
                currentMap["weeks"] = rangeToArray(weeks[1], weeks[2]);
                //解析星期
                currentMap["day"] = j;
                //解析节次
                var n = line3[2].match(/第([0-9]\d*)节(-)第([0-9]\d*)节/);
                currentMap["sections"] = rangeToArray(n[1], n[3]);
                //----end----
                count++;
            }
        }
    }
    return result;
}

function rangeToArray(from, to) {
    var result = new Array();
    var f = parseInt(from);
    var t = parseInt(to);
    for (var i = f; i <= t; i++) {
        result.push(i);
    }
    return result;
}