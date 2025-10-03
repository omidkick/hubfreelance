import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  //   category ={_id, title, englishTitle, ...}
  const { categories: rawCategories = [] } = data || {};
  //  create an object containing {value, label} ==> because: it be usable in RHFSelect component

  const categories = rawCategories.map((category) => ({
    _id: category._id,
    label: category.title,
    value: category._id,
    description: category.description,
    englishTitle: category.englishTitle,  
    type: category.type,
    createdAt: category.createdAt,
  }));

  const transformedCategories = rawCategories.map((category) => ({
    _id: category._id,
    label: category.title,
    value: category.englishTitle,
    description: category.description,
    englishTitle: category.englishTitle,
    type: category.type,
    createdAt: category.createdAt,
  }));

  return { isLoading, categories, transformedCategories };
}
