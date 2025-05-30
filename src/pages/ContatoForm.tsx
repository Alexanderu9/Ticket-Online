import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';

type FormData = {
  email: string;
  assunto: string;
  mensagem: string;
  urgente?: boolean;
};

const ContatoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
    alert(`Email: ${data.email}\nAssunto: ${data.assunto}\nMensagem: ${data.mensagem}\nUrgente: ${data.urgente ? 'Sim' : 'Não'}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 500, mx: 'auto', p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        label="E-mail"
        type="email"
        {...register('email', { required: 'O e-mail é obrigatório' })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Assunto"
        {...register('assunto', { required: 'O assunto é obrigatório' })}
        error={!!errors.assunto}
        helperText={errors.assunto?.message}
      />

      <TextField
        label="Mensagem"
        multiline
        rows={4}
        {...register('mensagem', { required: 'A mensagem é obrigatória' })}
        error={!!errors.mensagem}
        helperText={errors.mensagem?.message}
      />

      <FormControlLabel
        control={<Checkbox {...register('urgente')} />}
        label="Urgente?"
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
  );
};

export default ContatoForm;