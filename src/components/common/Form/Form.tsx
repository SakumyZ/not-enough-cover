/** @jsxImportSource react */

import { Box } from '@mui/material'
import { createContext } from 'react'
import type { DeepPartial, FieldValues, UseFormReturn } from 'react-hook-form'
import { useForm as useReactHookForm } from 'react-hook-form'

export const formContext = createContext<Partial<UseFormReturn>>({})

type FormProps = UseFormReturn<any> & {
  onSubmit?: (data: FieldValues) => void
}

export const useForm = <TFieldValues extends FieldValues>(
  useFormProps?: Partial<{
    defaultValues: DeepPartial<TFieldValues>
  }>
) => {
  const props = useReactHookForm<TFieldValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    ...useFormProps
  })

  return props
}

export const Form: React.FC<React.PropsWithChildren<FormProps>> = ({
  children,
  onSubmit,
  handleSubmit,
  ...useFormProps
}) => {
  return (
    <formContext.Provider value={useFormProps}>
      <Box component="form" onSubmit={onSubmit && handleSubmit(onSubmit)}>
        {children}
      </Box>
    </formContext.Provider>
  )
}

export default Form
