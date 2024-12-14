export  interface NavData {
    id:number;
    title:string;
    link: string;

}

export const navData:NavData[] = [
    {
        id:1,
        title:"Home",
        link:'/'
    },
    {
        id:2,
        title:"Blog",
        link:'/blogs'
    },
    {
        id:3,
        title:"Event",
        link:'/event'
    },
    {
        id:4,
        title:"About Us",
        link:'/about'
    },
    {
        id:5,
        title:"Contact",
        link:'/contact'
    }

]