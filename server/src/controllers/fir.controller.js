import { R2XX, R4XX } from "../API";
import {
  createNewFIR,
  fetchAllFIRs,
  fetchCaseByCaseNo,
  fetchCaseByOperatorId,
  getUserByCNIC,
} from "../services";
import cloudinary from "../configs/cloudinaryConfig";
import { sanitizeFir } from "../utils";

export const createFir = async (req, res, next) => {
  try {
    let upload;
    let { caseNo } = req.body;

    if (await fetchCaseByCaseNo(caseNo)) {
      return R4XX(res, 409, "CASE-ALREADY-EXISTS", `${caseNo} already exists`);
    }

    if (req.file) {
      //Save file if exists.
      upload = await cloudinary.upload(req.file.path, {
        folder: "files",
        resource_type: "auto",
      });
    }

    let complainantId = await getUserByCNIC(req.body?.complainantCNIC);

    let payload = {
      complainantName: req.body?.complainantName,
      complainantCNIC: req.body?.complainantCNIC,
      complainantId: complainantId?._id || undefined,
      complainantPhone: req.body?.complainantPhone,
      datetime: req.body?.datetime,
      applicationType: req.body?.applicationType,
      details: req.body?.details,
      location: req.body?.location,
      suspects: req.body?.suspects,
      relevantDocs: upload?.secure_url,
      operatorId: req?.user,
      caseNo: req.body.caseNo,
    };

    let fir = await createNewFIR(payload);

    R2XX(res, 201, "SUCCESS", "FIR created successfully", {
      fir: sanitizeFir(fir),
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFIRs = async (req, res, next) => {
  try {
    let firs = [];
    switch (req.role) {
      case "admin":
        firs = await fetchAllFIRs();
        break;
      case "operator":
        firs = await fetchCaseByOperatorId(req.user);
        break;
    }
    R2XX(res, 200, "SUCCESS", "FIRs list in payload", {
      firs,
    });
  } catch (error) {
    next(error);
  }
};
