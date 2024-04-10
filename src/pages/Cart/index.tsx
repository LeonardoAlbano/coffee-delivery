import { MapPin } from 'lucide-react'
import {
  CartContainer,
  InfoContainer,
  AddressContainer,
  AddressHeading,
  AddressForm,
} from './styles'

export function Cart() {
  return (
    <CartContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form action="">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
                
            </AddressForm>
          </AddressContainer>
        </form>
      </InfoContainer>
    </CartContainer>
  )
}
