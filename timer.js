function scheduleTimer() {
    const mytable = document.getElementsByClassName("wut_table").item(0)
    var data = [];
    for (var i = 1, rows = mytable.rows.length; i < rows; i++) {
        var content = mytable.rows[i].cells[0].innerHTML;
        data.push(content.split("<br>")[1]);
    }

    var result = {
        totalWeek: 20, // 总周数：[1, 30]之间的整数
        startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: true, // 是否显示周末
        forenoon: 5, // 上午课程节数：[1, 10]之间的整数
        afternoon: 5, // 下午课程节数：[0, 10]之间的整数
        night: 3, // 晚间课程节数：[0, 10]之间的整数
        sections: [
            // {
            // section: 1, // 节次：[1, 30]之间的整数
            // startTime: '08:00', // 开始时间：参照这个标准格式5位长度字符串
            // endTime: '08:50', // 结束时间：同上
            // }
        ]
    }

    for (var i = 0; i < data.length; i++) {
        var currentSection = {};
        var lessonTime = data[i].split("-");
        currentSection["section"] = i + 1;
        currentSection["startTime"] = lessonTime[0];
        currentSection["endTime"] = lessonTime[1];
        result["sections"].push(currentSection);
    }

    return result;
}