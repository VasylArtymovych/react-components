import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import Timer from '../components/timer';

export default function RegisterFormPage() {
  function createAction(actionName) {
    const action = value => ({
      type: actionName,
      payload: value,
    });

    action.toString = () => {
      return actionName;
    };

    return action;
  }

  console.log(createAction('increment').toString());

  return (
    <>
      <RegisterForm />
      <Timer />
    </>
  );
}
