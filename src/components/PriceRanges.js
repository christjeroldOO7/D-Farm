import {Space, InputNumber} from 'antd';
import "./PriceRanges.css";

function PriceRanges({priceMin, setPriceMin, priceMax, setPriceMax}) {

        function changePrice(min,max){
            setPriceMin(min);
            setPriceMax(max);
        }

  return (
    <>
    <h2>
        Price Ranges
    </h2>
    <p className="prices" onClick={() => changePrice(0,20)}>Under ₹20</p>
    <p className="prices" onClick={() => changePrice(20,40)}>₹20 to ₹40</p>
    <p className="prices" onClick={() => changePrice(40,80)}>₹40 to ₹80</p>
    <p className="prices" onClick={() => changePrice(80,100)}>₹80 & Above</p>
    <Space>
    <InputNumber
      value={priceMin}
      formatter={value => `₹ ${value}`}
      onChange={(value) => changePrice(value,priceMax)}
    />
    <InputNumber
      value={priceMax}
      formatter={value => `₹ ${value}`}
      onChange={(value) => changePrice(priceMin,value)}
    />
    </Space>
    <br/>
    <br/>
    </>
  )
}

export default PriceRanges