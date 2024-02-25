function logKeyEvent(eventName, event) {
    appendTableRow(`<tr class='x'>
        <td class='time'>${timeField()}</td>
        <td class='eventname ${eventName}'>${eventName}</td>
        <td class='code'>'${event.code}'</td>
        <td class='key'>'${event.key}'</td>
        <td class='alt boolean-${event.altKey}'>${event.altKey}</td>
        <td class='ctrl boolean-${event.ctrlKey}'>${event.ctrlKey}</td>
        <td class='meta boolean-${event.metaKey}'>${event.metaKey}</td>
        <td class='shift boolean-${event.shiftKey}'>${event.shiftKey}</td>
        <td class='repeat boolean-${event.repeat}'>${event.repeat}</td>
        <td class='location location-${event.location}'>${event.location}</td>
    </tr>`)
}

function logFocusEvent(eventName, event) {
    appendTableRow(`<tr>
        <td class='time'>${timeField()}</td>
        <td class='eventname ${eventName}'>${eventName}</td>    
    </tr>`)
}

function appendTableRow(tableRow) {
    var tbody = document.querySelector("#keyboardEventTable tbody")
    var template = document.createElement('template')
    template.innerHTML = tableRow
    tbody.prepend(template.content)
    limitChildren(tbody, 50)
}

function limitChildren(elem, limit) {
    while (elem.childElementCount > limit) {
        elem.lastChild.remove()
    }
}

function timeField() {
    return new Date().toLocaleTimeString()
}
