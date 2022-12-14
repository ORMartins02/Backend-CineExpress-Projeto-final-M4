import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { Rooms } from "../../entities/rooms.entities";
import { Sessions } from "../../entities/sessions.entities";
import { AppError } from "../../errors/appError";
import { ISessionUpdate } from "../../interfaces/sessions";

const updateSessionService = async (
  { day, hour, roomId, movieId }: ISessionUpdate,
  id: string
): Promise<Sessions> => {
  const sessionRepository = AppDataSource.getRepository(Sessions);
  const roomsRepositories = AppDataSource.getRepository(Rooms);
  const moviesRepositories = AppDataSource.getRepository(Movies);

  if (movieId){
    
  }

  const newRoom = await roomsRepositories.findOneBy({ id: roomId });
  const newMovie = await moviesRepositories.findOneBy({ id: movieId });
  const findSession = await sessionRepository.findOneBy({
    id,
  });

  if (!findSession) {
    throw new AppError("Session dont found", 404);
  }

  await sessionRepository.update(id, {
    day: day ? day : findSession.day,
    hour: hour ? hour : findSession.hour,
    room: newRoom ? newRoom : findSession.room,
    movie: newMovie ? newMovie : findSession.movie,
  });

  const updatedSession = await sessionRepository.findOneBy({
    id,
  });

  return updatedSession!;
};

export default updateSessionService;
