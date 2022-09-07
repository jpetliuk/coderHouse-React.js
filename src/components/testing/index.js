const request = {
    status: '404'
}

new Promise((resolve, reject) => {
    request.status === '200' ? resolve({
        name: 'pedro',
        surname: 'sanchez'
    }
    ) : reject('error de ejecucion')
})
.then((response) => console.log(response))
.then((response) => console.log(2))
.catch((error) => console.log(error))
.catch((error) => console.log(error))