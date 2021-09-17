import { EntityRepository, Repository } from 'typeorm';
import { Cat } from './cats.entity';

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {

}