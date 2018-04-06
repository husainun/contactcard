$(document).ready(function(){
    $('form').submit(function(){
        var first=$('#fname').val();
        var last = " " + $('#lname').val();
        var description = $("textarea").val();      
        var html_str =`
            <div class='contact_card'>
                <h1> ${first}${last} </h1>
                <p class="back"> ${description} </p>
                <p id="here"> click for description </p>
                
            </div> `   ;   
            console.log(html_str);
        $('body').append(html_str);
        $(document).on("click",".contact_card",function () {
            $(this).children().toggle();
        });
        return false;
        });   
    });
