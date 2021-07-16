export const defaultState = {
    users: [
        {
            id: "U1",
            name: "Dev"
        },
        {
            id: "U2",
            name: "Jurgen Klopp"
        }
    ],
    groups: [
        {
            name: "To Do",
            id: "G1",
            owner: "U1"
        },
        {
            name: "Doing",
            id: "G2",
            owner: "U1"
        }, 
        {
            name: "Done",
            id: "G3",
            owner: "U1"
        }
    ],
    tasks: [
        {
            name: "Do Tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            name: "Sign Players",
            id: "T2",
            group: "G2",
            owner: "U2",
            isComplete: false
        },
        {
            name: "Train Players",
            id: "T3",
            group: "G2",
            owner: "U2",
            isComplete: false
        },
        {
            name: "Write Scripts",
            id: "T4",
            group: "G1",
            owner: "U1",
            isComplete: true
        },
    ],
    comments: [
        {
            owner: "U1",
            id: "C1",
            task: "T1",
            content: "Great work!!!"        
        },
        {
            owner: "U2",
            id: "C2",
            task: "T3",
            content: "Nice scripts man!"        
        },
        {
            owner: "U1",
            id: "C3",
            task: "T2",
            content: "Finally..."        
        },
    ]
}