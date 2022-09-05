
$(function() {
  
 var html = "";
 var article_count = 0;
 var html_array = [];
 var eid_list = [];
 var html_list = {};
 $.ajax({
   "type" : "GET",
   "url": "https://www.sekisuihouse.co.jp/event/cgi/api/eventlist.php?siten=364003&hits=100&entrydate=1",
   "dataType" : 'jsonp',
   "success" : function(data){console.log(data);
     for(i in data){
       if(i > 99) break;
       eid_list.push(data[i].event_id) ;
       html_list[data[i].event_id] = "";
       console.log(eid_list);
       $.ajax({
         "type" : "GET",
         "url": "https://www.sekisuihouse.co.jp/event/cgi/api/eventdetail.php?id="+data[i].event_id,
         "dataType" : 'jsonp',
         "success" : function(d_data){
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
              $(".sections.event .inner").append(html_list[eid_list[h]]);
             }
           }

         }

       });
     }
   }
 });
});
