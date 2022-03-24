import React, { FC,useState, useEffect } from 'react';

type Props = {
    title: string
}
const Product: FC<Props> = (props: Props) => {
    const [data, setData] = useState({
        "image_uri": "",
    })

    useEffect(() => {
        const getProduct = async () => {
            try {
                const dataProduct = await (await fetch('https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=1 dst')).json()
                setData({ ...dataProduct.data[0] })
                console.log(dataProduct.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])
    return (
        <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="px-1">
                <img className="h-26 px-1 rounded-lg"
                    src={data.image_uri}
                    alt="product" />
                <h4 className="text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
            </div>
            <div className="px-1">
                <img className="h-26 px-1 rounded-lg"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                    alt="product" />
                <h4 className="text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
            </div>
            <div className="px-1">
                <img className="h-26 px-1 rounded-lg"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                    alt="product" />
                <h4 className="text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
            </div>
            <div className="px-1">
                <img className="h-26 px-1 rounded-lg"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                    alt="product" />
                <h4 className="text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
            </div>
        </div>
    )
}

export default Product