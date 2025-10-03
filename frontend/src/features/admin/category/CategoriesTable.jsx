import CategoryRow from "./CategoryRow";
import Loader from "../../../ui/Loader";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import useCategories from "../../../hooks/useCategories";
import CategoryCardMobile from "./mobile/CategoryCardMobile";

function CategoriesTable() {
  const { isLoading, transformedCategories: categories } = useCategories();
  // console.log(categories);

  if (isLoading) return <Loader />;
  if (!categories.length) return <Empty resourceName="دسته‌بندی" />;

  return (
    <div className="p-2">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>عنوان انگلیسی</th>
          <th>نوع</th>
          <th>توضیحات</th>
          <th>تاریخ ایجاد</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {categories.map((category, index) => (
            <CategoryRow
              key={category.value}
              category={category}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
      <div className="md:hidden space-y-8 mt-8" >
        {categories.map((category, index) => (
          <CategoryCardMobile
            key={category._id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesTable;
