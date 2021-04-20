$('#send-message').submit(function(event) {
    event.preventDefault();
    const username = $('#username-input').val();
    const message = $('#message-input').val();
    if ($('#username-input').val() === '') {
        alert('Please enter username!')
    } else if ($('#message-input').val() === '') {
        alert('Pleaase enter message!')
    } else {
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hour = d.getHours();
        const mins = d.getMinutes();
        const newTextBox = `
    <li>
        <div class="card bg-secondary text-light">
            <div class="card-header fs-6 text-dark">
                <span id="name" class="me-5">${username}</span>
                    <span id="date">${day}.${month}.${year} ${hour}:${mins}</span>
                </div>
            <div class="card-body m-0 fs-6">
                <div class="">
                    <p>${message}</p>
                </div>
            </div>
        </div>
    </li>`;

        $('#chat-window').prepend(newTextBox);

        $('#username-input').val('');
        $('#message-input').val('');
    }
});