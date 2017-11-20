var ServerUrl = 'http://localhost:5000/event/'

function authorize(token) {
  var ret = $.ajax(ServerUrl, {
      type: "post",
      async: false,
      headers : {'Authorization': 'Basic ' + token}
  })

  console.log(ret)

  if (ret.status == 401) {
    return false
  }
  return true
}

function parseList (res, status) {
    var list = {}

    res['_items'].forEach(function(element) {
        event = {id: element['_id'],
                 description: element['description'],
                 time: element['time'],
                 title1: element['title1'],
                 title2: element['title2']}
       event['etag'] = element['_etag']
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

//create new item
function putEvent(e) {
  json = JSON.stringify(e)
  $.ajax(ServerUrl, {
      type: "post",
      data: json,
      async: false,
      contentType : "application/json",
      headers : {'Authorization': 'Basic Zm9vOmJhcg=='}
  })
}

//apply changes to an specific item
function updateEvent(e) {
  EventUrl = ServerUrl + globalStorage['current-id'];
  etag = e.etag;
  delete e.etag;
  json = JSON.stringify(e)

  $.ajax(EventUrl, {
      type: "patch",
      data: json,
      async: false,
      contentType : "application/json",
      headers : {'Authorization': 'Basic Zm9vOmJhcg==',
                 'If-Match' : etag}
  })
}

//apply changes to an specific item
function deleteEvent(e) {
  EventUrl = ServerUrl + globalStorage['current-id'];
  etag = e.etag;
  delete e.etag;

  $.ajax(EventUrl, {
      type: "delete",
      async: false,
      headers : {'Authorization': 'Basic Zm9vOmJhcg==',
                 'If-Match' : etag}
  })
}
