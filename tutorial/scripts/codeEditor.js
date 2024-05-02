// CODEMIRROR SCRIPT SO IT WORKS--------------------------------------------------------------------------------------------------------------------

var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  mode:  "javascript",
  theme: "darcula",
  smartIndent: true,
  tabSize: 2,
  lineNumbers: true,
  hintOptions: { completeSingle: false },
  autoCapitalize: true,
  indentUnit: 2,
  styleActiveLine: {nonEmpty: true}, // Add this line to style the active line
  lineWrapping: true,
  viewportMargin: 11,
  indentWithTabs: true,
  electricChars: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  showCursorWhenSelecting: true,
  foldGutter: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
})

editor.on("inputRead", function(editor, change) {
  if (change.origin !== "complete") {
    CodeMirror.commands.autocomplete(editor, null, { completeSingle: false })
  }
})

editor.getWrapperElement().style.backgroundColor = "#2c2c2c"

const codeEditor = () => {
  if (document.getElementById('editor2')) { // if editor2 exists within the page
    var editor2 = CodeMirror.fromTextArea(document.getElementById('editor2'), {
      mode:  "javascript",
      theme: "darcula",
      lineWrapping: true,
    })
  }

  if (document.getElementById('editor3')) { // if editor3 exists within the page
    var editor3 = CodeMirror.fromTextArea(document.getElementById('editor3'), {
      mode:  "javascript",
      theme: "darcula",
      lineWrapping: true,
    })
  }

  if (document.getElementById('editor4')) { // if editor2 exists within the page
    var editor4 = CodeMirror.fromTextArea(document.getElementById('editor4'), {
      mode:  "javascript",
      theme: "darcula",
      lineWrapping: true,
    })
  }

  if (document.getElementById('editor5')) { // if editor2 exists within the page
    var editor5 = CodeMirror.fromTextArea(document.getElementById('editor5'), {
      mode:  "javascript",
      theme: "darcula",
      lineWrapping: true,
    })
  }

  if (editor) {   // this makes sure the code editor is updated with the contents inside the textarea
      console.clear()    // clears the console first before displaying and running the script displayed on the code editor
      editor.setValue(consoleContent.value)
      updateScript()

      editor.focus()
      editor.setCursor({ line: 69, ch: 0 }) // Set the cursor to line 2
  }
}
codeEditor()
// -------------------------------------------------------------------------------------------------------------------------------------------------

