import { redirect } from "react-router";
import { account, database, appwriteConfig } from "./client";
import { ID, OAuthProvider, Query } from "appwrite";
export const loginWithGoogle = async () => {
    try {
        account.createOAuth2Session(OAuthProvider.Google)
    } catch (e) {
        console.log('loginWithGoogle' , e);
    }
}
export const getUser = async () => {
    try {
        const user = await account.get();
        if(!user) return redirect('/login')
        const { documents } = await database.listDocuments(
             appwriteConfig.databaseId,
             appwriteConfig.userCollectionId, 
             [ 
                Query.equal('Account', user.$id) ,
                Query.select(['name' , 'email' , 'imgUrl' , 'joinedAt' , 'accountId'])
             ]
        );

    } catch (e) {
        console.log(e);
    }
}
export const logoutUser = async () => {
    try {
        await account.deleteSession('current');
        redirect('/login');
    } catch (e) {
        console.log('logoutUser', e);
    }
};

export const getGooglePictuer = async (accessToken: string): Promise<string | null> => {
    try {
        const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=photos', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
            return data.photos[0].url;
        }
        return null;
    } catch (e) {
        console.log('fetchProfileFromGooglePeopleAPI', e);
        return null;
    }
}
export const storeUserData = async (userData: { name: string; email: string; imgUrl: string; joinedAt: string; accountId: string }) => {
    try {
        await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            appwriteConfig.ID.unique, // Generate a unique ID for the document
            userData
        );
    } catch (e) {
        console.log('storeUserData', e);
    }
};

export const getExistingUser = async (accountId: string) => {
    try {
        const { documents } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', accountId)]
        );
        return documents.length > 0 ? documents[0] : null;
    } catch (e) {
        console.log('getExistingUser', e);
        return null;
    }
};

