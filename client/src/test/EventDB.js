var event = {list: [],
             db : {server: 'http://localhost:5000/event'}
           }

function appendListItem(html) {
    $("#event-list").append(html)
}

function HtmlPreview(event) {
    event_id = "'" + event.id + "'"
    html  = '<li id="' + event.id + '">'
    html += '<a href="#" onclick="show_event(' + event_id + ')">' + event.description + '</a></li>'
    return html
}

function show_event(id) {
    event = event.list.find(function(i) {return i.id === id})

    $('#event-title').text(event.title)
    $('#event-description').text(event.description)
}

function syncList() {

}

function gotList (res, status) {
    console.log(res)

    res['_items'].forEach(function(element) {
        elm = {id: element['_id'],
                 description: element['description'],
                 title1: element['title1']}
        event.list.push(elm)
        appendListItem(HtmlPreview(elm))
    }, this);

    syncList()

    console.log(event.list)
}

function getList () {
    $.ajax(event.db.server, {dataType: "json",
                          success: gotList})
}

function dbg(jqXHR, status){
  console.log(jqXhr)
  alert(status)
}

function putEvent (formEvent) {
  var e = {}
  e.title1 = $("#title-1").val()
  e.title2 = $("#title-2").val()
  e.time = $("#time").val()
  e.description = $("#description").val()

  json = JSON.stringify(e)
  alert(json)
  alert(event.db.server)

  $.ajax({
  method: "POST",
  customType: 'application/json',
  data: json,
  headers: {
     'Authorization': 'Basic ' + btoa('myuser:mypswd'),
  },
   url: event.db.server
});


  formEvent.preventDefault()
}
