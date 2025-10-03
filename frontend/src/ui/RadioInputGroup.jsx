import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-10">
        {options.map(({ value, label }) => (
          <RadioInput
            key={value}
            label={label}
            id={value}
            name={name}
            value={value}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-xs md:text-sm mt-2 flex-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
