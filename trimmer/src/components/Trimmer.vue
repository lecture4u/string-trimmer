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
                <h3>Here's the result</h3>
                <div>
                    <button id="submit" type="button" v-clipboard:copy="trimmedText" v-clipboard:success="this.onCopy" v-clipboard:error="this.onError">COPY</button>
                    <p id="status">
                        {{copyStatus}}
                    </p>
                </div>
                <div>
                    <textarea disabled name="resultText" id="resultText" cols="80" rows="30" v-model="trimmedText"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Trimmer',
        props: {
            msg: String
        },
        created() {

        },
        data() {
            return {
                rawText: "",
                trimmedText: "",
                copyStatus: ""
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
                this.trimmedText = await this.trim(this.rawText)
                this.$emit('click')
            },
            trim(toTrim) {
                return new Promise((resolve => {
                    let strToTrim = toTrim
                    resolve (strToTrim.replace(/\n|\r/gi, ' '))
                }))
            },
            onCopy(evt) {
                this.copyStatus = "< COPIED! >"
                setTimeout(() => {
                    this.copyStatus = ""
                }, 1500)
                this.rawText = ''
                this.trimmedText = ''
                return evt
            },
            onError(evt) {
                alert('Failed to copy texts' + evt)
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
        margin: 15px;
        font-size: 14px;
    }
</style>
