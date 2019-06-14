function Create(Vue, arg) {
    const to = Vue.extend(arg);
    let t;
    if (!t) {
        t = new to()
        t.$mount()
        document.querySelector('body').appendChild(t.$el)
    }

    let el = {
        show(obj, callback) {  //obj --> object  @params  `自定义参数`
            return new Promise( resolve =>{
                t.show(obj, callback);
                resolve()
            })
        },
        close() {
            return new Promise(resolve =>{
                if(!t || !t.show) {
                    resolve()
                    return
                }
                t.close()
            })
        }
    }
    return el
}
export  default Create
