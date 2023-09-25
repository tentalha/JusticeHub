import { FIR } from "../models";

export const createNewFIR = async (fir) => {
  try {
    let newFir = new FIR({
      complainantName: fir?.complainantName,
      complainantCNIC: fir?.complainantCNIC,
      complainantPhone: fir?.complainantPhone,
      complainantId: fir?.complainantId,
      applicationType: fir?.applicationType,
      details: fir?.details,
      location: fir?.location,
      datetime: fir?.datetime,
      suspects: fir?.suspects,
      operatorId: fir?.operatorId,
      relevantDocs: fir?.relevantDocs,
      caseNo: fir?.caseNo,
    });
    await newFir.save();
    return newFir;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCaseByCaseNo = async (caseNo) => {
  try {
    const fir = await FIR.findOne({ caseNo });
    return fir;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCaseByOperatorId = async (operatorId) => {
  try {
    const fir = await FIR.find({ operatorId });
    return fir;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchAllFIRs = async () => {
  try {
    const allFirs = await FIR.find();
    return allFirs;
  } catch (error) {
    return Promise.reject(error);
  }
};
