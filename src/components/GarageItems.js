import React from "react";
import Items from "./components/Items";
import productData from "./data/productData";

class GarageItems extends React.Component {
  render() {
    let { title } = this.props;
    let garage = productData.map((item) => {
      return <Items name={item.name} description={item.description} />;
    });
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {/* name={productData[0].name}
            price={productData[0].price}
            image={productData[0].img}
           description={productData[0].description} */}

          {garage}
        </ul>
      </div>
    );
  }
}

export default GarageItems;
