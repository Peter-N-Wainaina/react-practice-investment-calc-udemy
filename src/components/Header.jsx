import logoImg from "../assets/investment-calculator-logo.png"

export default function({title, ...props}){
    return <header id="header">
            <img src={logoImg}  alt="Logo showing a bag full of money"/>
            <h1>{title}</h1>
    </header>
}