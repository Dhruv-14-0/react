function customRender(mainCotainer,reactElement){
    /*
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    mainCotainer.appendChild(domElement);
    */
    
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
            domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainCotainer.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target : 'blank'
    },
    children : 'Click on me to go to google'
}

const mainCotainer=document.querySelector('#root')

customRender(mainCotainer,reactElement)