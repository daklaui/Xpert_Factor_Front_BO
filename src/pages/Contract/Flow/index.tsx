import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import CustomTextField from '../../../SharedComponents/StyledTextField/StyledTextField '

function Index() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
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
            field={undefined} correctValue={undefined} placeholder='fullname'



            label='Full Name'
            control={control}
            {...field}
            error={fieldState.invalid}

            helperMessage='aaa'          />
          
        )}
      />

      {/* Ajoutez d'autres champs de formulaire ici si nécessaire */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Index
