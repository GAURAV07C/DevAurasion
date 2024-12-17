export interface AboutCardData{
    id:number;
    img:string;
    title:string;
    description:string;
}

export const aboutCardData:AboutCardData[] =[
    {
        id:1,
        img:'/images/about/Connect.svg',
        title:"Connect",
        description:'Throughout your journey, our service provides unwavering support, offering personalized guidance to help you efficiently reach your goals. By prioritizing your well-being and fostering self-confidence, we are dedicated to ensuring your success.'
    },
    {
        id:2,
        img:'/images/about/build.svg',
        title:"Build",
        description:'We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.'
    },
    {
        id:3,
        img:'/images/about/explore.svg',
        title:"Explore",
        description:'At the core of our mission is the optimization of your time, physical vitality, and mental energy, enabling you to concentrate more effectively on your objectives and excel in your professional endeavors.',

    },
]