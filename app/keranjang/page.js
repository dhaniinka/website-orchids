"use client"

import { useState } from "react";
import Image from "next/image";
import "../../styles/keranjang.css";
import Navbar from "../../components/Navbar";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Yellow Shine Girl",
      description: "Phalaenopsis Orchids",
      price: 940000,
      qty: 2,
      image: "/flower1.png",
    },
    {
      id: 2,
      name: "Yellow Shine Girl",
      description: "Phalaenopsis Orchids",
      price: 940000,
      qty: 1,
      image: "/flower6.png",
    },
  ])

  const [shipping, setShipping] = useState("pickup")

  const updateQty = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  const shippingCost = shipping === "pickup" ? 0 : 30000
  const total = subtotal + shippingCost

  return (
    <>
      {/* ✅ Navbar dipanggil di sini */}
      <Navbar activePage="keranjang" />

      <div className="cart-container">
        <h1 className="cart-title">MY CART</h1>

        <div className="cart-box">
          {/* List Item */}
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-left">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="cart-img"
                  />
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-desc">{item.description}</p>
                    <p className="cart-item-price">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <div className="cart-item-right">
                  <div className="qty-control">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>–</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <p className="cart-item-total">
                    Rp {(item.price * item.qty).toLocaleString("id-ID")}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="cart-remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping */}
          <div className="shipping-box">
            <h2>Choose Shipping Mode :</h2>
            <label className="radio-option">
              <input
                type="radio"
                value="pickup"
                checked={shipping === "pickup"}
                onChange={() => setShipping("pickup")}
              />
              Store Pickup
            </label>
            <label className="radio-option">
              <input
                type="radio"
                value="delivery"
                checked={shipping === "delivery"}
                onChange={() => setShipping("delivery")}
              />
              Delivery at home
            </label>
          </div>

          {/* Summary */}
          <div className="summary-box">
            <p>Subtotal: Rp {subtotal.toLocaleString("id-ID")}</p>
            <p>
              Shipping:{" "}
              {shippingCost === 0
                ? "Free"
                : `Rp ${shippingCost.toLocaleString("id-ID")}`}
            </p>
            <p className="summary-total">
              Total: Rp {total.toLocaleString("id-ID")}
            </p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}
