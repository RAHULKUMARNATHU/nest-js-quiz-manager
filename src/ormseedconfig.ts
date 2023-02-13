import ormconfig from './ormconfig';
const ormSeedConfig = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
};

export default ormSeedConfig;
