function HtmlPreview(event) {
    html  = '<li>'
    html += '<a href="#" onclick=HtmlViewer("' + event.id  + '")>' + event.title1 + '</a></li>'
    return html
}

//TODO: delete old events when re-Load
function PreviewList(list) {
  $('#event-list').empty()
    for (i in list) {
        $("#event-list").append(HtmlPreview(list[i]))
    }

    globalStorage['event-list'] = list
}

function HtmlViewer(id) {
    //dyn-ui
    globalStorage['current-id'] = id
    navigate('read')
}

getList(PreviewList)
if (globalStorage['current-id'] != undefined) delete globalStorage['current-id']
