import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import TextField from "../../../ui/TextField";
import Loader from "../../../ui/Loader";
import useCreateCategory from "./useCreateCategory";
import useEditCategory from "./useEditCategory";

function CreateCategoryForm({ onClose, categoryToEdit = {} }) {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const { label:title, description, englishTitle, type } = categoryToEdit;

  let editValue = {};

  if (isEditSession) {
    editValue = {
      title,
      description,
      englishTitle,
      type,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editValue,
  });

  const { createCategory, isCreating } = useCreateCategory();
  const { editCategory } = useEditCategory();

  const onSubmit = (data) => {
    const newCategory = {
      ...data,
    };

    if (isEditSession) {
      editCategory(
        { id: editId, newCategory: newCategory },
        {
          onSuccess: () => {
            onClose();
            reset(); 
          },
        }
      );
    } else {
      createCategory(newCategory, {
        onSuccess: () => {
          onClose();
          reset(); 
        },
      });
    }
  };

  return (
    <form className="space-y-8 text-right" onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <TextField
        label="عنوان دسته بندی"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان دسته بندی ضروری است",
          minLength: {
            value: 4,
            message: "حداقل ۵ کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />

      {/* Description */}
      <TextField
        label="توضیحات دسته بندی"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات دسته بندی ضروری است",
          minLength: {
            value: 5,
            message: "حداقل ۵ کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />

      {/* English Title */}
      <TextField
        label="عنوان انگلیسی دسته بندی"
        name="englishTitle"
        register={register}
        required
        validationSchema={{
          required: "عنوان انگلیسی ضروری است",
          pattern: {
            value: /^[a-zA-Z0-9\s-]+$/,
            message: "فقط حروف انگلیسی مجاز است",
          },
        }}
        errors={errors}
      />

      {/* Category Type */}
      <RHFSelect
        name="type"
        label="نوع دسته‌بندی"
        register={register}
        required
        options={[
          { value: "project", label: "پروژه" },
          { value: "comment", label: "نظر" },
          { value: "post", label: "پست" },
          { value: "ticket", label: "تیکت" },
        ]}
        
      />

      <div className="!mb-8">
        {isCreating ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
