import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";
import { useState } from "react";
import { useForm } from "react-hook-form"
import InputMask from 'react-input-mask';

type User = {
  user: {
    name: string;
    email: string;
    phone: number;
  }
}

export function Subscription () {
  const [user, setUser] = useState<User>()
  const { register, handleSubmit, formState: {errors} } = useForm<User>()
  const router = useNavigate()

  function submit(data: any) {
    setUser(data)

    router("/payment")
  }

  return (
    <Container>
      <Box
        text="Plase provide your name, email, address, and phone number"
        title="Personal Info"
        textButton="Next Step"
        goNextButton
        onClickNextButton={handleSubmit(submit)}
      >
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name-input" className="name">Name</label>
          <input
            type="text" 
            placeholder="Jon Doe" 
            className="name-input" 
            value={user?.user?.name}
            {...register("user.name", { required: true, onChange(event) {
              setUser(event.target.value)
            } })}
            />
            {errors.user?.email && <span className="error">This field is required.</span>}

          <label htmlFor="email-input" className="email">Email Address</label>
          <input
            type="email" 
            className="email-input" 
            placeholder="jondoe@test.com"  
            value={user?.user?.email}
            {...register("user.email", { required: true, onChange(event) {
              setUser(event.target.value)
            }, })}
          />
          {errors.user?.name && <span className="error">This field is required.</span>}

          <label htmlFor="phone-number" className="phone">Phone Number</label>
          <InputMask
            mask="(99) 99999-9999" 
            type="phone" 
            className="phone-number" 
            placeholder="(011) 99999-9999" 
            value={user?.user?.phone}
            {...register("user.phone", { required: true, onChange(event) {
              setUser(event.target.value)
            } })}
          />
          {errors.user?.phone && <span className="error">This field is required.</span>}

        </form>
      </Box>
    </Container>
  )
}
