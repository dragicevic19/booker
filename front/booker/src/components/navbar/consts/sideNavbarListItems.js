import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import BungalowIcon from '@mui/icons-material/Bungalow';

export const mainNavbarItems = {
    'boat_owner': [{
        id: 0,
        icon: <AddCircleOutlineIcon />,
        label: 'Add New Boat',
        route: '/addNewBoat',
    },
    {
        id: 1,
        icon: <DirectionsBoatIcon />,
        label: 'My Boats',
        route: '/myBoats',
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
    'cottage_owner': [
        {
            id: 0,
            icon: <AddCircleOutlineIcon />,
            label: 'Add New Cottage',
            route: '/addNewCottage',
        },
        {
            id: 1,
            icon: <BungalowIcon />,
            label: 'My Cottages',
            route: '/myCottages',
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