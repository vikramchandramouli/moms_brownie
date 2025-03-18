import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Popover,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  message
} from "antd";
import { CiShoppingCart } from "react-icons/ci";
import cartLogo from "../../assets/cartLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { IoBasketSharp } from "react-icons/io5";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { removeFromCart, removeCartId,orderedList,customerDetails } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export function Cart(props) {
  const { Option } = Select;
  const form = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading,setLoading]=useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const Cart = useSelector((state) => state.cartData?.cart);
  const indianStates = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chattisgarh", value: "Chattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
  ];

  const selectBefore = (
    <Select
      defaultValue="+91"
      style={{
        width: 70
      }}>
      <Option value="+91">+91</Option>
      <Option value="+87">+87</Option>
    </Select>
  );

  const removeCartHandler = (id) => {
    let data = Cart?.filter((d) => d?.id !== id);
    let cartId = data?.map((d) => d?.id);
    dispatch(removeFromCart(data));
    dispatch(removeCartId(cartId));
  };

  useEffect(() => {
    let total = Cart.reduce((acc, d) => acc + d.newPrice, 0);
    setTotal(total);
  }, [Cart]);


  const handleFinishForm=(value)=>{
    let orderedData= Cart.map((d)=>({...d,...{
      name:name,
      phoneNumber:phoneNumber,
      address:address,
      city:city,
      state:state
    }}))
    setLoading(true)
    dispatch(orderedList(orderedData))
    dispatch(removeCartId([]))
    dispatch(customerDetails({
      name:name,
      phoneNumber:phoneNumber,
      address:address,
      city:city,
      state:state
    }))
    dispatch(removeFromCart([]))
    messageApi.open({
      key,
      type: 'loading',
      content: 'This won’t take long!',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Thank you! Your shipping details have been recorded.!',
        duration: 2,
      });
    }, 2000);
    setLoading(false)
    setTimeout(() => {
      navigate("/Order")
    }, 2500);
    
  }


  return (
    <>
      <div>
        <Row>
          <Col span={24} className="flex justify-center">
            {Cart?.length > 0 ? (
              <Card
                title={
                  <Row>
                    <CiShoppingCart size={18} />
                    <p className="ml-2">Shopping Cart</p>
                  </Row>
                }
                style={{ width: "80%" }}
              >
                <Col span={24}>
                  {Cart?.map((d) => {
                    return (
                      <Col
                        span={24}
                        className="py-3 flex md:flex-row flex-col justify-between border-b-2"
                      >
                        <div className="flex flex-row gap-6">
                          <img
                            src={d?.image}
                            className="w-[150px] h-[160px] rounded-3xl"
                          ></img>
                          <div className="flex flex-col justify-center">
                            <p className="font-bold text-xl">{d?.title}</p>
                            <p className="py-1 font-bold">{d?.origin}</p>
                            <p className="py-1 font-semibold">
                              {d?.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <div
                            className="bg-red-600 rounded-full p-[9px] w-9 h-9 cursor-pointer flex justify-center"
                            onClick={() => removeCartHandler(d?.id)}
                          >
                            <Popover content={"Remove from Cart"}>
                              <IoBasketSharp size={18} color="white" />
                            </Popover>
                          </div>
                          <span className="text-xl font-bold text-black px-4">
                            ₹ {d?.newPrice}
                          </span>
                        </div>
                      </Col>
                    );
                  })}
                  <div className="p-2">
                    <p className="font-bold text-xl flex justify-end">
                      Total = ₹ {total}{" "}
                    </p>
                  </div>
                  <div className="flex justify-end p-2">
                    <Button
                      onClick={() => setModalOpen(!modalOpen)}
                      size="large"
                      className="bg-orange-500 !text-white hover:!bg-orange-500  hover:!border-none "
                    >
                      Checkout
                    </Button>
                  </div>
                </Col>
              </Card>
            ) : (
              <Card
                title={
                  <Row>
                    <CiShoppingCart size={18} />
                    <p className="ml-2">Shopping Cart</p>
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
                    <p className="text-lg font-semibold">
                      Add some items to your cart
                    </p>
                    <Button onClick={() => navigate("/Home")}> Shopping</Button>
                  </Col>
                </Row>
              </Card>
            )}
          </Col>
        </Row>
      </div>
      <Modal
        title={
          <div className="flex">
            <LiaShuttleVanSolid size={18} className="mt-0.5 mx-2" />
            <p>Shipping Address</p>
          </div>
        }
        open={modalOpen}
        footer={null}
        onCancel={()=>setModalOpen(false)}
      >
        <Row>
          <Col span={24} className="p-2">
          {contextHolder}
            <Form
              className="text-black !dark:text-white port-form sm:!max-w-[600px] sm:ms-[8%] active:border-none"
              layout="horizontal"
              onFinish={handleFinishForm}
              // style={{
              //     maxWidth: 600,
              // }}
              labelCol={{
                span: 7,
              }}
              wrapperCol={{
                span: 16,
              }}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  className="w-full px-4 py-2 rounded-lg "
                  value={name}
                  onChange={(e) => setName(e?.target?.value)}
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                name="Phone Number"
                label="Phone Number"
                rules={[
                  {
                    type: "number",
                    required: true,
                  },
                ]}
              >
                <InputNumber
                controls={false}
                  className="w-full rounded-lg "
                  addonBefore={selectBefore}
                  value={phoneNumber}
                  onChange={(e) =>setPhoneNumber(e)}
                />
              </Form.Item>
              <Form.Item
                name="Address"
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  className="w-full  px-4 py-2 rounded-lg "
                  maxLength={600}
                  style={{
                    // resize: 'none'
                    minHeight: 70,
                    maxHeight: 400,
                  }}
                  value={address}
                  placeholder="Address"
                  onChange={(e) => setAddress(e?.target?.value)}
                />
              </Form.Item>
              <Form.Item
                name="City"
                label="City"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  className="w-full px-4 py-2 rounded-lg "
                  value={city}
                  onChange={(e) => setCity(e?.target?.value)}
                  placeholder="Please enter your city"
                />
              </Form.Item>
              <Form.Item
                name="State"
                label="State"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  value={state}
                  onChange={(e) => setState(e)}
                  options={indianStates}
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 10,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className=" hover:!bg-orange-500 hover:!text-white  bg-orange-500 text-white"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
