export interface LogInFormInput {
  email: string;
  password: string;
}

export interface SignUpFormInput {
  fullName: string;
  email: string;
  password: string;
}

export interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FAQFormProps {
  name: string;
  subject: string;
  message: string;
}
