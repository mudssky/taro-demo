import { useCallback, useState } from 'react'

type FormName<T extends Record<string, any>> = Exclude<keyof T, number | symbol>

export interface ValidateRule {
  pattern?: RegExp
  message?: string
}
interface FromOptions {
  rules?: ValidateRule[]
}

export function useForm<T extends Record<string, any> = any>() {
  const [value, setValue] = useState<Partial<T>>({})

  const register = useCallback(
    (name: FormName<T>, options?: FromOptions) => {
      return {
        name: name,
        value: value?.[name],
        onChange: (e: any) => {
          setValue({
            ...value,
            [name]: e,
          })
        },
      }
    },
    [value],
  )

  // const handleSubmit = () => {}
  return {
    formValues: value,
    setFormValues: setValue,
    register,
  }
}
