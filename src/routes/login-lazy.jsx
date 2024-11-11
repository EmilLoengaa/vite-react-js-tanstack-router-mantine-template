import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '../components/LoginForm.jsx';

export const Route = createFileRoute('/login-lazy')({
  component: RouteComponent,
})


function RouteComponent() {

    return (

        <div>
           <LoginForm />
        </div>
        
        
      );
}
