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
    getData() {
        this.ajax.post(this.urls.getGroupMembers(groupId), (data) => {
            this.renderItem(data.response.items, this.pageRoot)
        })
    }

    renderItem(items, page){
        items.forEach(el => {
            const card = new HumanCard(page, el)
            card.render(false)
        });
        
    }

    render() {
        this.parent.innerHTML = ''
        this.getData()
    }
}