$(function () {
    // check LocalStorage
    if (localStorage.getItem('todoList') != null) {
        $('.list').html(localStorage.getItem('todoList'))
        countTasks()
        countRemains()

    } else {
        //count task & remains
        countTasks()
        countRemains()
    }
    //count task
    countTasks()
    countRemains()
    //add task

    $('footer').on('click', '#add', function () {
        if ($('#input-task').val().length > 0) {

            $task = '<article> \
                <input type="checkbox"> \
                    <p> '+ $('#input-task').val() + '</p> \
                    <button>&times;</button> \
            </article>'
            $('section.list').append($task)
            $('#input-task').val('')
            countTasks()
            countRemains()
        } else {
            alert('Please! Enter a Task')
        }
    })
    //toggle task (remain/done)

    $('body').on('click', 'input[type=checkbox]', function () {
        //if checked
        if ($(this).prop('checked')) {
            $(this).attr('checked', true)
            $(this).parent().addClass('checked', true)
        } else {
            $(this).attr('checked', false)
            $(this).parent().removeClass('checked')
        }
        countRemains()
    })
    // remove task

    $('body').on('click', 'article button', function () {
        $(this).closest('article').remove()
        countTasks()
        countRemains()

    })
    //clear all task
    $('body').on('click', '#clear', function () {
        $('.list').html('')
        countTasks();
        countRemains();
    })

})



//countTask

function countTasks() {
    $('.num-tasks').text($('article').length)
    $('.title-tasks').text($('article').length > 1 ? 'tasks' : 'task')
}

//count remains

function countRemains() {
    $remain = Math.abs($('.checked').length - $('article').length)
    $('.num-remains').text($remain)
    $('.title-remains').text($remain > 1 ? 'Remains' : 'Remain')
    // set localStorage
    localStorage.setItem('todoList', $('.list').html())
} 