var events = {list: [],
              server: 'http://localhost:5000/event'}

function appendListItem(html) {
    $("#event-list").append(html)
}

function HtmlPreview(event) {
    event_id = "'" + event.id + "'"
    html  = '<li id="' + event.id + '">'
    html += '<a href="#" onclick="show_event(' + event_id + ')">' + event.title + '</a></li>'
    return html
}

function show_event(id) {
    event = events.list.find(function(i) {return i.id === id})

    $('#event-title').text(event.title)
    $('#event-description').text(event.description)
}

function syncList() {

}

function gotList (res, status) {
    console.log(res)

    res['_items'].forEach(function(element) {
        event = {id: element['_id'],
                 description: element['description'],
                 title: element['title']}
        events.list.push(event)

        appendListItem(HtmlPreview(event))
    }, this);

    syncList()

    console.log(events.list)
}

function getList () {
    $.ajax(events.server, {dataType: "json",
                                           success: gotList})
}
