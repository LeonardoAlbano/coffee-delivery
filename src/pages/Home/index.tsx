import { Hero, HeroContent, Heading, Info } from "./styles"
import { Coffee, Package, ShoppingCartIcon, Timer } from "lucide-react"

import heroImg from '../../../public/images/hero.svg'
import HeroBG from '../../../public/images/hero-bg.svg'

import { useTheme } from 'styled-components'


export function Home() {

    const theme = useTheme()

    return(
        <div>
            <Hero>
              <HeroContent>
                <div>
                    <Heading>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                        <span>Com o coffe Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </Heading>

                    <Info>
                      <div>
                        <ShoppingCartIcon size={32} />
                        <span>Compra simples e segura </span>
                      </div>

                      <div>
                        <Package size={32} />
                        <span>Embalagem mantém o café intacto</span>
                      </div>
                    
                      <div>
                        <Timer size={32} />
                        <span>Entregas rápidas e rastreada</span>
                      </div>

                      <div>
                        <Coffee size={32} />
                        <span>O café chega fresquinho até você</span>
                      </div>
                    </Info>

                </div>
                <img src={heroImg} alt="Coffee-logo" />
              </HeroContent>

              <img src={HeroBG} id="hero-bg" alt="Background" />
            </Hero>

        </div>
    )
}