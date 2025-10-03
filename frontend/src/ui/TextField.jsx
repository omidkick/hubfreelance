function TextField({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label
        className="mb-2 block text-secondary-700 text-sm sm:text-base"
        htmlFor={name}
      >
        {label} {required && <span className=" text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block  text-xs md:text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
