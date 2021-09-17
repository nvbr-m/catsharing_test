import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cats.entity';
import { CatRepository } from './cats.repository';
import { CreateCatDto } from './dto/createCat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';
@Injectable()
export class CatsService {

  constructor (
    @InjectRepository(CatRepository) private catRepository: CatRepository) {}

  //cats list
  async getCats(): Promise<Cat[]> {
    return await this.catRepository.createQueryBuilder('q').getMany();
  }

  async getCatDetail(id: number): Promise<Cat> {
    return await this.catRepository.findOne(id);
  }


  async createNewCat(cat: CreateCatDto){
    return await this.catRepository.save(cat);
  }

  // cats list by isBooked field
  async getByBooking(isBooked: boolean):Promise<Cat[]>{
    return await this.catRepository.createQueryBuilder('q')
                                    .where('q.isBooked = :isBooked', {isBooked: isBooked})
                                    .getMany();
  }

  async deleteCat(id: number): Promise<void>{
    const result = await this.catRepository.delete(id)
    if (result.affected === 0){
      throw new NotFoundException('Cat whith id "$id" not found');
    }
  }

  async updateCat(id: number, cat: UpdateCatDto) {
    return this.catRepository.update(id, cat);
  }

  async setPhoto(id: number, photoUrl: string){
    this.catRepository.update(id,{photo: photoUrl} )
  }
}
