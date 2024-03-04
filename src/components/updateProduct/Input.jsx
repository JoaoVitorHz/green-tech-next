import { useController } from "react-hook-form"

export default function Input(props){
    const { field, fieldState } = useController(props);

    return(
        <div className="flex flex-col gap-1">
            <span className={`text-sm ${fieldState.error && 'text-red-600'}`}>{props.inputTitle} </span>
            <input   
                {...field}
                className={`bg-[#0c0a09] py-1 px-3 border ${fieldState.error ? 'border-red-600' : 'border-white/10'}`}
            />
            {fieldState.error?.type === 'pattern' && <span className="text-xs text-red-600">{props.errorMessage}</span>}
            {fieldState.error?.type === 'required' && <span className="text-xs text-red-600">Campo Invalido</span>}
        </div>
    )
}