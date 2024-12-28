function customRender(reactEle,container){
    /*
    const domEle = document.createElement(reactEle.type)
    domEle.innerHTML = reactEle.children
    domEle.setAttribute('href',reactEle.props.href)
    domEle.setAttribute('target',reactEle.props.target)
    container.appendChild(domEle)*/
    const domEle = document.createElement(reactEle.type)
    domEle.innerHTML = reactEle.children
    for (const key in reactEle.props) {
        if(key==='children') continue
        domEle.setAttribute(key,reactEle.props[key])
    }
    container.appendChild(domEle)

}
const reactEle = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit Google.com"
}

const mainContainer = document.getElementById("root");
customRender(reactEle,mainContainer)
