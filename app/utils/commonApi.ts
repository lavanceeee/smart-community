// Upload Image
export const uploadImageApi = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return $api('api/upload/image', {
        method: 'POST',
        body: formData
    });
};
