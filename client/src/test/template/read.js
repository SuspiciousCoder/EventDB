function readEvent(id) {

    e = globalStorage['event-list'][id]
    console.log(e)
    $("#title1").text(e.title1)
    $("#title2").text(e.title2)
    $("#time").text(e.time)
    $("#description").text(e.description)
}

readEvent(globalStorage['current-id'])

console.log($('.delete'))
$('.delete').click(function(){
  deleteEvent(globalStorage['event-list'][id])
  navigate('home')
})
