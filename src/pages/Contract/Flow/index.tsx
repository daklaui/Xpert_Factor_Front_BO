import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import CustomTextField from 'src/@core/components/mui/text-field'

function Index() {
  const { control, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='fullName'
        control={control}
        rules={{ required: true, minLength: 7 }}
        render={({ field, fieldState }) => (
          <CustomTextField
            placeholder='fullname'
            label='Full Name'
            control={control}
            {...field}
            error={fieldState.invalid}
            helperMessage='aaa'
          />
        )}
      />

      {/* Ajoutez d'autres champs de formulaire ici si nécessaire */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Index
