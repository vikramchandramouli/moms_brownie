import React from "react";
import { Row, Col, Card, Popover } from "antd";
import { IoBasketSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addCartId,removeCartId, removeFromCart } from "../../redux/actions";

export default function Home(props) {
  const { Meta } = Card;
  const Menu = useSelector((state) => state.cartData?.menu);
  const Cart = useSelector((state) => state.cartData?.cart);
  const CartId=useSelector((state)=>state.cartData?.cartId)
  const dispatch = useDispatch();

  const addCartHandler = (id) => {
    let data = Menu?.filter((d) => d?.id == id);
    if (Cart?.length == 0) {
      dispatch(addToCart(...data));
      dispatch(addCartId(id))
    } else {
      let inCart = Cart?.filter((d) => d?.id == data[0]?.id);
      if (inCart?.length == 0) {
        dispatch(addToCart(...data));
        dispatch(addCartId(id))
      }
    }
  };
  const removeCartHandler = (id) => {
    let data = Cart?.filter((d) => d?.id !== id);
    let cartId=data?.map((d)=>d?.id)
    dispatch(removeFromCart(data));
    dispatch(removeCartId(cartId))
  };

  return (
    <>
      <Row gutter={[16, 16]} className="mt-14  md:mt-20">
        <Col span={24} className="flex flex-col gap-6">
          <p className="text-[1.5rem] sm:text-[2rem] lg:text-[3.5rem] font-bold tracking-wide sm:self-start self-center">
            Pure Chocolate Joy <br />
            Straight to <span className=" text-custom-orange">You!</span>
          </p>
          <p className="text-base md:text-left">
            Welcome to Mom's Brownie – Where Every Bite Feels Like Home! Indulge
            in the rich, homemade goodness of our delectable brownies, crafted
            with love and the finest ingredients. At Mom’s Brownie, we bring you
            a delightful selection of mouthwatering treats, from classic fudgy
            brownies to irresistible flavor twists that satisfy every craving.
          </p>
          <p className="text-base md:text-left">
            Browse through our curated collection of 10 brownie varieties, each
            beautifully displayed in an inviting card view. Use the name filter
            to quickly find your favorite flavor or discover a new favorite.
            Click on any brownie to explore its delightful ingredients and order
            a sweet treat for yourself or a loved one.
          </p>
          <p className="text-base md:text-left">
            Mom’s Brownie is dedicated to bringing warmth and sweetness to every
            moment. Explore, order, and enjoy the homemade love delivered
            straight to your doorstep. Start your brownie adventure with us
            today! 🍫✨
          </p>
        </Col>
        <Col span={24} className="py-6">
          <p className="text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-28 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Best Picks!
          </p>
        </Col>

        <Col span={24} className="flex flex-wrap justify-center gap-12 my-9">
          {Menu.map((d, i) => {
            return (
              <Card
                key={i}
                className="ant-card ant-card-bordered hover:scale-105 transition-all 100s ease-in-out css-14wwjjs"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt={d?.title}
                    src={d?.image}
                    className="w-[100%] !h-[400px]"
                  />
                }
              >
                <Meta
                  title={d?.title}
                  description={
                    <>
                      <p className="pt-1 text-black">{d?.origin}</p>
                      <p className="pt-2 text-black">{d?.description}</p>
                      <div className="py-2 flex justify-between">
                        <p>
                          <span className="text-custom-green font-medium">
                            Special Price
                          </span>{" "}
                          <br />
                          <span className="text-xl font-bold text-black pr-1">
                            ₹ {d?.newPrice}
                          </span>
                          <span>
                            <del className="text-gray-500">{d?.oldPrice}</del>
                          </span>
                        </p>
                        <div className="py-2">
                          {CartId.includes(d?.id) ? (
                            <div
                              className="bg-red-500 rounded-full p-2 cursor-pointer"
                              onClick={() => removeCartHandler(d?.id)}
                            >
                              <Popover content={"Remove from Cart"}>
                                <IoBasketSharp size={20} color="white" />
                              </Popover>
                            </div>
                          ) : (
                            <div
                              className="bg-green-500 rounded-full p-2 cursor-pointer"
                              onClick={() => addCartHandler(d?.id)}
                            >
                              <Popover content={"Add to Cart"}>
                                <IoBasketSharp size={20} color="white" />
                              </Popover>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  }
                />
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
