import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config";
export async function createNewUser(user:INewUser){
    try {
        const newAccount = await account.create(
            ID.unique(), 
            user.email,
            user.password,
            user.name
        );
        return newAccount;
    } catch (error) {
        console.log("Error While Creating User ::: ", error );    
        return error   
    }
}