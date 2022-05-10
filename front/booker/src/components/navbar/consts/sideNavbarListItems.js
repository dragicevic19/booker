import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import BungalowIcon from '@mui/icons-material/Bungalow';

export const mainNavbarItems = {
    'ROLE_BOAT_OWNER': [{
        id: 0,
        icon: <AddCircleOutlineIcon />,
        label: 'Add New Boat',
        route: '/add-boat',
    },
    {
        id: 1,
        icon: <DirectionsBoatIcon />,
        label: 'My Boats',
        route: '/my-offers',
    },
    {
        id: 2,
        icon: <CalendarMonthIcon />,
        label: 'Calendar',
        route: '/calendar',
    },
    {
        id: 3,
        icon: <PersonIcon />,
        label: 'My Profile',
        route: '/profile'
    }
    ],
    'ROLE_COTTAGE_OWNER': [
        {
            id: 0,
            icon: <AddCircleOutlineIcon />,
            label: 'Add New Cottage',
            route: '/add-cottage',
        },
        {
            id: 1,
            icon: <BungalowIcon />,
            label: 'My Cottages',
            route: '/my-offers',
        },
        {
            id: 2,
            icon: <CalendarMonthIcon />,
            label: 'Calendar',
            route: '/calendar',
        },
        {
            id: 3,
            icon: <PersonIcon />,
            label: 'My Profile',
            route: '/profile'
        }
    ],

    'ROLE_INSTRUCTOR': [
        {
            id: 0,
            icon: <AddCircleOutlineIcon />,
            label: 'Add New Lesson',
            route: '/add-lesson',
        },
        {
            id: 1,
            icon: <BungalowIcon />,
            label: 'My Lessons',
            route: '/my-offers',
        },
        {
            id: 2,
            icon: <CalendarMonthIcon />,
            label: 'Calendar',
            route: '/calendar',
        },
        {
            id: 3,
            icon: <PersonIcon />,
            label: 'My Profile',
            route: '/profile'
        }
    ]
}