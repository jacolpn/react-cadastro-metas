export default theme => ({
    navWrapper: {
        background: '#181f1d',
        position: 'absolute',
        width: '100%',
        height: '47px',
        textAlign: 'center',
        margin: '0px',
        padding: '0px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '40px',
        padding: '0 80px 0',
        '&:hover': {
            background: '#0476b8',
            borderRadius: '3px',
            padding: '0 80px 0',
            opacity: '5'
        }
    },
    '@media (max-width: 480px)' : {
        navWrapper: {
            background: '#181f1d',
            position: 'absolute',
            width: '100%',
            height: '25px',
            textAlign: 'center',
            margin: '0px',
            padding: '0px',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '22px',
            padding: '0 20px 0',
            '&:hover': {
                background: '#0476b8',
                borderRadius: '3px',
                padding: '0 20px 0',
                opacity: '5'
            }
        },
    },

})