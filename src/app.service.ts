/* eslint-disable */

import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { TranslateService  } from 'pim-multilingual'

@Injectable()
export class AppService {

  constructor(

    @Inject(forwardRef(() => TranslateService))
   private service : TranslateService

  ) {}

  async getHello(): Promise<any> {

    let a = await this.service.translate('My name is','id')
    return a;
  }
}
