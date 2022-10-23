import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiInterface } from './api.interface';
import { CreateApiDto } from './create.api.dto';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('api')
    private readonly apiModel: Model<ApiInterface>,
  ) {}
  getVersion(): string {
    return '1.00 - Fulgence Bienvenüe';
  }
  async create(
    name: string,
    createApiDto: CreateApiDto,
  ): Promise<ApiInterface> {
    const createApi = new this.apiModel(createApiDto);
    createApi.key = name;
    console.log('service dto', createApiDto);
    return await createApi.save();
  }
  async update(name: string, id: string, createApiDto: string): Promise<any> {
    await this.findOne(name, id).then(async (updateApi) => {
      updateApi.updateDate = new Date().toISOString();
      updateApi.data = createApiDto;
      const resp = await this.apiModel.findByIdAndUpdate(id, updateApi, {
        new: true,
      });
      console.log('update mongo resp', resp);
      return resp;
    });
  }
  async findAll(name: string): Promise<ApiInterface[]> {
    return await this.apiModel.where('key', name).find().exec();
  }
  async findOne(name: string, id: string): Promise<ApiInterface> {
    console.log('find one name', name);
    console.log('find one id', id);
    try {
      const resp = await this.apiModel.findById(id).exec();
      if (resp.key === name) {
        console.log('response', resp);
        return resp;
      }
    } catch (error) {
      console.log('resp error', error);
      return error;
    }
  }
  async deleteOne(name: string, id: string) {
    return await this.apiModel.findByIdAndDelete(id);
  }
}
