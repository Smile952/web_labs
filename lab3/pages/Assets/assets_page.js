import { BackButtonComponent } from "../../components/buttons/BackButton.js"
import { MainPageButton } from "../../components/buttons/MainPageButton.js"
import { MainPage } from "../main/main_page.js"
import { toast } from "../../components/toast/toast.js"
export class AssetsPage{
    constructor(parent, Data){
        this.parent=parent
        this.data = Data
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${this.data.src}" alt="картинка">
                    <div class="card-body" id="card-body-assets">
                        <h5 class="card-title">${this.data.title}</h5>
                        <p class="card-text">${this.data.text}</p>
                        <div id="assets"></div>
                    </div>
                </div>
            `
        )
    }

    clickBack(){
        const main_page = new MainPage(this.parent)
        main_page.render()
        document.getElementById("toast_block").innerHTML = ''
    }

    clickCard() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML("beforeend", html)
        this.render(true)
    }

    render(listener){
        if(!listener){
            const html = this.getHTML()
            this.parent.insertAdjacentHTML("beforeend", html)
            var button = new MainPageButton(document.getElementById("assets"), 2)
            button.render(this.clickCard.bind(this))
        }
        
        if(listener){
            var tst = new toast(document.getElementById("toast_block"), 2)
            const backButton = new BackButtonComponent(document.getElementById("assets"))
            backButton.render(this.clickBack.bind(this))
            tst.render()
        }
    }
}