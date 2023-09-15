import { JSONEditor } from '/lib/index.js'

let content = {
    text: undefined,
    json: {
        array: [1, 2, 3],
        boolean: true,
        color: '#82b92c',
        null: null,
        number: 123,
        object: { a: 'b', c: 'd' },
        time: 1575599819000,
        string: 'Foo Bar',
        json: "{\n    a: 1,\n    b: 2,\n    c: 3\n}"
    },
}

const editorLeft = new JSONEditor({
    target: document.getElementById('left'),
    props: {
        content,
        mode: 'text',
        askToFormat: false,
        onChange: (updatedContent) => {
            editorRight.set(updatedContent)
        },
    },
})
const editorRight = new JSONEditor({
    target: document.getElementById('right'),
    props: {
        content,
        mode: 'tree',
        navigationBar: false,
        onChange: (updatedContent) => {
            editorLeft.set(updatedContent)
        },
    },
})

// Avoid flicker
document.getElementById('switch').style.display = 'inline-block'

// Get toggle element and add click event
const $mode = document.getElementById('mode')
$mode.onclick = (event) => {
    const mode = event.target.checked ? 'light' : 'dark'
    toggleMode(mode)
    localStorage.setItem('mode', mode);
};

// Handle local storage
const currentMode = localStorage.getItem('mode') || 'dark'
if (currentMode === 'dark') {
    if ($mode.checked) {
        $mode.checked = false
        toggleMode(mode)
    }
} else {
    $mode.checked = true
    toggleMode(mode)
}

function toggleMode(mode) {
    if (mode === 'dark') {
        if (!document.className) {
            document.body.classList.add('jse-theme-dark')
        }
    } else {
        document.body.classList.remove('jse-theme-dark')
    }
}
