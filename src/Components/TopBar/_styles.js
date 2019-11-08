import configs from 'settings';

const styles = (theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${configs.drawerWidth}px)`,
        marginLeft: configs.drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    localeButton: {
        padding: theme.spacing(1, 2),
        height: 'unset',
        background: 'unset',
        boxShadow: 'unset',
    },
    title: {
        flexGrow: 1,
    },
});

export default styles;
