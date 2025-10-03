// import { useState } from "react";
import TextField from "../../ui/TextField";
// import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { message, user } = await mutateAsync(data);

      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className=" space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            register={register}
            required
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            register={register}
            required
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "آدرس ایمیل وارد شده نامعتبر است",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />
          <div>
            {isPending ? (
              <Loader />
            ) : (
              <button className="btn btn--primary w-full">تایید</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
