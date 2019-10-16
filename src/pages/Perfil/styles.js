export default theme => ({
    principal: {
        width: '100vh%',
        height: '98vh',
        margin: '-21px -8px -8px -8px',
    },       
    perfilWrapper: {
        backgroundColor: 'rgb(248, 248, 248)',
        minHeight: '100vh',
        textAlign: 'center',
    },
    perfilPrincipal: {
        borderRadius: '10px',
    },
    h1: {
        paddingTop: '50px'
    },
    p: {
        paddingBottom: '20px'
    },
    insignia1: {
        backgroundColor: '#0476b8',
        width: '120px',
        height: '120px',
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        borderRadius: '10px',
        color: '#fcfcfc',
        fontWeight: 'bold'
    },
    insignia2: {
        backgroundColor: '#fcfcfc',
        width: '60px',
        height: '60px',
        display: 'flex',
        float: 'left',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        borderRadius: '10px'
    },
    '@media (max-width: 480px)' : {
        insignia1: {
            marginLeft: '30px'
        },
        perfilWrapper: {
            padding: '50px 0 0 10px',
            minHeight: '92vh',
        },
        principal: {
            width: '100vh%',
            height: '100vh%',
            margin: '-8px',
        }, 
        h1: {
            paddingTop: '0px'
        },
    },
    '@media (min-width: 481px)' : {
        perfilPrincipal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
})