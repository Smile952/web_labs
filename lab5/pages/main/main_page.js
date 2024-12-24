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

    getData = async () => {        
        let response = await fetch(this.urls.getGroupMembers(groupId))
        let data = await response.json()

        return data.response.items
    }
 
    renderItem = async()=>{
        const page = this.pageRoot
        var items = await this.getData();
        document.getElementById("up").onclick = function(){
            document.getElementById("root").innerHTML = ''
            items = items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
            items.forEach(el => {
                const card = new HumanCard(page, el)
                card.render(false)
            });
        }
        document.getElementById("down").onclick = function(){
            document.getElementById("root").innerHTML = ''
            items = items.sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
            items.forEach(el => {
                const card = new HumanCard(page, el)
                card.render(false)
            });
        }
        items.forEach(el => {
            const card = new HumanCard(page, el)
            card.render(false)
        });
    }

    render() {
        this.parent.innerHTML = ''
        this.renderItem()
    }
}