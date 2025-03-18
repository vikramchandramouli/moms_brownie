import React from "react";
import { Row, Col, Card, Popover, Button } from "antd";
import { useSelector } from "react-redux";
import { LuBaggageClaim } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import cartLogo from "../../assets/cartLogo.jpg";
import { TiTick } from "react-icons/ti";

const Order = (props) => {
  const navigate = useNavigate();
  const orderedList = useSelector((state) => state.cartData?.orderedList);
  const customerDetails = useSelector(
    (state) => state.cartData?.customerDetails
  );
  return (
    <>
      <div>
        <Row>
          <Col span={24} className="flex justify-center">
            {orderedList?.length > 0 ? (
              <Card
                title={
                  <Row>
                    <LuBaggageClaim size={18} />
                    <p className="ml-2">My Orders</p>
                  </Row>
                }
                className="border-gray-300"
                style={{ width: "80%" }}
              >
                <Col span={24}>
                  {orderedList?.map((d) => {
                    return (
                      <>
                        <Col
                          span={24}
                          className="py-3 flex md:flex-row flex-col justify-between"
                        >
                          <div className="flex flex-row gap-6">
                            <div className="flex flex-col">
                              <img
                                src={d?.image}
                                className="w-[150px] h-[160px] rounded-3xl"
                              ></img>
                              <p className="font-semibold text-lg pt-1">
                                {d?.title}
                              </p>
                              <p className="font-semibold text-md">
                                {d?.origin}
                              </p>
                            </div>
                            <div className="flex flex-col pt-3">
                              <p className="font-medium text-lg">{d?.name}</p>
                              <p className="py-1 font-medium text-lg">
                                {d?.address}
                              </p>
                              <p className=" font-medium text-lg">{d?.city}</p>
                              <p className=" pb-5 font-medium text-lg">
                                {d?.state}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center items-center p-4">
                            <div className="bg-green-400 rounded-md p-[4px] cursor-pointer flex justify-center">
                              <TiTick size={20} className="text-white" />
                              <span className="text-md font-bold text-white px-1">
                                Ordered
                              </span>
                            </div>
                          </div>
                        </Col>
                        {/* <Col span={24} className='pb-2'>
                      <p className="font-semibold text-lg">{d?.title}</p>
                      <p className="font-semibold text-md">{d?.origin}</p>
                      </Col> */}
                        <Col className="border-b-2"></Col>
                      </>
                    );
                  })}
                </Col>
              </Card>
            ) : (
              <Card
                title={
                  <Row>
                    <LuBaggageClaim size={18} />
                    <p className="ml-2">My Orders</p>
                  </Row>
                }
                style={{ width: "40%" }}
              >
                <Row>
                  <Col
                    span={24}
                    className="w-full px-12 py-3 h-full flex flex-col items-center justify-center gap-6"
                  >
                    <img src={cartLogo} className="w-[350px]"></img>
                    <p className="text-lg font-semibold">You Have No Orders</p>
                    <Button onClick={() => navigate("/Home")}> Shopping</Button>
                  </Col>
                </Row>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Order;
