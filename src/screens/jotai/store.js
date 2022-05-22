import { atom } from "jotai";


export const currentUser = atom({});

export const newUser = atom({
    username: "",
    date: new Date(),
    image: "",
    password: "",
    id: "",
    likes: []
});

export const users = atom(
    [
        {
            id: "0",
            username: "karma",
            password: "karma_onboarding",
            birthday: new Date(2021, 6, 19),
            image: "https://media-exp1.licdn.com/dms/image/C4E0BAQEPVUo-RCiUaA/company-logo_200_200/0/1644675616052?e=2147483647&v=beta&t=-TgQZ_HjNkYeM-XrNL5X3dVHrdouQzluqkzKQbqHclQ",
            likes: ["1", "2", "3", "4", "5"]
        },
        {
            id: "1",
            username: "user1",
            password: "user1_23456789",
            birthday: new Date(2021, 6, 19),
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            likes: []
        },
        {
            id: "2",
            username: "user2",
            password: "user2_3456789",
            birthday: new Date(2021, 6, 19),
            image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            likes: ["4"]
        },
        {
            id: "3",
            username: "user3",
            password: "user3_456789",
            birthday: new Date(2021, 6, 19),
            image: "https://thumbs.dreamstime.com/b/portrait-pretty-happy-person-using-phone-isolated-pink-background-portrait-pretty-happy-person-using-phone-isolated-156961699.jpg",
            likes: []
        },
        {
            id: "4",
            username: "user4",
            password: "user4_56789",
            birthday: new Date(2021, 6, 19),
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            likes: []
        },
        {
            id: "5",
            username: "user5",
            password: "user5_6789",
            birthday: new Date(2021, 6, 19),
            image: "https://imgk.timesnownews.com/story/MUSK_2.png?tr=w-400,h-300,fo-auto",
            likes: ["2", "3"]
        }
    ]
);