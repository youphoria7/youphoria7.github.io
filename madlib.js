class Madlib {
    constructor (start, text, input, submit, restart, grammar) {
      this.start = start;
      this.text = text;
      this.input = input;
      this.submit = submit;
      this.restart = restart;
      this.grammar = grammar;
      this.sentenceComplete = false;
      this.type = ["date", "time", "location"];
      this.words = [];
  
      this._text = this._text.bind(this);
      this._changeType = this._changeType.bind(this);
      this._renderTo = this._renderTo.bind(this);
      this._restart = this._restart.bind(this);
      this.submit.addEventListener("click", this._changeType);
      this.restart.addEventListener("click", this._restart);
    }
  
    _text() {
      this.grammar.innerHTML = this.type[this.start];
    }
  
    _changeType() {
      if (!this.sentenceComplete === true) {
        if (this.start === 3) {
          this.words[this.start] = this.input.value;
          console.log(this.grammar);
          this.grammar.textContent = "complete";
          this._renderTo();
          this.sentenceComplete = true;
          this.start = 0;
        } else {
          this.words[this.start] = this.input.value;
          this._text();
          this.start++;
          this.input.value = "";
        }
      }
    }
  
    _renderTo() {
        this.text.innerHTML = '"'+ ' You are expected to '+ this.words[0] + ' on '+ this.words[1] +' at '+ this.words[2] +' at ' +this.words[3] +'."'
      }

  _restart() {
    this.text.innerHTML = '"You are expected to attend _______ on _______ at ___ at _______."'
    this.start = 0;
    this.sentenceComplete = false;
    console.log(this.grammar);
    this.grammar.textContent =  "noun";
    this.words = [];
  }
}
