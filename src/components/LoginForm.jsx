import { Container, TextInput, PasswordInput, Button } from '@mantine/core'
import style from './login-form.module.css'
function LoginForm() {
  return (
    <div>
         <Container className={style.Container}>
                <TextInput
                size="md"
                label="E-mail"
                description="Skriv din e-mail her:"
                placeholder="Email"
                />
                <PasswordInput
                size="md"
                radius="md"
                label="Adgangskode"
                description="Skriv din adgangskode her:"
                placeholder="Aadgangskode"
                />
                <Button
                variant="gradient"
                gradient={{ from: 'orange', to: 'pink', deg: 109 }}
                className={style.Button}
                >
                Login
                </Button>
            </Container>
    </div>
  )
}

export default LoginForm
