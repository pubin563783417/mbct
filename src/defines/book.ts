
export interface Book {
	id :string
	title : string
	duration : string
	url : string
	icon : string
	desc : string
	author : string
}


export interface Collection {
    name : string
    id : string
    author : string
    desc : string
	icon? : string
    list : Book[]
}