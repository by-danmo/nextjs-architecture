import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import type {
    ArrayPath,
    FieldArray,
    FieldValues,
    SubmitHandler,
    UseFieldArrayProps,
    UseFieldArrayReturn,
    UseFormProps,
    UseFormReturn
} from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';

export interface FormProps<TFormValues extends FieldValues> {
    /**
     * React Hook Form configuration
     */
    useFormProps?: UseFormProps<TFormValues>;

    /**
     * Form submission handler
     */
    onSubmit: SubmitHandler<TFormValues>;

    /**
     * Zod validation schema
     */
    validationSchema?: any;

    /**
     * Children render prop that receives form methods and field array
     */
    children: (
        methods: UseFormReturn<TFormValues>,
        fieldArray: UseFieldArrayReturn<
            TFormValues,
            ArrayPath<TFormValues>,
            'id'
        >
    ) => React.ReactNode;

    /**
     * Field array configuration
     */
    fieldArrayOption?: UseFieldArrayProps<
        TFormValues,
        ArrayPath<TFormValues>,
        'id'
    >;

    /**
     * Default values for field array
     */
    fieldArrayDefaultValue?:
        | FieldArray<TFormValues, ArrayPath<TFormValues>>
        | FieldArray<TFormValues, ArrayPath<TFormValues>>[];

    /**
     * Whether to show React Hook Form DevTools in development
     * @default true
     */
    showDevTools?: boolean;

    /**
     * Additional form props
     */
    formProps?: React.FormHTMLAttributes<HTMLFormElement>;
}

const Form = <TFormValues extends FieldValues>({
    useFormProps = {},
    onSubmit,
    validationSchema,
    children,
    fieldArrayOption,
    fieldArrayDefaultValue,
    showDevTools: _showDevTools = true,
    formProps
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>({
        mode: 'onChange',
        ...useFormProps,
        ...(validationSchema && { resolver: zodResolver(validationSchema) })
    });

    const fieldArray = useFieldArray({
        control: methods.control,
        name: (fieldArrayOption?.name || 'items') as ArrayPath<TFormValues>,
        rules: fieldArrayOption?.rules,
        ...fieldArrayOption
    });

    useEffect(() => {
        if (fieldArrayDefaultValue) {
            fieldArray.remove();
            fieldArray.append(fieldArrayDefaultValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <form
                className="w-full"
                noValidate
                onSubmit={methods.handleSubmit(onSubmit)}
                {...formProps}
            >
                {children(methods, fieldArray)}
            </form>

            {/* {process.env.NODE_ENV === 'development' && showDevTools && (
                <DevTool control={methods.control} />
            )} */}
        </>
    );
};

export { Form };
