// ID of the Google Spreadsheet
const spreadsheetID = "1nTVVCNTPO6bj9pjBcMHdV5dRLSBClIrCENyQduwOu1w";
 
// Make sure it is public or set to Anyone with link can view 
const url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

// make JSON call to Google Data API
$.getJSON(url, function(data) {
    // set global html variable
    let html = '';

    // build table headings
    html += '<table class="table table-striped">';
    html += '<thead class="thead-dark">'
    html += '<tr>';
    html += '<th scope="col">Nom</th>';
    html += '<th scope="col">Description</th>';
    html += '<th scope="col">Lien</th>';
    html += '<th scope="col">Auteur</th>';
    html += '<th scope="col">Licence</th>';
    html += '</tr>'
    html += '</thead>';
    html += '<tbody>';
    

    // loop to build html output for each row
    var entry = data.feed.entry;

    for (var i = 0; i < entry.length; i++) {
        html += '<tr>';
        html += '<td>' + entry[i]['gsx$nom']['$t'] + '</td>';
        html += '<td>' + entry[i]['gsx$description']['$t'] + '</td>';
        html += '<td><a href="' + entry[i]['gsx$lien']['$t'] + '">' + entry[i]['gsx$lien']['$t'].toLowerCase() + '</a></td>';
        html += '<td>' + entry[i]['gsx$auteur']['$t'] + '</td>';
        html += '<td>' + entry[i]['gsx$licence']['$t'] + '</td>'; 
        html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';

    // output html
    $('#modules').html(html);
});
