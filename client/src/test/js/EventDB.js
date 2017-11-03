var ServerUrl = 'http://localhost:5000/event'


function parseList (res, status) {
    var list = {}

    res['_items'].forEach(function(element) {
        event = {id: element['_id'],
                 description: element['description'],
                 time: element['time'],
                 title1: element['title1'],
                 title2: element['title2']}
       list[event.id] = event
    }, this);

    return list
}

function getList (callback) {
    $.ajax(ServerUrl, { dataType: "json",
                        success: function (res, status) {
                                    list = parseList(res, status)
                                    callback(list)
                                  }
    })
}


function putEvent(data) {
    $.ajax(ServerUrl, {
        type: "post",
        data: data,
        contentType : "application/json",
        headers : {'Authorization': 'Basic Zm9vOmJhcg=='}
    })
}
