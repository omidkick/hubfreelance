import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;

  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValue = {};

  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValue });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };


  return (
    <form className="space-y-8 text-right" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "تعداد کاراکترهای وارد شده برای عنوان پروژه نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات پروژه"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 15 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        required
        options={categories}
      />

      <div className="">
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" classNames="bg-secondary-50" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <div className="!mb-8">
        {isCreating ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full ">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
