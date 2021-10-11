const left = document.getElementById('left')
const right = document.getElementById('right')

const optionsLeft = {
    mode: 'code',
    onChangeText: function (json) {
        if (json) {
            editorRight.setText(json)
        }
    },
    ajv: JSONEditor.Ajv({
        allErrors: true,
        verbose: true,
        jsonPointers: false,
        $data: true
    })
}
const optionsRight = {
    mode: 'tree',
    onChangeJSON: function (json) {
        editorLeft.set(json)
    },
}

const initialJson = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { 'a': 'b', 'c': 'd' },
    String: 'Hello World'
}

const editorLeft = new JSONEditor(left, optionsLeft, initialJson)
const editorRight = new JSONEditor(right, optionsRight, initialJson)

editorLeft.errorTable.errorTableVisible = true