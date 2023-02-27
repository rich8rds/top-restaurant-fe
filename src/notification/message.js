export const notification = (messageApi, type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };