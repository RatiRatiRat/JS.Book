class Book{
    constructor(სათაური,ავტორი){
        this.სათაური=სათაური
        this.ავტორი=ავტორი
    }
   
    saymybookName(){
        console.log(`This Book is ${this.სათაური}`)
    }

    sayauthor(){
        console.log(`This Book is written by ${this.ავტორი}`)
    }
}


const book =new Book

book.სათაური="ვეფხისტყაოსანი"
book.ავტორი="შოთა რუსთაველი"
book.saymybookName()
book.sayauthor()