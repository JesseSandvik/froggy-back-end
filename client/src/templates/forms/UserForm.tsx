import { FormEventHandler, ReactNode } from "react";

import Button from "../../atoms/button/Button";
import Form from "../../organisms/form/Form";
import Heading from "../../atoms/heading/Heading";

type UserFormTemplateProps = {
  firstInput: ReactNode;
  secondInput: ReactNode;
  thirdInput?: ReactNode;
  onFormSubmit: FormEventHandler<HTMLFormElement>;
  pageClassName: string;
  pageHeading: string;
  submitButtonName: string;
  submitButtonDisabled: boolean;
};

const UserFormTemplate = ({
  firstInput,
  secondInput,
  thirdInput,
  onFormSubmit,
  pageClassName,
  pageHeading,
  submitButtonName,
  submitButtonDisabled,
}: UserFormTemplateProps): JSX.Element => {
  return (
    <main className={pageClassName}>
      <Heading tag="1">{pageHeading}</Heading>
      <Form onSubmit={onFormSubmit}>
        <div className="input-container">{firstInput}</div>
        <div className="input-container">{secondInput}</div>
        {thirdInput && <div className="input-container">{thirdInput}</div>}
        <Button disabled={submitButtonDisabled} type="submit">
          {submitButtonName}
        </Button>
      </Form>
    </main>
  );
};

export default UserFormTemplate;
