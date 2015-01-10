var body_html = document.getElementsByTagName('body').item(0).innerHTML;
var start_point = body_html.search('song_records');
tmp_html = body_html.substring(start_point+15);
var end_point = tmp_html.search('}],');
var song_records_str = tmp_html.substring(0, end_point+2);
song_records = eval(song_records_str);
var html = '';
for(i=0;i<song_records.length;i++){
    html+= "<a target='_blank' href="+song_records[i].rawUrl+">"+song_records[i].name+"</a><br>"
};
document.getElementsByTagName('body').item(0).innerHTML = html;
