
function init() {
    return new Promise((resolve, reject) => {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' }});
        require(['vs/editor/editor.main'], function() {
            window.editor = monaco.editor.create(document.getElementById('editor-container'), {
                value: "# h1\n" + 
                    "## h2 \n" +
                "test test test ",
                language: 'markdown'
            });
            resolve(window.editor);
        });
    })
};


function clickHandler() {

    preview = document.getElementById('preview-container');
    actionBtns = document.querySelectorAll('#actionBtn');

    document.querySelectorAll('#actionBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const actionType = btn.getAttribute('data-action');

            switch (actionType) {
                case 'preview':
                case 'html':
                    markdownFetch(actionType);
                    break;
                case 'download':
                    downloadFetch();
                    break;
            }
        });
        
    });
}


function markdownFetch(actionType) {
    const value = window.editor.getValue();

    fetch('MarkdownToHtml.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: value })
    })
        .then(response => response.text())
        .then(html => {
            const preview = document.getElementById('preview-container');
            if (actionType == 'preview') {
                preview.innerHTML = html;
            } else {
                monaco.editor.colorize(html, 'html').then(html => {
                    preview.innerHTML = html;

                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}

function downloadFetch() {
    const value = preview.innerHTML;

    fetch('download.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "htmlContent=" + encodeURIComponent(value)

    })
        .then(responce => responce.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.html';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(err => console.log(err));
}


function main() {
    init().then(editor => {
        clickHandler();
    })

}

main();

