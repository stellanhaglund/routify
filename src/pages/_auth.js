export default function(){
    return new Promise(function(resolve) { 
        setTimeout(() => {
            console.log('should resolve')
            resolve(true)
        }, 1000)
    });
} 