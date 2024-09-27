// This is a mock function to simulate image upload
export const uploadImage = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newImage = {
        id: Date.now(),
        title: file.name,
        path: URL.createObjectURL(file)
      };
      resolve(newImage);
    }, 1000);
  });
};