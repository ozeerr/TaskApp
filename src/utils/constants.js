import {
    ChartCircle,
    Clock,
    TickCircle,
    CloseCircle,
} from 'iconsax-react-native';
import AppColors from '../theme/colors';

const status = {
    ONGOING: 1,
    PENDING: 2,
    COMPLATED: 3,
    CANCEL: 4
}

const taskVlues = [
    {
        status: 1,
        title: 'Ongoing',
        color: AppColors.ONGOING,
        icon: <ChartCircle size="20" color={AppColors.WHITE} />,
    },
    {
        status: 2,
        title: 'Pending',
        color: AppColors.PENDING,
        icon: <Clock size="20" color={AppColors.WHITE} />,
    },
    {
        status: 3,
        title: 'Complated',
        color: AppColors.COMPLATED,
        icon: <TickCircle size="20" color={AppColors.WHITE} />,
    },
    {
        status: 4,
        title: 'Cancel',
        color: AppColors.CANCEL,
        icon: <CloseCircle size="20" color={AppColors.WHITE} />,
    },
];

export { status, taskVlues }