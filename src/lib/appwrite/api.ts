import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user:INewUser){
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );

        if(!newAccount) throw Error;

        const avatarsUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDb({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarsUrl,
        })

        return newUser;
    } catch (error) {
        console.log("Error While Creating User ::: ", error );
        return error
    }
}
export async function signInAccount(user: {email:string; password: string;}){
    try {
        const session = await account.createEmailPasswordSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log("Error while sign in account ",error);

    }
}
export async function saveUserToDb (user: {
    accountId: string,
    name: string,
    email: string,
    imageUrl: URL,
    username?: string,
}){
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )
    } catch (error) {
        console.log("Error while saving user to db ::: ", error);

    }
}