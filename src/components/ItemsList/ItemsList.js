import React, { Fragment } from "react";
import Item from "./Item/Item";

const ItemsList = props => {
  return (
    <Fragment>
      <div className="cards">
        {props.items.map((item) => (
          <Item
            key={item.char_id}
            img={item.img}
            name={item.name}
            portrayed={item.portrayed}
            nickname={item.nickname}
            birthday={item.birthday}
            status={item.status}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ItemsList;
