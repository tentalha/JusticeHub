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

export const sanitizeFir = (fir) => {
  return {
    _id: fir?._id,
    caseNo: fir?.caseNo,
    details: fir?.caseNo,
    datetime: new Date(fir?.datetime).toLocaleDateString(),
    location: fir?.location,
    status: fir?.status,
    applicationType: fir?.applicationType,
    complainantName: fir?.complainantName,
    complainantCNIC: fir?.complainantCNIC,
    complainantPhone: fir?.complainantPhone,
    relevantDocs: fir?.relevantDocs,
  };
};
