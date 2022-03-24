import React, { FC, useState, useEffect } from 'react';

type Props = {
    title: string,
}

const BannerCarosel: FC<Props> = (props: Props) => {
    const [corosel, setCorosel] = useState<number>(0)
    const [data, setData] = useState({
        "url_mobile": "",
    })
    useEffect(() => {

        const getBanner = async () => {
            try {
                const dataBanner = await (await fetch('https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web')).json()
                setData({ ...dataBanner.data[corosel]})
                console.log('i', dataBanner.data[corosel + 1])
            } catch (error) {
                console.log(error)
            }
        }
        getBanner()
    }, [])

    return (
        <div className="container mt-5 px-2">
            <img className="border rounded-lg shadow-lg h-48 w-full"
                src={data.url_mobile}
                alt="product" />
        </div>
    )
}

export default BannerCarosel