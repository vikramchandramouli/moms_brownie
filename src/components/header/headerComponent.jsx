/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import { Row, Col, Menu,Badge } from "antd";
import logo from "../../assets/Logo.png"
import Icon from "../../assets/ProfileIcon.png"
import { IoMdApps } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
const HeaderComponent = () => {
  const navigate = useNavigate();
  const Cart=useSelector((state)=>state.cartData?.cart)
  const OrderedList=useSelector((state)=>state.cartData?.orderedList)
  const [currPage, setCurrPage] = useState('/');
  const [isOverflow, setIsOverflow] = useState(false);
  const menuItems = [
    {
      label: "Home",
      key: '/',
      link: '/',
    },
    {
      label:(<>
      <Badge count={Cart?.length} offset={[5,-6]}>Cart</Badge>
      </>),
      key: '/Cart',
      link: '/Cart',
    },
    {
      label:(<>
        <Badge count={OrderedList?.length} offset={[5,-6]}>Order</Badge>
        </>),
        // label:"Order",
      key: '/Order',
      link: '/order',
    },
  ];

  const checkOverflow = () => {
    if (window.innerWidth < 1050) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [isOverflow]);

  const menuOnlick = ({ key }) => {
      navigate(key);
      setCurrPage(key);
  };
  return (
    <>
      <Row gutter={[16, 16]} className="!bg-custom-white">
        <Col span={24}>
          <Row
            gutter={[16, 16]}
            className="flex justify-center text-center font-sans"
          >
            <Col span={12}>
            <a className="flex items-center gap-2 hover:text-black" onClick={()=>navigate("/Home")}>
            <img src={logo} className="w-16 h-16"></img>
            <span className="text-xl font-serif font-semibold">Mom's Brownie</span>
            </a>
            </Col>
            <Col span={12}>
            <div className="float-right flex gap-0.5">
              <Menu
               defaultSelectedKeys={'/'}
                onClick={menuOnlick} 
                selectedKeys={[location.pathname]}
                className="bg-transparent font-semibold text-[15px] float-right flex gap-0.5"
                mode="horizontal"
                items={menuItems}
                overflowedIndicator={
                  <IoMdApps
                      size={20}
                      className="!text-black relative top-5 "
                  />
              }/>

              <img src={Icon} className="w-12 h-12 m-2"></img>
              </div>
            </Col>
            
          </Row>
        </Col>
      </Row>
    </>
  );
};


export default HeaderComponent