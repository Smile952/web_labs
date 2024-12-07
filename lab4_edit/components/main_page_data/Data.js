import {Ajax} from "../../modules/ajax.js";
import {Urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";

export class Data{
    getData() {
        const ajax = new Ajax();
        const urls = new Urls();
        ajax.post(urls.getGroupMembers(groupId), (data) => {
            this.renderData(data.response.items)
        })
    }
}