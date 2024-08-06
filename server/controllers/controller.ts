import { type Request, type Response } from "express";
import Vacancy from "../models/Vacancy";
import Service from "../services/service";

const service = new Service();

export const createVacancy = async (req: Request, res: Response) => {
  console.log(req.body);
  const { Body, ProfileName } = req.body;

  if (Body === "Hallo") {
    const resp = service.reply(
      `Hello ${ProfileName} Please create vacancy using this format: Job Title///Fee///`
    );
    res.type("text/xml").send(resp.toString());
  } else {
    const vacancy = req.body.Body;

    const [title, fee] = vacancy.split("///");
    const vacancyData = new Vacancy({
      name: ProfileName,
      job_title: title,
      sallary: fee,
    });

    try {
      const vacancyToSave = await vacancyData.save();
      const resp = service.reply(
        `Detail Lowongan: \nJob Title: ${vacancyData.job_title}\nsallary: ${vacancyData.sallary}\n Suwun lowongane cak 👍🏻`
      );
      res.type("text/xml").send(resp.toString());
    } catch (error: any) {
      const resp = service.reply("Wrong format !");
      res.type("text/xml").send(resp.toString());
      res.status(400).json({ message: error.message });
    }
  }
};

export const getVacancies = async (req: Request, res: Response) => {
  try {
    const vacancyData = await Vacancy.find();
    res.json(vacancyData);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
