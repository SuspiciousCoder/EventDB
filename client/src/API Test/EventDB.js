var ServerUrl = 'http://localhost:5000/event'


function parseList (res, status) {
    var list = []

    res['_items'].forEach(function(element) {
        event = {id: element['_id'],
                 description: element['description'],
                 title: element['title']}
       list.push(event)
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
