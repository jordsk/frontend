import logo from './logo.svg';
import './App.css';
import PropComp from './Hello';
import Products from './MyComponent';

Function ComponentsWithProps() {
const ComponentsWithProps = () => <h1>Yo!</h1>

return (
    <div className="App">
        <Heading/>
        <Person/>
        <Products/>
        <Products
        name="Pepsi"
        price={1.99}
        descript="another drink"
        />
        <Products
        name="Fanta"
        prcice={1.00}
        descript="again, another drink"
        />
        <Parent/>
    </div>
)
};
export default App;