import { MapPin, ShoppingCart } from "lucide-react"
import { ContainerHeader, NavBar } from "./styles"

export function Header() {
    return(
        <ContainerHeader>
            <a href="">
                <img src="/logo.svg" alt="Coffe Delivery" />
            </a>

            <NavBar>
                <div>
                    <MapPin size={22} />
                    <span>Joinville, SC</span>
                </div>

                <a href="">
                    <ShoppingCart size={22} />
                    <span>1</span>
                </a>
            </NavBar>
        </ContainerHeader>
    )
}