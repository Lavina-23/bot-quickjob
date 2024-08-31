import { type Request, type Response } from "express";
import Vacancy from "../models/Vacancy";
import Service from "../services/service";

const service = new Service();

export const createVacancy = async (req: Request, res: Response) => {
  console.log(req.body);
  const { Body, ProfileName } = req.body;
  const resp = service.createResponse();

  if (Body === "Halo") {
    const mainResp = async () => {
      try {
        await service.reply(
          resp,
          `Halo ${ProfileName} !\nSilakan buat lowongan dengan menggunakan format dibawah ini:`
        );

        await service.reply(resp, "Nama Pekerjaan: Belikan roti | Gaji: 50000");
        res.type("text/xml").send(service.toString(resp));
      } catch (error) {
        console.log(error);
      }
    };

    mainResp();
  } else {
    const vacancy = req.body.Body.trim();

    if (vacancy.startsWith("Nama Pekerjaan:")) {
      // split the vacancy form
      const [title, fee] = vacancy
        .split("|")
        .map((content: String) => content.split(": ")[1]);

      const vacancyData = new Vacancy({
        name: ProfileName,
        job_title: title,
        sallary: fee,
      });

      try {
        const vacancyToSave = await vacancyData.save();
        service.reply(
          resp,
          `Detail Lowongan: \nNama Pekerjaan: ${vacancyData.job_title}\nGaji: ${vacancyData.sallary}\nTerima kasih atas lowongannya 👍🏻`
        );
        res.type("text/xml").send(service.toString(resp));
      } catch (error: any) {
        service.reply(resp, "Format salah !");
        res.type("text/xml").send(service.toString(resp));
      }
    } else {
      service.reply(resp, "Kirimkan lowongannya saja.");
      res.type("text/xml").send(service.toString(resp));
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
