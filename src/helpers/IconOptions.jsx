import { Icon } from '@rneui/base';

const IconOptions = (route, color, size) => {

    const screen = {
        'Restaurants': 'compass-outline',
        'Search': 'magnify',
        'Account': 'home-outline',
        'Ranking': 'star-outline',
        'Favoritos': 'heart-outline',
    }

    return (
        <Icon
            type='material-community'
            name={screen[route.name]}
            size={size}
            color={color}
        />
    )
}

export default IconOptions;