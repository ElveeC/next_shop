type ResponseType<Entity> = {
  isError: boolean;
  data?: Entity;
};

export default ResponseType;
