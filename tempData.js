export default tempData = [
    {
        name: 'Plan a Trip',
        color: '#24A6D9',
        remind: true,
        date: new Date(2020, 5 , 19),
        todos: [
            {
                title: 'Book Flight',
                completed: false,
            },
            {
                title: 'Check Passport',
                completed: true,
            },
            {
                title: 'Reserve Hotel',
                completed: true,
            },
            {
                title: 'Pack Luggage',
                completed: false,
            }
        ]
    },
    {
        name: 'Organise Event',
        color: '#228B22',
        remind: false,
        date: null,
        todos: [
            {
                title: 'Book Venue',
                completed: false,
            },
            {
                title: 'Send Invites',
                completed: true,
            },
        ]
    },
    {
        name: 'Errands',
        color: '#8022D9',
        remind: true,
        date: new Date(2020, 6,25),
        todos: [
            {
                title: 'Buy Milk',
                completed: false,
            },
            {
                title: 'Buy Eggs',
                completed: true,
            },
        ]
    },
];