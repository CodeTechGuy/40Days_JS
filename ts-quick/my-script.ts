/*
function add(a: number , b: number) : number {
    return a+b;
}
const result:number = add(3,4)
console.log(result);

*/


// In Memory DB
// save('user-1' , { fname , lname })

// HashMap ( Key , Value)      
//           Type   Type     
//          String  String   

// 1 { fname , lname , email , contact: { mobile }, address: { street , pincode , country } }

type UserID = string
interface User {
    id: UserID
    fname: string
    // lname: string | undefined 
    lname?: string
    email: string
    contact: {
        mobile: string
    }
    address: {
        street: number
        pin: number
        country: string
    }
}

class InMemoryDB {
    private _db: Map<UserID, User>

    constructor(){

    }

    public insertUser(data: User): UserID{
        if(this._db.has(data.id)){
            throw new Error (`User with ID ${data.id} already exists`)
        }
        this._db.set(data.id , data)
        return data.id
    }

    public updateUser(id: UserID , updateData: Omit<User , 'id'>): boolean{
        if(!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`)
        this._db.set(id, { ...updateData , id })
        return true
    }

    public getUserById(id: UserID): User{
        if(!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`)
        return this._db.get(id)!
    }
}

const myDB = new InMemoryDB()
myDB.insertUser({
    id: '1',
    fname: 'Piyush',
    // lname: undefined
    // lname: 'Garg',
    email: 'piyush@email.com',
    contact: { mobile: '999999' },
    address: {
        country: 'IN',
        pin: 577201,
        street: 14
    }
})
