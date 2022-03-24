import React, { FC, useState, useEffect } from 'react';

type Props = {
    title: string
}
const Category: FC<Props> = (props: Props) => {
    const [data, setData] = useState({
        "icon_web": "",
        "category_name": ""
    })

    useEffect(() => {
        const getCategory = async () => {
            try {
                const dataCategory = await (await fetch('https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true')).json()
                setData({ ...dataCategory.data[0] })
            } catch (error) {
                console.log(error)
            }
        }
        getCategory()
    }, [])
    return (
        <div className="flex flex-nowrap justify-evenly mt-5">
            <div className="relative" >
                <img className="rounded-lg h-12 w-14" src={data.icon_web}></img>
                <p className="w-20 text-xs flex absolute top-14">{data.category_name}</p>
            </div>
            <div className="border rounded-lg shadow-lg h-12 w-14 relative">
                <p className="w-20 text-xs flex absolute top-14">Icon name</p>
            </div>
            <div className="border rounded-lg shadow-lg h-12 w-14 relative">
                <p className="w-20 text-xs flex absolute top-14">Icon name</p>
            </div>
            <div className="border rounded-lg shadow-lg h-12 w-14 relative">
                <p className="w-20 text-xs flex absolute top-14">Icon name</p>
            </div>
        </div>
    )
}

export default Category