/* eslint-disable */

import { v2 } from '@google-cloud/translate';
import { Inject } from '@nestjs/common';
const { Translate } = v2;
import * as dotenv from 'dotenv'

dotenv.config();

export class TranslateService {

    private googleTranslator;

    constructor(
     ) {}

    onModuleInit() {
        this.googleTranslator = new Translate({
            projectId:'intricate-yew-367406',
            keyFilename: String(process.env.GOOGLE_APPLICATION_CREDENTIALS)
        });
    }

    async translate( text : Array<string> | string, target_language : string ) : Promise<any> {
        let [translations] = await this.googleTranslator.translate(text, target_language);
        translations = Array.isArray(translations) ? translations : [translations];
        return translations;

    }



}