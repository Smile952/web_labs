/* import { MainPage } from "../main/main_page" */
import{MainPageButton} from "../../components/buttons/MainPageButton.js"

export class HumanCard{

    constructor(parent, Data){
        this.parent=parent
        this.data = Data
    }

    getHTML() {
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.data.photo_400_orig}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.data.first_name} ${this.data.last_name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    clickBack(){
        const main_page = new MainPage(this.parent)
        main_page.render()
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
            var button = new MainPageButton(document.getElementById("invest"), this.data.id)
            button.render(this.clickCard.bind(this))
        }
        
        if(listener){
            const backButton = new BackButtonComponent(document.getElementById("invest"))
            backButton.render(this.clickBack.bind(this))
        }
    }
}