import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";

const listPaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);
<<<<<<< HEAD

  const userRepository = AppDataSource.getRepository(User);

  const idPayment = paymentRepository.findOneBy({ id: id });
=======
  const userRepository = AppDataSource.getRepository(User);
>>>>>>> bfa1f1afc02e3a28cc7e1d3d49db762363163907

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser.paymentInfo) {
    throw new AppError("Data not found", 404);
  }

  return findUser.paymentInfo;
};

export default listPaymentServices;
