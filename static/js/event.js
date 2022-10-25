
$(function() {
  
 var html = "";
 var article_count = 0;
 var html_array = [];
 var eid_list = [];
 var html_list = {};
 var before_eid_list = [];
 var after_eid_list = [];
 var kengaku_codes  = [
  "C0002",
  "C0005",
  "C0016",
  "C0022",
  "C0023",
  "C0026",
  "C0027",
  "C0031",
  "C0045",
  "C0054",
  "C0069",
  "C0070",
  "C0073",
  "C0074",
  "C0075",
  "C0077",
  "C0078"
];

 $.ajax({
   "type" : "GET",
   "url": "https://www.sekisuihouse.co.jp/event/cgi/api/eventlist.php?siten=364003&hits=100&entrydate=1",
   "dataType" : 'jsonp',
   "success" : function(data){
     for(i in data){
       if(i > 99) break;
       eid_list.push(data[i].event_id) ;
       html_list[data[i].event_id] = "";
       $.ajax({
         "type" : "GET",
         "url": "https://www.sekisuihouse.co.jp/event/cgi/api/eventdetail.php?id="+data[i].event_id,
         "dataType" : 'jsonp',
         "success" : function(d_data){console.log(d_data);
          if($.inArray(d_data.event.category.code,kengaku_codes) > -1){
            before_eid_list.push(d_data.event.event_id);
          }
           var _img = d_data.event.campaign.img !=  "" ? d_data.event.campaign.img : d_data.event.image.img;
           if(_img === ""){
            _img = d_data.event.kaijo.img;
           }
           
           html = '        <table class="eventTables">\
          <tbody>\
            <tr>\
              <th class="title">'+d_data.event.e_title+'</th>\
              <td class="lead" rowspan="3">\
                <p class="text"><img src="https://www.sekisuihouse.co.jp/event/'+_img+'" alt=""></p>\
                <div class="commonBtn02 color04"><a href="https://www.sekisuihouse.co.jp/event/detail.php?id='+d_data.event.event_id+'" target="_blank">イベントの詳細を見る</a></div>\
              </td>\
            </tr>\
            <tr class="date">\
              <td>'+d_data.event.kikan.d_s+'〜'+d_data.event.kikan.d_e+'</td>\
            </tr>\
            <tr>\
              <td class="place">会場／　'+d_data.event.genba.pref_n+d_data.event.genba.addr1+d_data.event.genba.addr2+d_data.event.genba.name+'</td>\
            </tr>\
          </tbody>\
        </table>';
           article_count++;
           html_list[d_data.event.event_id] = html;

           /*var num = new Date(d_data.event.kikan.d_s.slice(0,-3)).getTime();// * 1;
           html_array.push([{"date":num,"html":html}]);*/
           if(article_count == 100 || data.length == article_count){
             /*html_array.sort(function(a,b){
               if(a[0].date > b[0].date) return -1;
               if(a[0].date < b[0].date) return 1;
               return 0;
             });
             for(v in html_array){
               $(".sections.event .inner").append(html_array[v][0]["html"]);
             }*/
             for(h in eid_list){
              if($.inArray(eid_list[h],before_eid_list) > -1){
                $(".sections.event .inner").append(html_list[eid_list[h]]);
              }
             }
             for(h2 in eid_list){
              if($.inArray(eid_list[h2],before_eid_list) == -1){
                $(".sections.event .inner").append(html_list[eid_list[h2]]);
              }
             }
           }

         }

       });
     }
   }
 });
});
