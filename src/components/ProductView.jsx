import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-cart/cartItemsSlice'

import { withRouter } from 'react-router'

import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
        price: 0,
        title: '',
        color: [],
        size:[]
    }

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)
    //hàm tăng giảm số lượng sản phẩm
    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        }else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }
    // click vào sản phẩm hiển thị hình ảnh chi tiết
    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    // hàm kiểm tra thông tin đơn hàng của khách hàng xem khách hàng đã lựa hay chưa
    const check = () => {

        if (color === undefined) {
            alert("Vui lòng chọn màu sắc của sản phẩm !")
            return false
        }

        if (size === undefined) {
            alert("Vui lòng chọn size của sản phẩm !")
            return false
        }
        return true 
    }

    //hàm cho nút thêm vào giỏ hàng
    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))
            alert("Thêm vào giỏ hàng thành công!")
        }
    }

    //hàm đi đến giỏ hàng
    const goToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))
            props.history.push('/cart')
        }
    }

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
            <div className="product__images__list__item" onClick = {() => setPreviewImg(product.image01)}>
                <img src={product.image01} alt={product.title}/>
            </div>
            <div className="product__images__list__item" onClick = {() => setPreviewImg(product.image02)}>
                <img src={product.image02} alt={product.title}/>
            </div>
        </div>
        <div className="product__images__main">
            <img src = {previewImg} alt={product.title}/>
        </div>
        <div className={`product__description ${descriptionExpand ? 'expand' : ''}`}>
            <div className="product__description__title">
                Chi tiết sản phẩm
            </div>
            <div className="product__description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
            <div className="product__description__toggle">
                <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                    {
                        descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                    }
                </Button>
            </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
            <span className="product__info__item__price">
                {numberWithCommas(product.price)}
            </span>
        </div>
        <div className="product__info__item">
            <div className="product__info__item__title">
                Màu sắc
            </div>
            <div className="product__info__item__list">
                {
                    product.color.map((item, index) => (
                        <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                            <div className={`circle bg-${item}`}></div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="product__info__item">
            <div className="product__info__item__title">
                Kích cỡ
            </div>
            <div className="product__info__item__list">
                {
                    product.size.map((item, index) => (
                        <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick = {() => setSize(item)}>
                            <span className="product__info__item__list__item__size">
                            {item}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="product__info__item">
            <div className="product__info__item__title">
                Số lượng
            </div>
            <div className="product__info__item__quantity">
                <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                    <i className = "bx bx-minus"></i>
                </div>
                <div className="product__info__item__quantity__input">
                    {quantity}
                </div>
                <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                    <i className = "bx bx-plus"></i>
                </div>
            </div>
        </div>
        <div className="product__info__item">
            <Button onClick={() => addToCart()}>
                Thêm vào giỏ hàng
            </Button>
            <Button onClick={() => goToCart()}>
                Mua ngay
            </Button>
        </div>
      </div>
      <div className={`product__description mobile ${descriptionExpand ? 'expand' : ''}`}>
            <div className="product__description__title">
                Chi tiết sản phẩm
            </div>
            <div className="product__description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
            <div className="product__description__toggle">
                <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                    {
                        descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                    }
                </Button>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    props: PropTypes.object
}

export default withRouter(ProductView)
