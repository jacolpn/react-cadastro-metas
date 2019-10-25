export default theme => ({
    principal: {
        width: '10vh%',
        height: '100vh',
    },
    metas: {
        backgroundColor: 'rgb(248, 248, 248)',
        minHeight: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 15px 15px 15px'
    },
    '@media (max-width: 480px)' : { 
        metas: {
            padding: '30px 15px 15px 15px'
        },
    }
})