/**
 * Created by chunjiedi on 15/7/9.
 */
function checkInput()
{
    var userName = document.getElementById( 'loginInputEmail' ).value;
    var password = document.getElementById( 'loginInputPassword').value;

    if( userName.length == 0 )
    {
        $('#myModal').on('show.bs.modal', function (e)
        {
            $(this).find('.modal-dialog').css
            ({
                'margin-top': function ()
                {
                    //var modalHeight = $('#myModal').find('.modal-dialog').height();
                    return ($(window).height() / 2 - 100);
                }
            });
        });

        $( '#myModal').modal( 'show' );
        return;
    }

    window.location.href = './view/start/sign_check.html';
}