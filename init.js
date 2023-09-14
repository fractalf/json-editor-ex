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
