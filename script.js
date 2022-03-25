document.addEventListener('DOMContentLoaded',(Event)=>
{
    let burger = document.getElementById('burger')
    let ulpt = document.getElementById('menupetit')
    ulpt.style.display= 'none'

    burger.addEventListener('click', function showHide()
    {
        if(ulpt.style.display == 'none')
        {
            ulpt.style.display = 'flex'
        }
        else
        {
            ulpt.style.display = 'none'
        }
    })
    ulpt.addEventListener('click', function hide()
    {
        ulpt.style.display= 'none'

    })
})