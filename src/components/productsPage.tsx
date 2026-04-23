import ProductCard from "./productCard"

const ProductsPage = () => {
    return (
        <div>

            <ProductCard
                modelSrc="/models/cementbrick.glb"
                productName="Flyash Bricks"
                description="Our premium flyash bricks offer excellent strength and durability, perfect for any construction project."
                backgroundColor="black"
                nameColor="white"
                poster="/models/flyash-brick-poster.webp"  // optional preview image
            />
        </div>


    )
}
export default ProductsPage