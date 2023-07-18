import instance from "..";

const getAllCategories = async () => {
  const res = await instance.get("/category");
  return res.data;
};

const getCategoryId = async (id) => {
  const res = await instance.get(`/category/${id}`);
  return res.data;
};

const createCategory = async (data) => {
  const formData = new FormData();

  for (const key in data) {
    if (key != "image") {
      formData.append(key, data[key]);
    }
  }

  formData.append("image", {
    name: data.image,
    type: "image/jpeg",
    uri: data.image,
  });

  const res = await instance.post("/category", formData);
  return res.data;
};

export { getAllCategories, getCategoryId, createCategory };
