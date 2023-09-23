//Response Sanitizers

export const sanitizeUser = (user) => {
  return {
    _id: user?._id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
    createdAt: new Date(user?.createdAt).toLocaleDateString(), //Converting date-time to readable format.
  };
};



