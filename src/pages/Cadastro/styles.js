export default theme => ({
    principal: {
        height: '100vh',
        backgroundColor: 'rgb(248, 248, 248)',
        display: 'flex',
        justifyContent: 'center'
    },
    cadastro: {
        textAlign: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '300px',
        height: '410px',
        marginTop: '80px',
        borderRadius: '10px',
    },
    h1: {
      paddingTop: '10px'
    },
    input: {
        float: 'right',
        marginRight: '20px',
        backgroundColor: '#0476b8',
        color: 'white'
    },
    p: {
        textAlign: 'left',
        marginLeft: '20px'
    },
    select: {
        float: 'right',
        marginRight: '20px',
        width: '182px',
        background: '#0476b8',
        '&:hover': {
            background: '#0476b8',
            borderRadius: '3px',
            color: 'white',
        },
        color: 'white'
    },
    option: {
    }
})