<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            Paste copied text from pdf file here! This app will replace your text to newline-character-free
        </p>
        <h3>Paste your copied text below!</h3>
        <div id="container">
            <div id="trimBox">
                <div>
                    <input id="userInput" type="text" @paste="this.onPaste" v-model="rawText">
                </div>
                <h3>Here't the result</h3>
                <div>
                    <textarea name="resultText" id="resultText" cols="80" rows="30" v-model="trimmedText"></textarea>
                </div>
            </div>
            <div>
                <button id="submit" v-clipboard:copy="this.trimmedText" v-clipboard:success="onCopy" v-clipboard:error="onError">TRIM IT!</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        created() {

        },
        data() {
            return {
                rawText: "",
                trimmedText: ""
            }
        },
        methods: {
            async onPaste (evt) {
                let clipboardData, pastedData
                evt.stopPropagation()
                evt.preventDefault()
                clipboardData = evt.clipboardData
                pastedData = clipboardData.getData("Text")

                //assign and render
                this.rawText = pastedData
                this.trimmedText = await this.trim()
                alert(this.trimmedText.valueOf())
            },
            onCopy(evt) {
                alert("You just copied: " + evt.text)
            },
            onError(evt) {
                alert("failed to copy texts " + evt.text)
            },
            async trim() {
                let strToTrim = this.rawText
                return strToTrim.replace(/\n|\r/gi, ' ')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    #container {
        justify-content: flex-start;
    }

    #trimBox{
        display: flex;
        flex-direction: column;
    }

    #userInput {
        padding: 10px;
        margin: 15px;
        width: 500px;
        height: 100px;
        text-align: left;
        transition-duration: 0.4s;
        display: inline-flex;
        flex-wrap: nowrap;
    }

    #userInput:hover {
        background-color: darkcyan;
        color: white;
    }

    #resultText {
        display: inline-flex;
    }

    #submit {
        background-color: #2c3e50;
        color: white;
        padding: 15px;
        font-size: 14px;
    }
</style>
