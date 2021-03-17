export const arrayBufferToBase64 = (
  img: { data: { type: string; data: number[] } },
): string | undefined => {
  if (img && img.data) {
    let result = '';
    try {
      // @ts-ignore
      const base64String = btoa(String.fromCharCode(...new Uint8Array(img.data.data)));
      result = `data:image/jpeg;base64,${base64String}`;
    } catch (e) {
      console.log(e);
    }
    return result;
  }

  return img && typeof img === 'string' ? img : undefined;
};
