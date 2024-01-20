class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count]=element;
        let push_res=`${element}`;
        this.count += 1;
        let count=this.count -1;
        return [push_res, count];
    }

    pop () {
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        return deleteItem;
    }

    peek () {
        let peek_data = this.items[this.count -1];
        return peek_data;
    }

    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
        return this.count==0;
    }

    size () {
        console.log(`${this.count} elements in Stack`);
        return this.count;
    }

    print () {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}

const stack =  new Stack ();

$(document).ready(function(){
    $("#btn_push").on("click", function(){
        let push_data = stack.push($("#st_data").val());
        $("#stack").prepend(`<div id="st${push_data[0]}" class="row bg-primary push"> ${push_data[0]}</div>`);
    });
    $("#btn_pop").on("click", function(){
        let pop_data = stack.pop();
        $("#popped").prepend(`<div class="row pop text-bg-danger border border-light">${pop_data}</div>`);
        $(`#st${pop_data}`).remove();
    });
    $("#btn_peek").on("click", function(){
        let peek_data = stack.peek();
        $(`#st${peek_data}`).removeClass("bg-primary").addClass("peek");
        setTimeout(function (){
            $(`#st${peek_data}`).removeClass("peek").addClass("bg-primary");
        }, 200);
    });
    $("#btn_clear").on("click", function(){
        stack.clear();
        $("#stack, #popped").empty();
    });
});