import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryListState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategoryList = useSetRecoilState(categoryListState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = ({ category }: IForm) => {
    setCategoryList((oldCategoryList) => [...oldCategoryList, category]);
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("category")} placeholder="you can add category" />
      <button>Add</button>
    </form>
  );
}
export default CreateCategory;
