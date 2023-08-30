import EndPointsRepository from "./EndPointsRepository"

const repositories = {
  endPoint: EndPointsRepository,
};
export const RepositoryFactory = {
  get: (name) => repositories[name],
};
