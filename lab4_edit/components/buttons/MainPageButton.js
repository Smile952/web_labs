export class MainPageButton{
    constructor(parent, id){
        this.parent = parent
        this.id = id
    }

    getHTML(){
        return (`<button type="button" class="btn btn-primary" id="${this.id}" style="position: absolute; bottom: 5px;">Press me daddy</button>`)
    }

    addListeners(listener) {
        document
            .getElementById(this.id)
            .addEventListener("click", listener)
    }

    render(listener){
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}