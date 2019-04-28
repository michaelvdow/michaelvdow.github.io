$(document).ready(function(e) {
    
    $("#aboutMeButton").on('click', function(e){
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $("#AboutMe").offset().top
        }, 500, function(){
        });
        $('.nav li').removeClass('active');
        $('#homeTab').addClass('active');
    });
    
    $("#homeTab").on('click', function(e){
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $("#Home").offset().top - 50
        }, 500, function(){
        });
        $('.nav li').removeClass('active');
        $('#homeTab').addClass('active');
    });
    
    $("#aboutMeTab").on('click', function(e){
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $("#AboutMe").offset().top - 50
        }, 500, function(){
        });
        $('.nav li').removeClass('active');
        $('#aboutMeTab').addClass('active');
    });
    
    $("#projectsTab").on('click', function(e){
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $("#Projects").offset().top - 50
        }, 500, function(){
        });
        $('.nav li').removeClass('active');
        $('#projectsTab').addClass('active');
    });
    
    $("#resumeTab").on('click', function(e){
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $("#Resume").offset().top - 50
        }, 500, function(){
        });
        $('.nav li').removeClass('active');
        $('#resumeTab').addClass('active');
    });
    
    $("#contactTab").on('click', function(e){
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top - 50
        }, 500, function(){
        });
        $('.nav li').removeClass('active');
        $('#contactTab').addClass('active');
    });
    
    
    
});


function scrollTo(divName){
    $('html,body').animate({
        scrollTop: $(divName).offset().top
    }, 'slow');
}

function googlePlayPage(){
    window.open('https://play.google.com/store/apps/details?id=com.apps.michaeldow.cutransitcompanion&hl=en', '_blank');
}

function researchPaperPage(){
    window.open('/img/researchPaper.pdf', '_blank');
}

function researchCodePage(){
    window.open('https://github.com/michaelvdow/RepetitionCounting', '_blank');
}

function roboticsCodePage(){
    window.open('https://github.com/titan2022', '_blank');
}