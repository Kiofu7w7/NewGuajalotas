export const uploadFile = async (file) => {
    const urlUpload = "https://api.cloudinary.com/v1_1/dlwr6vxib/upload";

    let formData = new FormData();
    formData.append("upload_preset", "Guajolota");
    formData.append("file", file);

    const resp = await fetch(urlUpload, {
        method: "POST",
        body: formData,
    });
    const data = await resp.json();

    return data.secure_url;
};