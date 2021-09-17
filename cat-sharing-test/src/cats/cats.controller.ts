import { Query, Res, UseInterceptors } from '@nestjs/common';
import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put, UploadedFile, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/createCat.dto';
import {UpdateCatDto} from './dto/updateCat.dto';
import { diskStorage } from  'multer';
import {v4} from 'uuid'
import path = require('path');


export const storage = {
  storage: diskStorage({
      destination: './photos',
      filename: (req, file, cb) => {
        const extension: string = path.parse(file.originalname).ext;
        const filename: string = v4();

        cb(null, `${filename}${extension}`)
      }
  })
}

@Controller('/api')
export class CatsController {

  constructor(private catService: CatsService) {}
  @Get('/cats')
  async getCats(): Promise<Cat[]>{
    return await this.catService.getCats()
  }

  @Get('/cats/vacant')
  async getVacantCats(): Promise<Cat[]>{
    return await this.catService.getByBooking(true);
  }

  @Get('/cats/nonvacant')
  async getNonVacantCats(): Promise<Cat[]>{
    return await this.catService.getByBooking(false);
  }

  @Get('/cats/:id')
  async getCatDetail(@Param('id',ParseIntPipe) id: number): Promise<Cat>{
    return await this.catService.getCatDetail(id);
  }

  @Patch('/cats/:id')
  @UsePipes(ValidationPipe)
  async updateCat(@Param('id', ParseIntPipe) id: number, @Body() catData: UpdateCatDto) {
    return await this.catService.updateCat(id,catData);
  }


  @Delete('/cats/:id')
  async deleteCat(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return await this.catService.deleteCat(id);
  }

  @Post('/cats')
  @UsePipes(ValidationPipe)
  async createCat(@Body() catData: CreateCatDto){
    return await this.catService.createNewCat(catData);
  }

  @Post('/cats/:id/photo')
  @UseInterceptors(FileInterceptor('file', storage))
    async setPhoto(@Param('id', ParseIntPipe) id: number,
                  @UploadedFile() file){
    await this.catService.setPhoto(id, `${file.path}`);
  }

  @Get('/photo/:id')
  async sendPhoto(@Param('id') id, @Res() res){
    res.sendFile(id, {root: 'photos'});
  }

}

