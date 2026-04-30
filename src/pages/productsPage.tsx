import ProductCard from "../components/productCard";
import NavBar from "../components/navbar";
import FooterComponent from "../components/footer";
const ProductsPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bricksProductBlock">
                <ProductCard
                    modelSrc="/models/cementbrick.glb"
                    productName="Flyash Bricks"
                    description="Our premium flyash bricks offer excellent strength and durability, perfect for any construction project."
                    backgroundColor="black"
                    nameColor="white"
                    poster="/models/flyash-brick-poster.webp"  // optional preview image
                    availableSizes={['9"x4"x3"', '9"x9"x4"']}
                />

                <ProductCard
                    modelSrc="/models/solidblock.glb"
                    productName="Solid Block"
                    description="Our premium Solid Block offer excellent strength and durability, perfect for any construction project."
                    backgroundColor="yellow"
                    nameColor="white"
                    poster="/models/flyash-brick-poster.webp"
                    availableSizes={['4"x8"x16"', '6"x8"x16"', '8"x8"x16"']}
                />
            </div>

            <FooterComponent></FooterComponent>

        </div>


    )
}
export default ProductsPage