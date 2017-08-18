$(document).ready(function(e) {
    
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

function uiucPage(){
    window.open('https://cs.illinois.edu/', '_blank');
}

function imsaPage(){
    window.open('http://www.imsa.edu', '_blank');
}

function researchPage(){
    window.open('http://www.pac-lab.org/', '_blank');
}

function roboticsPage(){
    window.open('https://www.facebook.com/TitanRobotics2022/', '_blank');
}

