import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";

const deletePaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

<<<<<<< HEAD
  const idPayment = paymentRepository.findOneBy({
=======
  const idPayment = await paymentRepository.findOneBy({
>>>>>>> bfa1f1afc02e3a28cc7e1d3d49db762363163907
    id: id,
  });

  if (!idPayment) {
    throw new AppError("Data not found", 404);
  }

  await paymentRepository.delete(id);
};

export default deletePaymentServices;
