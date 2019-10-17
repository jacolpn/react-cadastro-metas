export default theme => ({
    principal: {
        width: '100vh%',
        height: '98vh',
        margin: '-8px'
    },       
    perfilWrapper: {
        backgroundColor: 'rgb(248, 248, 248)',
        textAlign: 'center',
        height: '100vh'
    },
    perfilPrincipal: {
        borderRadius: '10px'
    },
    usuario: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '160px',
        marginLeft: '-10px'
    },
    imgUSR: {
        backgroundColor: 'white',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50px',
        marginTop: '80px'
    },
    nomeUsuario: {
        marginTop: '0'
    },
    p: {
        marginTop: '50px',
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
        imgUSR: {
            marginTop: '0'
        },
        p: {
            marginTop: '0'
        },
        perfilPrincipal: {
            paddingLeft: '10px'
        }
    },
    '@media (min-width: 481px)' : {
        perfilPrincipal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
})