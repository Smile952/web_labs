import {Ajax} from "../../modules/ajax.js";
import {Urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";
import {HumanCard} from "../card_page/HumanCard.js";

export class MainPage{
    
    constructor(parent){
        this.parent = parent
        this.ajax = new Ajax();
        this.urls = new Urls();
    }
    get pageRoot() {
        return document.getElementById('root')
    }
    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="test" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">ddd ffff</h5>
                        <button class="btn btn-primary" id="click-card-$1" data-id="1">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }
    getData() {
        this.ajax.post(this.urls.getGroupMembers(groupId), (data) => {
            console.log(data)
            this.renderItem(data.response.items, this.pageRoot)
        })
    }

    renderItem(items, page){
        const card = new HumanCard(page, items)
        card.render(false)
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getData()
    }
}