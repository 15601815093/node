/**
 * Created by admin_gw on 2017/6/5.
 */
var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'
function filterChapters(html){
    var $ = cheerio.load(html)
    var chapters = $('.learncahpter')
    //[{
    //    chapterTitle:"",
    //    videos:[
    //        title:'',
    //    id:''
    //    ]
    //}]
    var courseData = []
    chapters.each(function(item){
        var chapter = $(this)
        var chaterTitle = chapter.find('strong').text()
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle:chaterTitle,
            videos:[]
        }
        videos = $(this).find('.studyvideo')
        var videoTitle = video.text()
        var id = video.attr('href').split('video/')[1]
        chapterData.videos.push({
            title:videoTitle,
            id:id
        })
        courseData.push(chapterData)

    })
    return courseData
}
function  printCourseInfo(chapterData){
    chapterData.forEach(function(item){
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle + '\n')
        item.videos.forEach(function(video){
            console.log('【' + video.id + '】' + video.title + '\n')
        })
    })
}
http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html += data
    })
    res.on('end',function(){
       var chapterData = filterChapters(html)
        printCourseInfo(chapterData)
    })
}).on('error',function(){
    console.log('wrong')
})